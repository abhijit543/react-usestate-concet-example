import { useParams, Link } from "react-router-dom";
const MyHookSeven = () => {
  let { name, price, seller } = useParams();
  return (
    <section>
      <h1>How to use Params</h1>
      <fieldset>
        <legend> {name} </legend>
        <p> Full Name : {name} </p>
        <p> Cost : {price} </p>
        <p> Sold by : {seller} </p>
      </fieldset>
      <p>
        <Link to="/hook4">Back To List</Link>
      </p>
    </section>
  );
};
export default MyHookSeven;
