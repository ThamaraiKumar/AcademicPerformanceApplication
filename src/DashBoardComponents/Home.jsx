import React from 'react'
import {  useSelector } from "react-redux";
import {  selectUser } from "../Redux/UserSlice";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Home.css'



function Home() {
  
  const user = useSelector(selectUser);
  // const dispatch = useDispatch();
  
  const username = user ? user.username : "Guest";
  // const handleLogout = () => {
    //   dispatch(logout());
    // };
    const string = username;
    const str = string.substring(0, string.indexOf('@'));


    return (
    <div>
    <div className='navbarredux'>
    <AccountCircleIcon  fontSize="large" style={{color:"#abb8c3"}}/>{str}
    </div>

    </div>
    )
  }
  
  export default Home
  // <button onClick={handleLogout}>Logout</button>