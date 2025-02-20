
const ItemDetails = (info) =>{
    return(
        <fieldset>
            <legend> { info.pname } </legend>
            <p> Cost : Rs.{info.price} </p>
            <p> Quantity : {info.qty} </p>
            <p> Seller : {info.seller} </p>
            <dl>
                <dt> In Color </dt>
                {
                    info.color.map((colorName, index)=>{
                        return(
                            <dd key={index}> {colorName} </dd>
                        )
                    })
                }
            </dl>
        </fieldset>
    )
}

export default ItemDetails;

// info = { pname:"Milk" price:"25" qty:"4" seller:"Amul"}