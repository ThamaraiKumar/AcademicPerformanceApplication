import React from 'react'
import SideBar from '../Components/SideBar'
import './Home.css'

function DashBoardContent() {
  return (
    <div>
    <div><SideBar/></div>
    <div className='dash-board-content'>
    <h1>DASH BOARD-SKCT</h1>
    <div className='dashboard-content-card'>
    <div className="dasgb-card">
      <p className="dasgb-card-title">TOTAL NO OF DEPARTMENTS</p>
      <p className="small-desc">
       10
      </p>
      <div className="go-corner">
        <div className="go-arrow">→</div>
      </div>
    </div>
    </div>

    <div className='dashboard-content-card'>
    <div className="dasgb-card1">
      <p className="dasgb-card-title1">TOTAL NO OF <br/>STAFF</p>
      <p className="small-desc1">
       500
      </p>
      <div className="go-corner1">
        <div className="go-arrow1">→</div>
      </div>
    </div>
    </div>

    <div className='dashboard-content-card'>
    <div className="dasgb-card2">
      <p className="dasgb-card-title2">TOTAL NO OF <br/>STUDENTS</p>
      <p className="small-desc2">
       5000+
      </p>
      <div className="go-corner2">
        <div className="go-arrow2">→</div>
      </div>
    </div>
    </div>

    
  </div>
</div>
    
  )
}

export default DashBoardContent



// <div className="ag-courses_item">
//       <div className="ag-courses-item_link">
//         <div className="ag-courses-item_bg"></div>

//         <div className="ag-courses-item_title">
//           TOTAL NO OF STAFF<br/>500
//         </div>
//       </div>
//     </div>

//     <div className="ag-courses_item">
//       <div className="ag-courses-item_link">
//         <div className="ag-courses-item_bg"></div>

//         <div className="ag-courses-item_title">
//           TOTAL NO OF DEPARTMENTS<br/>10
//         </div>
//       </div>
//     </div>