import React from 'react'
import notfound from '../Images/not found.png'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>
    
    <img src={notfound} alt='not found' height={600}/>
    <Link to="/apw"><Button style={{backgroundColor:'purple' ,borderColor:'purple'}}>HOME</Button></Link>
    
    </div>
  )
}

export default NotFound