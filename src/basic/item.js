import ItemDetails from "./itemdetails";

const ItemList = () =>{
    let productlist = [
        {productname:"Printer", cost:10000, stock:10, soldby:"Alex", productcolor:['black', 'white', 'grey']},
        {productname:"Scanner", cost:12000, stock:15, soldby:"Punit", productcolor:['white', 'grey']},
        {productname:"Keyboard", cost:1000, stock:5, soldby:"Suresh", productcolor:['black']}
    ];
    return(
        <section>
            <h1 align="center"> How To Re-use The Component with Props </h1>
            <ItemDetails pname="Mango" price="100" qty="20" seller="Ramesh" color={['red', 'yellow', 'green']}/>
            <ItemDetails pname="Milk" price="25" qty="4" seller="Amul" color={['white', 'yellow']}/>

            {
                productlist.map((product, index)=>{
                    return(
                        <ItemDetails 
                            pname={product.productname} 
                            price={product.cost} 
                            qty={product.stock} 
                            seller={product.soldby} 
                            color={product.productcolor}
                            key={index}
                        />
                    )
                })
            }
        </section>
    )
}

export default ItemList;