import React from 'react';
import './style.css';


const Biography = () => {
  return (
    <div>
      <h1>Biography</h1>
      <table className="bio-table">
        <tbody>
          <tr>
            <td>Name:</td>
            <td>Abdul Ahad Ali</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>ahadghayyas@gmail.com</td>
          </tr>
          <tr>
            <td>Website:</td>
            <td><a href="https://technocrats.tech/">technocrats.tech</a></td>
          </tr>
          <tr>
            <td>Mobile:</td>
            <td>+92-334-5250846</td>
          </tr>
          <tr>
            <td>Education:</td>
            <td>
              <ul>
                <li>APSACS, Ordnance Road, RWP, Matric and FSC, Grade: A+, 2017 -- 2021</li>
                <li>Air University, Islamabad, Pakistan, Bachelor of Science in Computer Science, GPA: 3.16, 2021 -- 2025</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Experience:</td>
            <td>
              <ul>
                <li>Software Developer at Food@Express, Singapore, 2023 - Present</li>
                <li>Backend Developer at FastNFresh, United States, 2023 - Present</li>
                <li>App Developer at MedoConnect, MCS, Rawalpindi, 2022 - 2023</li>
                <li>Founder/Senior Web and App Developer at Technocrats.Tech, Startup, 2023 - Present</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Projects:</td>
            <td>
              <ul>
                <li>PkTour: .NET-based website utilizing Microservices Architecture, API integration, and SQL database.</li>
                <li>ActOfGrace Website: Developed .NET and Blazor based website for ActsOfGrace.</li>
                <li>Jayz Fast Food App: Complete fast food ordering application made using Flutter and NoSQL Database.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Skills:</td>
            <td>
              <ul>
                <li>Languages: Javascript, C#, C++, Java, Python, R, SQL</li>
                <li>Technologies: ASP .NET, Express, NodeJS, Blazor, React, Flutter, Java Android Dev, SQL, Firebase, MongoDB</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Biography;
