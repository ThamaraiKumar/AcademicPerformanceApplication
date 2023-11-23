import React, { useEffect, useState } from 'react';
import StaffSideBar from './StaffSideBar';
import axios from 'axios';

function Attendance() {
  const [details, setDetails] = useState([]);
  const [attendanceStatus, setAttendanceStatus] = useState({});
  const currentDate = new Date().toLocaleDateString();

  useEffect(() => {
    axios.get("http://localhost:1001/student/getAllstudent")
      .then((response) => {
        const initialAttendanceStatus = {};
        response.data.forEach((student) => {
          initialAttendanceStatus[student.emailid] = 'P'; // Assuming all students are initially marked as Present ('P')
        });
        setAttendanceStatus(initialAttendanceStatus);
        setDetails(response.data);
      })
  }, [])

  const handleAttendanceChange = (emailId) => {
    const newAttendanceStatus = {
      ...attendanceStatus,
      [emailId]: attendanceStatus[emailId] === 'P' ? 'A' : 'P',
    };
    setAttendanceStatus(newAttendanceStatus);

    // Send a POST request to your server to update the attendance table
    axios.post("http://localhost:2002/staffAttendance/postAttendance", {
      emailid: emailId,
      date: currentDate,
      att: newAttendanceStatus[emailId],
    })
      .then((response) => {
        console.log("Attendance updated successfully");
      })
      .catch((error) => {
        console.error("Error updating attendance:", error);
      });
  }

  return (
    <div>
      <nav><StaffSideBar /></nav>
      <div>
        <div className='student-details-in-staff'>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Gender</th>
                <th>Email Id</th>
                <th>Department</th>
                <th>Date</th>
                <th>Attendance</th>
              </tr>
            </thead>
            <tbody>
              {details.map((value) => {
                return (
                  <tr key={value.emailid}>
                    <td>{value.name}</td>
                    <td>{value.gender}</td>
                    <td>{value.emailid}</td>
                    <td>{value.department}</td>
                    <td>{currentDate}</td>
                    <td>
                      <button onClick={() => handleAttendanceChange(value.emailid)}>
                        {attendanceStatus[value.emailid] === 'P' ? 'Present' : 'Absent'}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <button className='btn'>POST</button>
        </div>
      </div>
    </div>
  );
}

export default Attendance;

//   const data=[
//       { name: "Manisha", year: 3, gender: "Female", Emailid: "2018meb1236@gmail.com",department:"IT",att:'P' },
// { name: "Tanishq", year: 3, gender: "Male", Emailid: "2018eeb1190@gmail.com",department:"IT" ,att:'P'},
// { name: "Stark", year: 3, gender: "Female", Emailid: "2019csb1212@gmail.com",department:"IT",att:'P' },
// {  name:'arun',gender:'Male',year:3,Emailid:'2018it1234@gmail.com',department:'IT',att:'P'},
//   {  name:'rajesh',gender:'Male',year:3,Emailid:'2016it36@gmail.com',department:'IT',att:'A'},
// {  
//   name:'moorthy',gender:'Male',year:3,Emailid:'2019457it@gmail.com',department:'IT',att:'P'},
// {  
//   name:'raja',gender:'Male',year:3,Emailid:'2027it464@gmail.com',department:'IT',att:'P'},
// {  
//   name:'usha',gender:'Female',year:3,Emailid:'2018it456@gmail.com',department:'IT',att:'P'},
// {  
//   name:'priya',gender:'Female',year:3,Emailid:'2018it34@gmail.com',department:'IT',att:'P'},
// {  
//   name:'Sundar',gender:'Male',year:3,Emailid:'2018it789@gmail.com',department:'IT',att:'P'
// },
// {name:'Kavya',gender:'Female',year:3,Emailid:'2018it800@gmail.com',department:'IT',att:'P'},
// {name:'Dinesh',gender:'Male',year:3,Emailid:'2018it456@gmail.com',department:'IT',att:'P'},
//   ]