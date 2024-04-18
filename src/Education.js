import React from 'react';
import './style.css';

const Education = ({ educationList }) => (
  <div class="education">
    <h2>Education</h2>
    <ul>
      {educationList.map((education, index) => (
        <li key={index}>
          <p>{education.school}</p>
          <p>{education.degree}</p>
          <p>{education.grade}</p>
          <p>{education.year}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default Education;
