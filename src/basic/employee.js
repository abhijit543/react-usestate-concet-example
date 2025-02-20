import "bootstrap/dist/css/bootstrap.min.css";
const Myemployee = () => {
  let employees = [
    { id: 1, name: "John Doe", position: "Software Engineer", salary: 80000 },
    { id: 2, name: "Jane Smith", position: "Project Manager", salary: 90000 },
    { id: 3, name: "Michael Johnson", position: "UI/UX Designer", salary: 75000 },
  ];
  return (
    <div className="container mt-4">
      <h2 className="text-center">Employee List</h2>
      <table className="table table-striped table-bordered table-hover mt-3">
        <thead>
          <tr>
            <th>Key</th>
            <th>Name</th>
            <th>Position</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, index) => (
            <tr key={index}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.position}</td>
              <td>{emp.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Myemployee;
