import React from 'react';
import './style.css';

const Skills = ({ skillsList }) => (
  <div class="skills">
    <h2>Skills</h2>
    {skillsList.map((category, index) => (
      <div key={index}>
        <h3>{category.category}</h3>
        <ul>
          {category.skills.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export default Skills;
