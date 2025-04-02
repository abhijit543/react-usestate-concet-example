import { useParams, Link } from "react-router-dom";

const MyHookFour = () =>{
    let{name, price, seller} = useParams();

    return(
        <section>
            <h1> How to use useParams() </h1>
            <fieldset>
                <legend> {name} </legend>
                <p> Full Name : { name } </p>
                <p> Cost : { price } </p>
                <p> Sold by : { seller } </p>
            </fieldset>

            <p>
                <Link to="/hook3"> Back To List </Link>
            </p>
        </section>
    )
}

export default MyHookFour;