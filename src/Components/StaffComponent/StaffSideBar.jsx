import React, { useState } from 'react'
import './StaffComponents.css'
import { Link, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';

function StaffSideBar() {

    const nav=useNavigate();
    const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('emailid');
    localStorage.removeItem('role');
    localStorage.removeItem('name');
    nav("/")
}

    const [isOpen, setIsopen] =  useState(false);

    const ToggleSidebar = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
    }
  return (
    <div className='staff-sidebar-body'>
    <div className="container-fluid mt-3">
    <nav className="Staffnavbar Staffnavbar-expand-lg Staffnavbar-light shadow-md">
        <div className="container-fluid p-2">
       {/* eslint-disable-next-line */}
            <a  style={{textDecoration:'none', color:'black'}} className="Staffnavbar-brand  mr-0">Academic Performance</a>
            <div className="form-inline ml-auto">
                <div className="btn btn-primary-side-menu-bar" onClick={ToggleSidebar} >
                    <MenuIcon/>
                </div>
            </div>
        </div>
    </nav>
    <div className={`Staffsidebar ${isOpen === true ? 'active' : ''}`}>
        <div className="sd-header">
            <h4 className="mb-0">DASHBOARD</h4>
            <div className="btn btn-primary-sidebar" onClick={ToggleSidebar}><CloseFullscreenIcon/></div>
        </div>
        <div className="sd-body">
            <ul>
                <li><Link to ="/staffprofile" className="sd-link">PROFILE</Link></li>
                <li><Link to ="/studentdetails" className="sd-link">STUDENT DETAILS</Link></li>
                <li><Link to ="/addstudent" className="sd-link">ADD STUDENTS</Link></li>
                <li><Link to ="/viewcourse" className="sd-link">COURSES</Link></li>
                <li><Link to ="/attendance" className="sd-link">ATTENDANCE</Link></li>
                <li><Link to="/" className="sd-link" onClick={logout}>LOGOUT</Link></li>
            </ul>
        </div>
    </div>
    <div className={`Staffsidebar-overlay ${isOpen === true ? 'active' : ''}`} onClick={ToggleSidebar}></div>
</div>

    
    </div>
  )
}

export default StaffSideBar

// <Link to ="/" className="sd-link">LOGOUT</Link>