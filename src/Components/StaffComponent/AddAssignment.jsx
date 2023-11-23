import React from 'react'
import './StaffComponents.css'
import StaffSideBar from './StaffSideBar'

function AddAssignment() {
  return (
    <div className="assignment-body">
    <div><StaffSideBar/></div>
    <h1>Course Name</h1>
    <form className="assignmentform">
    <input className="assignmentinput" type="text" placeholder="Course Code"/>
    <input className="assignmentinput" type="text" placeholder="Title"/>
    <textarea className="assignmenttextarea" placeholder="Descrption"></textarea> 
    <center><button className="assignmentbutton">Submit</button></center>
</form>
    
    
    </div>
  )
}

export default AddAssignment