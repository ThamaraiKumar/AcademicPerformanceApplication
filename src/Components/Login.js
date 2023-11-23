import React, { useState } from 'react'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './Login.css'
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { login } from "../Redux/UserSlice";
import axios from 'axios';

function Login() {
  
  const nav=useNavigate();
  const dispatch = useDispatch();
   
  // const[emailid,setemailId]=useState("");
  // const[password,setPassword]=useState("");


  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
    // console.log(formdata);
  };
  const [formdata, setFormdata] = useState({
    emailid: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(formdata.emailid.length===0 || formdata.password.length===0)
  {
    toast.error("Enter all fields");
  }
//  else if(formdata.username!=="Thamarai@gmail.com" && formdata.password!=="ThamaraiAdmin")
//  {
//   toast.warning("Invalid Admin Entry");
//  }
else{

  const userAuth={
    emailid:formdata.emailid,
    password:formdata.password
  };
  axios.post("http://localhost:2003/auth/login",userAuth)
  .then((response=>{
    const token=response.data.token;
    const role=response.data.role;
    const email=response.data.emailid;
    if(token)
    {
     localStorage.setItem("token",token);
     localStorage.setItem("role",role);
     localStorage.setItem("emailid",email);
    if(role==="ADMIN")
    {
      nav("/dashboard")
    }
    else if(role==="STAFF")
    {
      nav("/staffdashboard")
    }
    else if(role==="STUDENT")
    {
      nav("studentdashboard")
    }
    else{
      toast.warn("Inavlid User");
    }
    }
    else{
      toast.error("Invalid Login");
    }
  })).catch((error)=>{
    toast.error(error);
  })
}
    dispatch(
      login({
        username: formdata.emailid,
      })
    );
  };

  return (
    <div>
    <div className='login'>
    <NavBar/>
    <div className='auth-form-container'>
    <div id="cover"></div>
    <form id="formContent">
    <h2>LOGIN</h2><br/>


    
    <label htmlform="useremail" className='Aloginuser'>Email Id</label><br/>
    <input type="email" name='emailid' placeholder='Email Id' value={formdata.emailid}
    onChange={handleChange} className='in-put-user' required/>

    <label  htmlform="password" className='loginpassword'>Password</label><br/>
    <input type="password" name='password' value={formdata.password}
    onChange={handleChange} placeholder='Password' className='in-put-password' required/>

    <button type='submit' onClick={handleSubmit} className='login-btn'>LOGIN</button>
    <ToastContainer autoClose={1000}/>

    </form>
    
    </div>
    </div>

    </div>
  );
}

export default Login;




  


  
//   const authenticate=(event)=>{
//     event.preventDefault();
//  if(emailid.length===0|| password.length===0)
//  {
 
//   toast.error("Enter all fields");

//  }
//  else if(emailid!=="Thamarai@gmail.com" && password!=="ThamaraiAdmin")
//  {
//   toast.warning("Invalid Admin Entry");
//  }
//  else{
//   toast.success("LoggedIn");
//   nav("/home");
//  }
 
// }
// const[emailid,setEmailId]=useState("");
//   const[password,setPassword]=useState("");



// const userAuth={
//   email:emailid,
//   password:password
// };
// axios.post("http://localhost:8080/auth/login",userAuth)
// .then(response=>{
//       const token=response.data.token;
//       if(token)
//       {
//         setToken(token)
//         setemailId(userAuth.email);
//         const userType=response.data.role;
//         setRole(userType)
//             if(userType=="STUDENT"){
//               nav("/studentdashboard");
//             }
//             else if(userType==="STAFF"){
//               nav('/staffdashboard')
//             }
//             else if(userType=="ADMIN"){
//               nav('/home')
//             }
//             else {
//               alert("Invalid user role");
//             }
//           } else {
//             alert("Invalid token. Please try again.");
//           }
// }).catch(error=>{toast.error(error.response.data)})
