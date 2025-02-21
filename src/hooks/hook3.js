import { useState } from "react";

function Hook3() {
  let [items, updateItems] = useState([]);
  let [currentItem, setCurrentItem] = useState("");
  const save = () => {
    if (currentItem.trim() !== "") {
      updateItems((prevItems) => [...prevItems, currentItem]);
      setCurrentItem("");
    }
  };

  return (
    <div>
      <input type="text" value={currentItem} onChange={(obj) => setCurrentItem(obj.target.value)} />
      <button onClick={save}>Save</button>
      {items.map((itemlist, index) => (
        <p key={index}>
          {itemlist} - {itemlist.length}
        </p>
      ))}
    </div>
  );
}

export default Hook3;
