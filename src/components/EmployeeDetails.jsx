import axios from 'axios';
import React, { useEffect,useState } from 'react'

export default function EmployeeDetails() {
  const[indData,setInddata]=useState('');
  let id='';
useEffect(()=>{
    id =window.location.href.split('/')[4]!=='undefined'?window.location.href.split('/')[4]:'';
    axios
    .get("http://localhost:7444/EmployeeList/"+id)
    .then((res) => {
      setInddata(res.data);
      console.log(indData);
    })
    .catch((err) => console.log(err.message));
},[0]);
  return (
    <div className='App'>
        <h2 className="text-warning text-transform">Employee {indData.Ename} Details</h2>
        <table className="t-ble">
        <thead className="th-ad">
          <tr className="th-row">
            <th>EMP_ID</th>
            <th>EMP_NAME</th>
            <th>EMP_MOBILE NO.</th>
            <th>EMP_EMAIL</th>
            <th>EMP_GENDER</th>
          </tr>
        </thead>
        <tbody className="tb-dy">
        <tr className="tb-row">
        <td>{indData.Eid}</td>
        <td>{indData.Ename}</td>
        <td>{indData.Mobile}</td>
        <td>{indData.Email}</td>
        <td>{indData.Gender}</td>
        </tr>
        </tbody>
        </table>    
        
        </div>
  )
}
