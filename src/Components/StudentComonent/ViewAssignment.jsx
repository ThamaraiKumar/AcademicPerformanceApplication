import React from 'react'
import './StudentComponent.css'
import StudentCourseBar from './StudentCourseBar'
import { Link } from 'react-router-dom'


function ViewAssignment() {
  return (
    <div>
    <nav><StudentCourseBar/></nav>
    <h1>ASSIGNMENT</h1>
    <form id="file-upload-form" className="uploader">
    <input id="file-upload" type="file" name="fileUpload" accept="image/*" />
  
    <label htmlFor="file-upload" id="file-drag">
      <img id="file-image" src="#" alt="Preview" className="hidden"/>
      <div id="file-start">
        <i className="fa fa-download" aria-hidden="true"></i>
        <div>Select a file to upload</div>
        <div id="notimage" className="hidden">Please select an image</div>
        <span id="file-upload-btn" className="btn btn-primary">Select a file</span>
      </div>
      <div id="response" className="hidden">
        <div id="messages"></div>
        <progress className="progress" id="file-progress" value="0">
          <span>0</span>%
        </progress>
      </div>
    </label>
    <Link to="/student/viewcourse" style={{textDecoration:'none',color:'inherit'}}><button type='submit' className='btn submit-assginment'>Submit</button></Link>
    </form>
    </div>
  )
}

export default ViewAssignment