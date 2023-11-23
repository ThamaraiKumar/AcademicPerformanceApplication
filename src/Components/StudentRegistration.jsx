import React from 'react'
import { useState } from 'react'
import './StaffRegistration.css'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import StaffDashboard from './StaffComponent/StaffDashboard';

function StudentRegistration() {

    const[name,setName]=useState('');
    const[emailid,setEmail]=useState('');
    const[password,setPassword]=useState('');
    
    const nav=useNavigate();

    const validate=(e)=>{
      e.preventDefault();
      if(name.length===0 || emailid.length===0|| password.length===0)
      {
        toast.error("Fill all fields for futher process");
      }
      else{
    const userdetails={
      emailid:emailid,
      password:password,
      name:name,
      role:"STUDENT"
    };
    axios.post("http://localhost:2003/auth/register",userdetails)
    .then((response=>{
      toast.success("Registered!!");
      nav("/addstudent-registered")
    }))
  }
  }

  return (
    <div>
    <nav><StaffDashboard/></nav>
    <div className='staffregistration-header'>NEW STUDENT</div>
    <form className="staff-form">
    <label htmlFor="username" className="staff-label">Name</label>
  <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="staff-input" placeholder="Enter name" required/>
  <label htmlFor="email" className="staff-label">Email Id</label>
  <input type="text"   value={emailid} onChange={(e)=>setEmail(e.target.value)} className="staff-input" placeholder="Enter  email" required/>
  <label htmlFor="password" className="staff-label">Password</label>
    <input type="password"  value={password} onChange={(e)=>setPassword(e.target.value)} className="staff-input" placeholder="*********" required/>
  <button type='submit'  className='reg-btn' onClick={validate}>NEXT→</button>
  <ToastContainer/>
</form>
    
    
    
    </div>
  )
}

export default StudentRegistration