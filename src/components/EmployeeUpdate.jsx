import axios from 'axios';
import React,{useState,useEffect} from 'react'
export default function EmployeeUpdate() {
  const[upData,setUpdata]=useState({
        Eid:'',
        Ename:'',
        Mobile:'',
        Email:'',
        Gender:'',

    });
  let id=window.location.href.split('/')[4]!=='undefined'?window.location.href.split('/')[4]:'';
useEffect(()=>{
    axios
    .get("http://localhost:7444/EmployeeList/"+id)
    .then((res) => {
        setUpdata(res.data);
      console.log(upData);
    })
    .catch((err) => console.log(err.message));
},[0]);

    const addEmpDetails=(e)=>{
        setUpdata({...upData, [e.target.name]:e.target.value})
    }
    const sendData=(e)=>{
        e.preventDefault();
        
        console.log(upData);
        axios.put('http://localhost:7444/EmployeeList/'+id,upData).then(res=>{
          window.alert(`${upData.Ename} Data saved successfully...`);
          setUpdata({...upData,Eid:'',Ename:'',Mobile:'',Email:'',Gender:''});
          window.location.href='http://localhost:3000/employeeupdate';
          
        }).catch(err=>{console.log(err.message)});
       
    }
  return (
    <div className='App'>
       <div className='form_data'>
        <h2 className='text-white pt-0'>Employee Update Form</h2>
        <form name='f' onSubmit={(e)=>{sendData(e)}}>
              <input type="text" value={upData.Eid} name='Eid' required  placeholder='Employee ID' disabled={true}/>
              <input type="text" className='b-style' value={upData.Ename} name='Ename' onChange={(e)=>addEmpDetails(e)}  required  placeholder='Employee Name'/>
              <input type="tel" className='b-style'  value={upData.Mobile} name="Mobile" onChange={(e)=>addEmpDetails(e)} required  placeholder='Mobile Number'/>
              <input type="e-mail"value={upData.Email} name="Email" disabled={true}  placeholder='E-mail'/>
              <div className='d-flex'>
              <input type="radio" value="Male" name="Gender"onChange={(e)=>addEmpDetails(e)} required checked={upData.Gender==='Male'?true:false} id='gen'/><label >Male</label>
              <input type="radio" value="Female" name="Gender"onChange={(e)=>addEmpDetails(e)} required checked={upData.Gender==='Female'?true:false}id='gen1'/><label >Female</label>
              </div>
              <input type="submit" value="Update"/>
            </form>
        </div>
    </div>
  )
}
