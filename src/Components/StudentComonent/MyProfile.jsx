import React, { useEffect, useState } from 'react'
import StudentDashBoard from './StudentDashBoard'
import axios from 'axios';


function MyProfile() {
  const [details, setDetails] = useState([]);

  const emailid = localStorage.getItem('emailid');
  useEffect(() => {
    axios.get(`http://localhost:1001/student/getstudent/${emailid}`)
        .then((response) => {
            console.log('API Response:', response.data);
            setDetails(Array.isArray(response.data) ? response.data : [response.data]);
        })
        .catch((error) => {
            console.error('Error in profile fetching', error);
        });
}, [emailid]);
  return (
    <div>
    <nav><StudentDashBoard/></nav>
    <div className="profile-container">
  <div className="profile-card">
    <img src={`https://eu.ui-avatars.com/api/?name=${emailid}&size=250`} alt="Person" className="card__image"/>
    {
      details.map((data) => (
        <div  key={data.emailid}>
    <p className="card__name">{data.name}</p>
    <button className="btnpro draw-border">{data.department}</button>
    <button className="btnpro draw-border">{data.gender}</button>
    </div>
      ))}
  </div>
 
</div>

    </div>
  )
}

export default MyProfile