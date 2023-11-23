import React, { useState } from 'react'
import './StaffComponents.css'
import StaffSideBar from './StaffSideBar'

import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function AddCourse() {
 

  const[coursecode,setCourseCode]=useState("");
  const[coursename,setCourseName]=useState("");
  const nav=useNavigate();

  const addCourse=(event)=>{
    event.preventDefault();
    const  courseimage="https://blogassets.leverageedu.com/blog/wp-content/uploads/2019/12/23174504/MS-Subjects.jpg";
    const details={
      coursecode:coursecode,
      coursename:coursename,
      courseimage:courseimage
        }
 if(coursecode.length===0|| coursename.length===0)
 {
 
  toast.error("Enter all fields");

 }
 else{
  fetch("http://localhost:4001/Astaff/addCourse",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(details)
  }
  ).then(()=>{
    console.log("New Detail Added");   
    console.log(JSON.stringify(details));
    nav("/viewcourse")
  })  
 }
}

  return (
    <div><div><StaffSideBar/></div>
    <div className="form-container">
      <form className="form">
        <div className="form-group">
          <label htmlFor="courseId">Course Id</label>
          <input type="text" id="courseid" value={coursecode} onChange={(e) =>setCourseCode(e.target.value)} name="coursecode" required=""/>
        </div>
        <div className="form-group">
          <label htmlFor="courseName">Course Name</label>
          <input name="coursename" id="courseName" value={coursename} onChange={(e) =>setCourseName(e.target.value)} type='text' required=""/>
        </div>
        <button className="form-submit-btn" onClick={addCourse} type="submit">Submit</button>
        <ToastContainer/>
      </form>
    </div>Q
    
    </div>
  )
}

export default AddCourse