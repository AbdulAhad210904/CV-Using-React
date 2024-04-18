import React from 'react';
import './style.css';

const Experience = ({ experienceList }) => (
  <div className="experience">
    <h2>Experience</h2>
    <ul>
      {experienceList.map((experience, index) => (
        <li key={index}>
          <h3>{experience.title}</h3>
          <p>{experience.company}, {experience.location}</p>
          <p>{experience.duration}</p>
          <ul>
            {experience.responsibilities.map((responsibility, i) => (
              <li key={i}>{responsibility}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </div>
);

export default Experience;
