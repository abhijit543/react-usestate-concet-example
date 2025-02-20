import { useState } from "react";

const MyHookOne = () => {
  let city = ["Bangalore", "Chennai", "pune"];

  const [a, b] = city;

  console.log(useState()); // [undefined, ƒ()]

  let [x, y] = useState(1000);
  let [inputStatus, changeStatus] = useState(true);
  let [booklist, updateList] = useState(["html", "css", "bootstrap", "javascript", "php"]);

  const savebook = () => {
    // a = a+b
    // booklist.push("Test Book");  // a + b
    // updateList( [...booklist] );  // a = a

    updateList([...booklist, "Test My Book"]);
  };

  return (
    <section>
      <h1> How to use useState() hook </h1>
      <p>
        {" "}
        {city[0]} , {city[1]},{city[2]}{" "}
      </p>

      <p>
        {a} , {b} , {x} , {inputStatus.toString()}
      </p>

      <button
        onClick={(obj) => {
          y(x + 1);
          changeStatus(false);
        }}
      >
        {" "}
        Click to + the number{" "}
      </button>

      <button
        onClick={(obj) => {
          y(x - 1);
          changeStatus(false);
        }}
      >
        Click to - the number{" "}
      </button>

      <button onClick={y.bind(this, x - 10)}> Click to - the number </button>

      <h2> Total Book : {booklist.length} </h2>

      <button onClick={savebook}> Add Book </button>

      {booklist.map((bookname, index) => {
        return <p key={index}> {bookname} </p>;
      })}
    </section>
  );
};

export default MyHookOne;
