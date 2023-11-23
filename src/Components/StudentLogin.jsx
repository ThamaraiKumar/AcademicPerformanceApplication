import React, { useState } from 'react'
import { toast, ToastContainer } from "react-toastify";
import './Login.css'
import { useNavigate } from 'react-router-dom';

function StudentLogin() {
    const[emailid,setEmailId]=useState("");
  const[password,setPassword]=useState("");
  const nav=useNavigate();


  
  const authenticate=(event)=>{
    event.preventDefault();
    const details={emailid,password}
 if(emailid.length===0|| password.length===0)
 {
 
  toast.error("Enter all fields");

 }
 else{
  fetch("http://localhost:8080/student/login",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(details)
  }
  ).then(()=>{
    console.log("New Detail Added");   
    console.log(JSON.stringify(details));
    toast.success("Logged In");
    nav("/studentdashboard")
  })  
 }
 
}
  return (
    <div className='student-login'>
    <div className='login-as-student'><h2>Login As Student</h2></div>
    <form>
    <div className='pagecover'></div>
    <label htmlform="useremail" className='loginuser'>Email Id</label><br/>
    <input type="email" placeholder='Email Id' onChange={(e) =>setEmailId(e.target.value)} value={emailid} className='in-put-user' required/>

    <label  htmlform="password" className='loginpassword'>Password</label><br/>
    <input type="password" value={password} onChange={(e) =>setPassword(e.target.value)} placeholder='Password' className='in-put-password' required/>

     <button type='submit'  onClick={authenticate} className='login-btn'>LOGIN</button>

     <ToastContainer autoClose={1000}/>
    </form>
    <button className='btn'>Don't have an Account ? ASK UR TEACHER</button>
    
    </div>
  )
}

export default StudentLogin