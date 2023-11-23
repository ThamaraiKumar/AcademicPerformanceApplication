import React from 'react'
import Footer from './Footer'
import './AcademicPerformanceWebsite.css'
import { Link } from 'react-router-dom'
import image from '../Images/Powerful weapon Education.png'

function AcademicPerformanceWebsite() {
  return (
    <div>
    <div>
    <header>
    <div className="header">
    <Link to="/apw" className="logo">Academic Performance</Link>
    <div className="header-right">
    <ul>
    <Link to="/apw"><li>Home</li></Link>
    <a href="#footerhome"><li>Contact</li></a>
    <Link to="/apw"><li>About</li></Link>
    <Link to="/"><li><button className='get-started-btn'>GET STARTED</button></li></Link>
    </ul>
    </div>
    <img src={image} alt='bg'  className='image-poowerful-weapon-bg' height={700}/>
    </div>
    </header>
    <div className='quotes-home'><p><b>"EDUCATION IS THE ART OF MAKING MAN ETHICAL"</b></p></div>
    </div>
    <div id="footerhome"><Footer/></div>
    </div>
  )
}

export default AcademicPerformanceWebsite