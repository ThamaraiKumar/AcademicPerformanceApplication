import React from 'react'
import './Home.css'
import SideBar from '../Components/SideBar'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'


function ShowStaff() {
  const [details, setDetails] = useState([])
     
    
  useEffect(() => {
      axios.get("http://localhost:2001/staff/getAllstaff")
          .then((response) => {
              setDetails(response.data);
          })
  }, [])

  return (
    <div>
    <div><SideBar/></div>
    <div className='staffdetails-heading'>STAFF DETAILS</div>
    <grid className='grid-table'>
    <table className='rwd-table'>
      <thead>
        <tr>
          <th>STAFF ID</th>
          <th>EMAIL ID</th>
          <th>NAME</th>
          <th>DEPARTMENT</th>
          <th>SENIORITY</th>
          <th>PHONE NUMBER</th>
        </tr>
      </thead>
      <tbody>

      {details.map((staff) =>{return (
        <tr key={staff.emailid}>
        <td>{staff.staffno}</td>
        <td>{staff.emailid}</td>
        <td>{staff.name}</td>
        <td>{staff.department}</td>
        <td>{staff.seniority}</td>
        <td>{staff.phoneno}</td>
        
        </tr> )})}
      </tbody>
    </table>
    </grid>
    </div>
  )
}

export default ShowStaff