import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import'../DashBoardComponents/Home.css'
import '../Components/Login.css'
import SideBar from '../Components/SideBar';
import axios from 'axios';


function Add() {
  const[emailid,setEmailId]=useState("");
  const[phoneno,setPhoneNo]=useState("");
  const[name,setName]=useState("");
  const[department,setDepartment]=useState("");
  const[gender,setGender]=useState("");
  const[seniority,setSeniority]=useState("");
  const nav=useNavigate();



  const authenticate=(event)=>{
    event.preventDefault();
    const details={emailid:emailid,
      phoneno:phoneno,
      name:name,
      gender:gender,
      department:department,
      seniority:seniority,
      staffno:emailid.split("@")[0]
    }
 if(emailid.length===0|| phoneno.length===0 ||gender.length===0 ||seniority.length===0||
  department.length===0||name.length===0)
 {
  toast.error("Enter all fields");
 }
 else{
  axios.post("http://localhost:2001/staff/addStaff",details)
  .then(()=>{
    console.log("New Detail Added");   
    console.log(JSON.stringify(details));
    console.log(event);
    toast.success("Details Stored");
    nav("/showstaff")
  })
}

 }


 
 return (
   <div>
    <div className='sidebarinallpage'><SideBar/></div>
    <div className='heading'>
    <div className='signcover'></div>
    <h2 className='register-form'>STAFF REGISTRATION</h2>
    <form>


    
    <label htmlform="useremail" className='newuser'>Email Id</label><br/>
    <input type="email" placeholder='Email Id' onChange={(e) =>setEmailId(e.target.value)} value={emailid} className='in-put-users' required/>

    <label  htmlform="name" className='newName'>Name</label><br/>
    <input type="text" value={name} onChange={(e) =>setName(e.target.value)} placeholder='Name' className='in-put-name' required/>
   
    <label  htmlform="password" className='newpassword'>Phone no</label><br/>
    <input type="text" value={phoneno} onChange={(e) =>setPhoneNo(e.target.value)} placeholder='Phone number' className='in-put-passwords' required/>
    
    
    
    <label  htmlform="Age" className='newAge'>Gender</label><br/>
    <input type="text" value={gender} onChange={(e) =>setGender(e.target.value)} placeholder='Gender' className='in-put-age' required/>
    
    
    <label  htmlform="gender" className='newGender'>Department</label><br/>
    <input type="text" value={department} onChange={(e) =>setDepartment(e.target.value)} placeholder='Department' className='in-put-gender' required/>

    <label  htmlform="dob" className='newdob'>Seniority</label><br/>
    <input type="text" value={seniority} onChange={(e) =>setSeniority(e.target.value)} placeholder='Associate/Assisant' className='in-put-dob' required/>

     <button type='submit'  onClick={authenticate} className='add-btn'>ADD</button>

     <ToastContainer/>
    </form>
   
    </div>
    </div>
  )
}

export default Add