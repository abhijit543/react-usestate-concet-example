import { useState } from "react";
import { Link } from "react-router-dom";

const MyHookThree = () => {
  let [itemlist, setItem] = useState([{ pname: "Apple", cost: 300, seller: "Alex" }]);
  let [itemname, setName] = useState("");
  let [itemprice, setPrice] = useState("");
  let [sellername, setSeller] = useState("");

  const save = () => {
    let newitem = { pname: itemname, cost: itemprice, seller: sellername };

    if (itemindex === "noindex") {
      setItem([...itemlist, newitem]);
    } else {
      itemlist[itemindex] = newitem; // update value in array on certain index
      setItem([...itemlist]); // update in state
      setIndex("noindex");
    }

    setName("");
    setPrice("");
    setSeller("");
  };

  const deleteItem = (index) => {
    itemlist.splice(index, 1);
    setItem([...itemlist]);
  };

  let [itemindex, setIndex] = useState("noindex");
  const editItem = (item, index) => {
    setName(item.pname);
    setPrice(item.cost);
    setSeller(item.seller);
    setIndex(index);
  };

  return (
    <section>
      <h1> Array of object, add, list, edit, delete, useState(), [...] - {itemindex} </h1>

      <p>
        <input type="text" onChange={(obj) => setName(obj.target.value)} value={itemname} placeholder="Item Name" />
        <input type="text" onChange={(obj) => setPrice(obj.target.value)} value={itemprice} placeholder="Item Price" />
        <input type="text" onChange={(obj) => setSeller(obj.target.value)} value={sellername} placeholder="Seller Name" />
        <button onClick={save}> Save Item </button>
      </p>

      <p> Available Item : {itemlist.length} </p>
      <table>
        <thead>
          <tr>
            <th> Sl No </th>
            <th> Product Name </th>
            <th> Product Price </th>
            <th> Seller Name </th>
            <th colSpan={2}> Action </th>
          </tr>
        </thead>
        <tbody>
          {itemlist.map((item, index) => {
            return (
              <tr key={index}>
                <td> {index} </td>
                <td>
                  <Link to={`/hook7/${item.pname}/${item.cost}/${item.seller}`}> {item.pname} </Link>
                </td>
                <td> {item.cost} </td>
                <td> {item.seller} </td>
                <td>
                  <button onClick={(obj) => editItem(item, index)}> Edit </button>
                </td>
                <td>
                  <button onClick={(obj) => deleteItem(index)}> Delete </button>
                  <button onClick={deleteItem.bind(this, index)}> Delete </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};
export default MyHookThree;
