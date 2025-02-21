import { useState } from "react";

const MyHookThree = () => {
  let [itemlist, setItem] = useState([{ pname: "Apple", cost: 300, seller: "Alex" }]);
  let [itemname, setName] = useState("");
  let [itemprice, setPrice] = useState("");
  let [sellername, setSeller] = useState("");
  let [itemindex, setIndex] = useState("noindex");
  const save = () => {
    let newitem = { pname: itemname, cost: itemprice, seller: sellername };
    if (itemindex === "noindex") {
      setItem([...itemlist, newitem]); // Add new item
    } else {
      let updatedList = [...itemlist];
      updatedList[itemindex] = newitem; // Update at the same position
      setItem(updatedList);
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

  const editItem = (item, index) => {
    setName(item.pname);
    setPrice(item.cost);
    setSeller(item.seller);
    setIndex(index);
  };
  return (
    <section>
      <h1>Array of object, add,list,edit,delete.usestate(),[...]- {itemindex}</h1>
      <p>
        <input type="text" onChange={(obj) => setName(obj.target.value)} value={itemname} placeholder="Item Name" required />
        <input type="text" onChange={(obj) => setPrice(obj.target.value)} value={itemprice} placeholder="Item Price" required />
        <input type="text" onChange={(obj) => setSeller(obj.target.value)} value={sellername} placeholder="Item Price" required />
        <button onClick={save}>{itemindex === "noindex" ? "save Item" : "updated Item"}</button>
      </p>
      <p>Available Item:{itemlist.length}</p>
      <table>
        <thead>
          <tr>
            <th>SL NO</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Seller Name</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          {itemlist.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index}</td>
                <td>{item.pname}</td>
                <td>{item.cost}</td>
                <td>{item.seller}</td>
                <td>
                  <button onClick={(obj) => editItem(item, index)}>Edit</button>
                </td>
                <td>
                  <button onClick={(obj) => deleteItem(index)}>Delete</button>
                  <button onClick={deleteItem.bind(this, index)}>Delete</button>
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
