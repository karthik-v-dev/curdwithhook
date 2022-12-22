import axios from 'axios';
import React,{useState} from 'react'


export default function Employeeform() {
    const[Empdata,setEmpdata]=useState({
        Eid:"EMP"+Math.floor(Math.random()*10).toString()+Math.floor(Math.random()*10).toString()+Math.floor(Math.random()*10).toString()+Math.floor(Math.random()*10).toString()+Math.floor(Math.random()*10).toString(),
        Ename:'',
        Mobile:'',
        Email:'@softi.com',
        Gender:'',

    });

    const addEmpDetails=(e)=>{
        setEmpdata({...Empdata, [e.target.name]:e.target.value})
    }
    const sendData=(e)=>{
        e.preventDefault();
        setEmpdata(Empdata.Email=Empdata.Ename+Empdata.Email)
        console.log(Empdata.Email);
        console.log(Empdata);
        axios.post('http://localhost:7444/EmployeeList',Empdata).then(res=>{
          window.alert(`${Empdata.Ename} Data saved successfully...`);
          setEmpdata({...Empdata,Eid:'',Ename:'',Mobile:'',Email:'',Gender:''})
          window.location.reload()
        }).catch(err=>{console.log(err.message)});
       
    }
  return (
    <div className='App'>
        <div className='form_data'>
        <h2 className='text-white pt-0'>Employee Details Form</h2>
        <form name='f' onSubmit={(e)=>{sendData(e)}}>
              <input type="text" value={Empdata.Eid} name='Eid' required  placeholder='Employee ID' disabled={true}/>
              <input type="text" className='b-style' value={Empdata.Ename} name='Ename' onChange={(e)=>addEmpDetails(e)}  required  placeholder='Employee Name'/>
              <input type="tel" className='b-style'  value={Empdata.Mobile} name="Mobile" onChange={(e)=>addEmpDetails(e)} required  placeholder='Mobile Number'/>
              <input type="e-mail"className='b-style' value={Empdata.Ename+Empdata.Email} name="Email" disabled={true}  placeholder='E-mail'/>
              <div className='d-flex'>
              <input type="radio" value="Male" name="Gender"onChange={(e)=>addEmpDetails(e)} required  id='gen'/><label >Male</label>
              <input type="radio" value="Female" name="Gender"onChange={(e)=>addEmpDetails(e)} required id='gen1'/><label>Female</label>
              </div>
              <input type="submit" value="Add Employee"/>
            </form>
        </div>
    </div>
  )
}
