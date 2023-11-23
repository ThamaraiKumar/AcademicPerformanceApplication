import React, { useEffect, useState } from 'react'
import './StaffComponents.css'
import StaffSideBar from './StaffSideBar';
import axios from 'axios';

function StudentDetails() {
  const[details,allDetails]=useState([]);
  useEffect(()=>{
    axios.get("http://localhost:1001/student/getAllstudent")
    .then((response)=>{
      allDetails(response.data);
    })
  },[]);
   
  return (
    <div>
    <div><StaffSideBar/></div>
    <h1 style={{color:'black'}}>Students Details</h1>
    <div className='student-details-in-staff'>
      <table>
        <thead>
          <tr>
          <th>Email Id</th>
            <th>Roll No</th>
            <th>Gender</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {details.map((value, key) => {
            return (
              <tr key={key}>
              <td>{value.emailid}</td>
              <td>{value.rollno}</td>
              <td>{value.gender}</td>
                <td>{value.department}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default StudentDetails

// const data=[
//   { name: "Manisha", year: 3, gender: "Female", Emailid: "2018meb1236@gmail.com",department:"IT" },
// { name: "Tanishq", year: 3, gender: "Male", Emailid: "2018eeb1190@gmail.com",department:"IT" },
// { name: "Stark", year: 3, gender: "Female", Emailid: "2019csb1212@gmail.com",department:"IT" },
// {  name:'arun',gender:'Male',year:3,Emailid:'2018it1234@gmail.com',department:'IT'},
// {  name:'rajesh',gender:'Male',year:3,Emailid:'2016it36@gmail.com',department:'IT'},
// {  
// name:'moorthy',gender:'Male',year:3,Emailid:'2019457it@gmail.com',department:'IT'},
// {  
// name:'raja',gender:'Male',year:3,Emailid:'2027it464@gmail.com',department:'IT'},
// {  
// name:'usha',gender:'Female',year:3,Emailid:'2018it456@gmail.com',department:'IT'},
// {  
// name:'priya',gender:'Female',year:3,Emailid:'2018it34@gmail.com',department:'IT'},
// {  
// name:'Sundar',gender:'Male',year:3,Emailid:'2018it789@gmail.com',department:'IT'
// },
// {name:'Kavya',gender:'Female',year:3,Emailid:'2018it800@gmail.com',department:'IT'},
// {name:'Dinesh',gender:'Male',year:3,Emailid:'2018it456@gmail.com',department:'IT'},
// ]