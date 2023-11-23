import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './StaffComponents.css'
import StaffSideBar from './StaffSideBar';
import { Link } from 'react-router-dom';
import axios from 'axios';

 function Courses() {

  const [details, setDetails] = useState([])
     
    
  useEffect(() => {
      axios.get("http://localhost:4001/Astaff/getAllCourse")
          .then((response) => {
              setDetails(response.data);
          })
  }, [])


  
  return (
    <div><nav><StaffSideBar/>
    <Link to="/addcourse" style={{textDecoration:'none',color:'inherit'}}><button className='add-btn-course'>ADD COURSE</button></Link>
    </nav>
   <div className='card1-course'>
   {details.map((course) =>{return (
    <div key={course.courseid}>
    <Card sx={{ maxWidth: 245 ,backgroundColor:''}}>
        <img src={course.courseimage} height={180} alt=''/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {course.coursename}<br/><h6>{course.coursecode}</h6>
        </Typography>
        </CardContent>
        <CardActions>
        <Link to="/add/assignment" style={{textDecoration:'none',color:'inherit'}}><Button size="small">ADD ASSIGNMENT</Button></Link>
        <Button size="small">GRADE IT</Button>
        </CardActions>
        </Card>
        </div>
        )})}
    </div>
      
    
    </div>
  );
}
export default Courses


// <div className='card2-course'>
//     <Card sx={{ maxWidth: 345 ,backgroundColor:''}}>
//       <CardMedia
//         sx={{ height: 120 }}
//         image='https://oilab.in/public/img/courses/full-stack-web-developer.jpg'
//         title="21PY506"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           FULL STACK<br/><h6>21FS507</h6>
//         </Typography>
//         <Typography variant="body2" color="black">
//          LEARN TO DEVLOP WEBAPPS
//         </Typography>
//       </CardContent>
//       <CardActions>
//       <Link to="/add/assignment" style={{textDecoration:'none',color:'inherit'}}><Button size="small">ADD ASSIGNMENT</Button></Link>
//         <Button size="small">GRADE IT</Button>
//       </CardActions>
//     </Card>
//     </div>

//     <div className='card3-course'>
//     <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         sx={{ height: 120 }}
//         image='https://www.mashupstack.com/assets/image/course-images/SPRING-DEVELOPER-MASHUPSTACK.jpg?version=2.14'
//         title="21PY506"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           FULL STACK<br/><h6>21FS507</h6>
//         </Typography>
//         <Typography variant="body2" color="black">
//          LEARN TO DEVLOP WEBAPPS
//         </Typography>