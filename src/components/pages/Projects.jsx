import React from 'react'
import { Link } from 'react-router-dom'



const Projects = () => {
      return (
   <>
   <ul>
      <li><Link to="/newsweb">News Api</Link></li>
      <li><Link to="/loan">Loan Calculator</Link></li>
      <li><Link to="/weatherforecast">Weather App</Link></li>
   </ul>
    
   </>
  )
}

export default Projects