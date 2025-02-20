
const Myproduct = () =>{
    let allproduct = [
        {pname:"Apple", cost:300, qty:5, seller:"Ramesh"},
        {pname:"Mango", cost:100, qty:15, seller:"Ganesh"},
        {pname:"Banana", cost:200, qty:51, seller:"Punit"},
        {pname:"Orange", cost:120, qty:11, seller:"Ramesh"},
        {pname:"Grapes", cost:100, qty:12, seller:"Ganesh"}
    ];

    return(
        <section>
            <h1> Manage Product : {allproduct.length} </h1>
            <table>
                <thead>
                    <tr>
                        <th> Sl No </th>
                        <th> Product name </th>
                        <th> Price </th>
                        <th> Quantity </th>
                        <th> Seller name </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allproduct.map((product, index)=>{
                            return(
                                <tr key={index}>
                                    <td> {index} </td>
                                    <td> {product.pname} </td>
                                    <td> {product.cost} </td>
                                    <td> {product.qty} </td>
                                    <td> {product.seller} </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </section>
    )
}

export default Myproduct;