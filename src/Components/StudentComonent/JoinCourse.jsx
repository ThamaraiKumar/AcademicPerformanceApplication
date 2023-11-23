import React from 'react'
import '../StaffComponent/StaffComponents.css'
import { Link } from 'react-router-dom'
import StudentSideBar from './StudentSideBar'

function JoinCourse() {
  return (
    <div><div><StudentSideBar/></div>
    <div className="form-container">
      <form className="form">
        <div className="form-group">
          <label htmlFor="courseId">Course Id</label>
          <input type="courseid" id="courseid" name="courseid" required=""/>
        </div>
        <div className="form-group">
          <label htmlFor="courseName">Course Name</label>
          <input name="coursename" id="courseName" type='text' required=""/>
        </div>
        <Link to="/student/viewcourse" style={{textDecoration:'none'}}><button className="form-submit-btn" type="submit">JOIN</button></Link>
      </form>
    </div>
    
    </div>
  )
}

export default JoinCourse