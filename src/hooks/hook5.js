import { useState } from "react";

const MyHookThree = () => {
  let [itemlist, setItem] = useState([{ pname: "Apple", cost: 300, seller: "Alex" }]);
  let [itemname, setName] = useState("");
  let [itemprice, setPrice] = useState("");
  let [sellername, setSeller] = useState("");
  let [itemindex, setIndex] = useState(-1); // Changed from "noindex" to -1

  const save = () => {
    let newitem = { pname: itemname, cost: itemprice, seller: sellername };

    if (itemindex === -1) {
      // Adding new item
      setItem([...itemlist, newitem]);
    } else {
      // Updating existing item at specific index
      let updatedList = [...itemlist];
      updatedList[itemindex] = newitem;
      setItem(updatedList);
      setIndex(-1);
    }

    // Reset fields
    setName("");
    setPrice("");
    setSeller("");
  };

  const deleteItem = (index) => {
    let updatedList = [...itemlist];
    updatedList.splice(index, 1);
    setItem(updatedList);
  };

  const editItem = (item, index) => {
    setName(item.pname);
    setPrice(item.cost);
    setSeller(item.seller);
    setIndex(index);
  };

  return (
    <section>
      <h1>Array of object: Add, Edit, Delete (useState, spread operator)</h1>
      <p>
        <input type="text" onChange={(e) => setName(e.target.value)} value={itemname} placeholder="Item Name" required />
        <input type="text" onChange={(e) => setPrice(e.target.value)} value={itemprice} placeholder="Item Price" required />
        <input type="text" onChange={(e) => setSeller(e.target.value)} value={sellername} placeholder="Seller Name" required />
        <button onClick={save}>{itemindex === -1 ? "Save Item" : "Update Item"}</button>
      </p>
      <p>Available Items: {itemlist.length}</p>
      <table border="1">
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
          {itemlist.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.pname}</td>
              <td>{item.cost}</td>
              <td>{item.seller}</td>
              <td>
                <button onClick={() => editItem(item, index)}>Edit</button>
              </td>
              <td>
                <button onClick={() => deleteItem(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default MyHookThree;
