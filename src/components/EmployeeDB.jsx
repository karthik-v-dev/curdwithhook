import axios from "axios";
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

export default function Employeedb() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:7444/EmployeeList")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);
  console.log(data);

  const viewEmpdetails = (Name) => {
    window.alert(`View ${Name} details`);
  };
  const updateRecord = (Name) => {
    window.alert(`Are sure update this Employee ${Name} details`);
  };
  const deleteRecord = (id, Name) => {
    if (window.confirm(`Are you really delete ${Name} record..`)) {
      axios
        .delete("http://localhost:7444/EmployeeList/" + id)
        .then(
          (res) => window.alert(`Delete ${Name} record Successfully....`),
          window.location.reload()
        )
        .catch((err) => console.log(err.message));
    } else {
      window.alert("Check Once which one record do you want to delete");
    }
  };
  const trows = data.map((emp, err) => {
    console.log(err.message);
    return (
      <tr className="tb-row">
        <td>{emp.id}</td>
        <td>{emp.Eid}</td>
        <td>{emp.Ename}</td>
        <td>{emp.Mobile}</td>
        <td>{emp.Email}</td>
        <td>{emp.Gender}</td>
        <td>
          <Link to={"/employeeupdate/" + emp.id}>
            <button
              className="btn-primary"
              onClick={() => {
                updateRecord(emp.Ename);
              }}
            >
              Edit
            </button>
          </Link>
          <Link to={"/employeedetails/" + emp.id}>
            <button
              className="btn-warning"
              onClick={() => {
                viewEmpdetails(emp.Ename);
              }}
            >
              Details
            </button>
          </Link>
          <button
            className="btn-danger"
            onClick={() => {
              deleteRecord(emp.id, emp.Ename);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div className="App">
      <h2 className="text-warning">EMPLOYEE DATABASE</h2>
      <table className="t-ble">
        <thead className="th-ad">
          <tr className="th-row">
            <th>ID</th>
            <th>EMP_ID</th>
            <th>EMP_NAME</th>
            <th>EMP_MOBILE NO.</th>
            <th>EMP_EMAIL</th>
            <th>EMP_GENDER</th>
            <th>VIEW DATA</th>
          </tr>
        </thead>
        <tbody className="tb-dy">{trows}</tbody>
      </table>
    </div>
  );
}
