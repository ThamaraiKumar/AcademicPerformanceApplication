import React from 'react'
import './StudentComponent.css'
import StudentDashBoard from './StudentDashBoard'

function ViewAttendance() {
  return (
    <div className='attendance-bg'>
    <nav><StudentDashBoard/></nav>
    <h1>ATTENDANCE</h1>
    <div className='attendance-page'>
    <h2>username<br/><br/></h2>
    <h3>Attendance Leavestaken LeavesLeft</h3><br/>
    <h4>28/31       4              2</h4>  
</div>
    </div>
  )
}

export default ViewAttendance