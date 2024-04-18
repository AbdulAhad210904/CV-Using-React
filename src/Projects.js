import React from 'react';
import './style.css';

const Projects = ({ projectsList }) => (
  <div class="projects">
    <h2>Projects</h2>
    <ul>
      {projectsList.map((project, index) => (
        <li key={index}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default Projects;
