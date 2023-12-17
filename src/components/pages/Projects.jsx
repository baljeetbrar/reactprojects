// Projects.jsx

import React from 'react';
import { Link } from 'react-router-dom';


const Projects = () => {
  return (
    <>
      <ol className="projects-list">
        <li className="project-item">
          <Link to="/newsweb" className="project-link">News Api</Link>
        </li>
        <li className="project-item">
          <Link to="/loan" className="project-link">Loan Calculator</Link>
        </li>
        <li className="project-item">
          <Link to="/weatherforecast" className="project-link">Weather App</Link>
        </li>
      </ol>
    </>
  );
};

export default Projects;
