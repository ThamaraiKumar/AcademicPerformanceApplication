import React from 'react'
import './StudentComponent.css'
import StudentDashBoard from './StudentDashBoard'

function ViewAttendance() {
  return (
    <div>
    <nav><StudentDashBoard/></nav>
    <div className='attendance-bg'>
    <h1>ATTENDANCE</h1>
    <p className='attendance-page'>
    <h2>username<br/></h2><br/>
    <h3>Attendance Leavestaken LeavesLeft</h3><br/>
    <h4>28/31       4              2</h4>
    
   </p>
</div>
    </div>
  )
}

export default ViewAttendance