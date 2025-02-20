import { useState } from "react";

const MyHookTwo = () =>{

    let[booklist, updateBookList] = useState( ['html', 'css', 'bootstrap', 'javascript', 'php'] );
    let[message, changeMessage] = useState("");

    const delbook = (index) =>{
        changeMessage( booklist[index] + " Deleted from list...");
        booklist.splice(index, 1); // delete element from given position 
        updateBookList([...booklist]); // update remaining element in state
    }

    let[newbook, setBook] = useState("");
    
    const save = () =>{
        updateBookList([...booklist, newbook]);
    }

    return(
        <section>
            <h1> Add, list, delete, useState(), [...]spread operator </h1>
            <p> {message} </p>

            <p> {newbook} </p>

            <p> 
                Enter Book Name : <input type="text" onChange={ obj=>setBook(obj.target.value) }/> 
                <button onClick={save}> Save </button>
            </p>

            <table>
                <thead>
                    <tr>
                        <th> Sl No </th>
                        <th> Book Name </th>
                        <th> Action </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        booklist.map((book, index)=>{
                            return(
                                <tr key={index}>
                                    <td> {index} </td>
                                    <td> {book} </td>
                                    <td> 
                                        <button onClick={obj=>delbook(index)}> Delete </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </section>
    )
}

export default MyHookTwo;