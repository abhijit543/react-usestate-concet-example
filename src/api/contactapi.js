import { useState } from "react";
import { Link } from "react-router-dom";
const MyContatct = () => {
  let [info, setInfo] = useState({});

  const pickValue = (obj) => {
    info[obj.target.name] = obj.target.value;
    setInfo(info);
  };

  let [nameError, setNameError] = useState("");
  let [mobileError, setMobileError] = useState("");
  let [emailError, setEmailError] = useState("");
  let [cityError, setCityError] = useState("");
  let [messageError, setMessageError] = useState("");

  const save = (formObj) => {
    formObj.preventDefault();
    let formstatus = true;

    if (!info.fname || info.fname === "") {
      formstatus = false;
      setNameError("invalid name !");
    } else {
      setNameError("");
    }
    //mobile check
    let mpattern = /^[0]?[6789]\d{9}$/;
    if (!info.mobile || !mpattern.test(info.mobile)) {
      formstatus = false;
      setMobileError("invalid mobile no !");
    } else {
      setMobileError("");
    }

    //email check
    if (!info.email || info.email === "") {
      formstatus = false;
      setEmailError("invalid email id !");
    } else {
      setEmailError("");
    }

    //city check
    if (!info.city || info.city === "") {
      formstatus = false;
      setCityError("invalid city !");
    } else {
      setCityError("");
    }

    //city check
    if (!info.message || info.message === "") {
      formstatus = false;
      setMessageError("invalid message !");
    } else {
      setMessageError("");
    }
  };

  return (
    <section>
      <h1> Validate User Input </h1>
      <form onSubmit={save}>
        <table>
          <tbody>
            <tr>
              <td> Full Name </td>
              <td>
                <input type="text" name="fname" onChange={pickValue} /> <small> {nameError} </small>
              </td>
              <td> Mobile </td>
              <td>
                <input type="number" name="mobile" onChange={pickValue} /> <small> {mobileError} </small>
              </td>
            </tr>

            <tr>
              <td> Email Id </td>
              <td>
                <input type="email" name="email" onChange={pickValue} /> <small> {emailError} </small>
              </td>
              <td> City Name </td>
              <td>
                <input type="text" name="city" onChange={pickValue} /> <small> {cityError} </small>
              </td>
            </tr>

            <tr>
              <th> Message </th>
              <td colSpan={3}>
                <textarea name="message" rows="8" cols="70" onChange={pickValue}></textarea> <small> {messageError} </small>
              </td>
            </tr>

            <tr>
              <th colSpan={4} align="center">
                <button> Send Message </button>
              </th>
            </tr>
          </tbody>
        </table>
      </form>
    </section>
  );
};
export default MyContatct;
