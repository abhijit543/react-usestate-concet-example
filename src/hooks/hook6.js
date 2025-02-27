import { useState } from "react";

function Hook6() {
  let [transvalue, setTransValue] = useState([{ trannum: "VEHICLE-1", trantype: "Small", tranroot: "Burrga", trandrive: "sdf", tranmob: "2423423222" }]);
  return (
    <div class="container">
      <div class="form-container">
        <h2>New Transport</h2>
        <form>
          <label>Transport Number</label>
          <input type="text" placeholder="Enter Transport Number" />

          <label>Root Name</label>
          <input type="text" placeholder="Enter Root Name" />

          <label>Size</label>
          <input type="text" placeholder="Enter Size" />

          <label>Driver Name</label>
          <input type="text" placeholder="Enter Driver Name" />

          <label>Driver Mobile No</label>
          <input type="text" placeholder="Enter Mobile Number" />

          <button type="submit" class="save-btn">
            Save
          </button>
        </form>
      </div>

      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>T-Id</th>
              <th>T-Number</th>
              <th>Type</th>
              <th>Transport Root</th>
              <th>Driver</th>
              <th>Mobile No</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {transvalue.map((transport, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{transport.trannum}</td>
                  <td>{transport.trantype}</td>
                  <td>{transport.tranroot}</td>
                  <td>{transport.trandrive}</td>
                  <td>{transport.tranmob}</td>
                  <td>
                    <button class="delete-btn">Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Hook6;
