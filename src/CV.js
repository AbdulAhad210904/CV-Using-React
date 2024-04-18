import React from 'react';
import Header from './Header';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';
import './style.css';
const CV = () => {
    const educationList = [
        {
          school: "APSACS",
          location: "Ordnance Road, RWP",
          degree: "Matric and FSC",
          grade: "Grade: A+",
          year: "2017 -- 2021"
        },
        {
          school: "Air University",
          location: "Islamabad, Pakistan",
          degree: "Bachelor of Science in Computer Science",
          grade: "GPA: 3.16",
          year: "2021 -- 2025"
        }
      ];
      const experienceList = [
        {
          title: "Software Developer",
          company: "Food@Express",
          location: "Singapore",
          duration: "2023 - Present",
          responsibilities: [
            "Created a food ordering software for several machines in their restaurant. It has automated payment and automatic noodle cooking robots.",
            "Created several API's and hosted their database as well as APIs online so each machine can access them and perform operations properly.",
            "Service for sending email, push and in-app notifications. Also implemented secure QR code payment system with a notification listener."
          ]
        },
        {
          title: "Backend Developer",
          company: "FastNFresh",
          location: "United States",
          duration: "2023 - Present",
          responsibilities: [
            "Created a food ordering system like foodpanda for a company in United States. The project is done using MERN stack and firebase authentication. It also has OTP verification via phone number."
          ]
        },
        {
          title: "App Developer",
          company: "MedoConnect",
          location: "MCS, Rawalpindi",
          duration: "2022 - 2023",
          responsibilities: [
            "Created the app for MedoConnect.com (A health sector startup) using Java in Android Studio."
          ]
        },
        {
          title: "Founder/Senior Web and App Developer",
          company: "Technocrats.Tech",
          location: "Startup",
          duration: "2023 - Present",
          responsibilities: [
            "Created a tech startup and have done several projects under it. Recruited four more developers for projects. The startup is going strong and we have been getting consistent projects."
          ]
        }
      ];
      const projectsList = [
        {
          title: "PkTour",
          description: ".NET-based website utilizing Microservices Architecture, API integration, and SQL database. Consists of three key modules: Super Admin Panel, Tour Guide Admin Panel, and User Website."
        },
        {
          title: "ActOfGrace Website",
          description: "Developed .NET and Blazor based website for ActsOfGrace. A non-profit organization situated in Rawalpindi. Consists of two key modules: Admin panel and User Website with Donate Now functionality."
        },
        {
          title: "Jayz Fast Food App",
          description: "Complete fast food ordering application made using Flutter and NoSQL Database. Supports both IOS and Android platforms."
        },
        {
          title: "ConnectFriend",
          description: "A modern social media platform made using MERN stack."
        },
        {
          title: "GetYourOutfit",
          description: "A modern E-commerce website made using MERN stack."
        },
        {
          title: "MacroMaster AI",
          description: "Flutter project for a client for IOS and Android. Integrated ChatGPT API as well to calculate and give accurate macro information to consumers."
        },
        {
          title: "BookChat",
          description: "An online e-library made using Flutter for IOS and Android complete with backend implementation using Firebase and Amazon AWS. It also has online file/book management."
        },
        {
          title: "KARYANA",
          description: "Complete Flutter e-commerce app for IOS, Android, and Web with Firebase, Firestore, and Storage Bucket."
        }
      ];
      const skillsList = [
        {
          category: "Languages",
          skills: ["Javascript", "C#", "C++", "Java", "Python", "R", "SQL"]
        },
        {
          category: "Technologies",
          skills: ["ASP .NET", "Express", "NodeJS", "Blazor", "React", "Flutter", "Java Android Dev", "SQL", "Firebase", "MongoDB"]
        }
      ];
    
      return (
        <div>
          <Header
            name="Abdul Ahad Ali"
            email="ahadghayyas@gmail.com"
            website="https://technocrats.tech/"
            mobile="+92-334-5250846"
          />
          <Education educationList={educationList} />
          <Experience experienceList={experienceList} />
          <Projects projectsList={projectsList} />
          <Skills skillsList={skillsList} />
        </div>
      );
}
export default CV;