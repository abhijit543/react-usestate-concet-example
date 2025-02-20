import ItemDetails from "./itemdetails";

const Myuser = () =>{
    let alluser = ['Alex', 'Sumit', 'Dhiraj', 'Punit R', 'Sunita', 'Rajesh', 'Pawan', 'Manoj'];

    return(
        <section>
            <h1> Manage User : { alluser.length } </h1>
            {
                alluser.map((fullname, index)=>{
                    return(
                        <p className="four" key={index}> {index} # { fullname } </p>
                    )
                })
            }

            <ItemDetails pname="Mango" price="100" qty="20" seller="Ramesh" color={['red', 'yellow', 'green']}/>
            <ItemDetails pname="Milk" price="25" qty="4" seller="Amul" color={['white', 'yellow']}/>
        </section>
    )
}

export default Myuser;