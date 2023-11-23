import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import StaffSideBar from './StaffSideBar';
import axios from 'axios';

function AddStudent() {
    const[emailid,setEmailId]=useState("");
    const[phoneno,setPhoneno]=useState("");
    const[name,setName]=useState("");
    const[department,setDepartment]=useState("");
    const[gender,setGender]=useState("");
    const[year,setyos]=useState("");
    const nav=useNavigate();
    const authenticate=(event)=>{
      event.preventDefault();
   if(emailid.length===0|| phoneno.length===0)
   {
   
    toast.error("Enter all fields");
   }
   else{
   const userdetails={
    emailid:emailid,
    phoneno:phoneno,
    name:name,
    department:department,
    gender:gender,
    year:year,
    rollno:emailid.split("@")[0]
  };
  axios.post("http://localhost:1001/student/addStudent",userdetails)
  .then((response=>{
    toast.success("Registered!!");
    nav("/studentdetails")
  }))
   }}
  return (
    <div>
    
     <div>
      <div className='sidebarinallpage'><StaffSideBar/></div>
      <div className='heading'>
      <div className='signcover'></div>
      <h2 className='register-form' style={{color:'black'}}>ADD STUDENT</h2>
      <form>
      <label htmlform="useremail" className='newuser'>Email Id</label><br/>
      <input type="email" placeholder='Email Id' onChange={(e) =>setEmailId(e.target.value)} value={emailid} className='in-put-users' required/>
  
      <label  htmlform="name" className='newName'>Name</label><br/>
      <input type="text" value={name} onChange={(e) =>setName(e.target.value)} placeholder='Name' className='in-put-name' required/>
 
      <label  htmlform="Age" className='newAge'>Gender</label><br/>
      <input type="text" value={gender} onChange={(e) =>setGender(e.target.value)} placeholder='F/M' className='in-put-age' required/>
 
      <label  htmlform="gender" className='newGender'>Department</label><br/>
      <input type="text" value={department} onChange={(e) =>setDepartment(e.target.value)} placeholder='Department' className='in-put-gender' required/>
 
      <label  htmlform="dob" className='newdob'>Year</label><br/>
      <input type="text" value={year} onChange={(e) =>setyos(e.target.value)} placeholder='year of study' className='in-put-dob' required/>
      <label  htmlform="phoneno" className='newpassword'>Phone No</label><br/>
            <input type="text" value={phoneno} onChange={(e) =>setPhoneno(e.target.value)} placeholder='Mobile No' className='in-put-passwords' required/>

      <button type='submit'  onClick={authenticate} className='add-btn'>ADD</button>
       <ToastContainer/>
      </form>
     </div>
    </div>
    </div>
  )
}

export default AddStudent

// <label  htmlform="rollno" className='newroll'>Rollno</label><br/>
// <input type="text" value={rollno} onChange={(e) =>setRollno(e.target.value)} placeholder='roll number' className='in-put-rollno' required/>