import React from 'react';
import { Link } from 'react-router-dom'; 
import carSelectorProjectImage from "../assets/Car_Selector.png"; 
import doItDummyProjectImage from "../assets/Do_It_Dummy.png"; 
import employeeTrackerProjectImage from "../assets/Employee_Tracker.png"; 
import readMeGeneratorProjectImage from "../assets/Read_Me_Generator.png";
import githubLogo from "../assets/github-logo.png"; // Update with the correct path
import linkedinLogo from "../assets/linkedin-logo.png"; // Update with the correct path
import flavorFinderImage from "../assets/flavor-finder.png";
import day1Image from "../assets/Day_1.png";
import slack from "../assets/Slack.png";
import './Portfolio.css';
import '../components/Header.css'; // Import the CSS file for styling


const Portfolio = () => {
  return (
    <div>
      <h1>Portfolio</h1>
      <p>Here are examples from my portfolio.</p>
      <div className="portfolio-container">
      <div className="portfolio-item">
      <Link to={{ pathname: "https://github.com/farmda31/Car-Selector" }} target="_blank" rel="noopener referrer">
        <img src={carSelectorProjectImage} alt="Car Selector Project" style={{ cursor: 'pointer' }} />
        </Link>
        </div>
        <div className="portfolio-item">
        <Link to={{ pathname: "https://github.com/tatesutter/Do-It-Dummy" }} target="_blank" rel="noopener referrer">
        <img src={doItDummyProjectImage} alt="Do It Dummy Project" style={{ cursor: 'pointer' }} />
        </Link>
        </div>
        <div className="portfolio-item">
        <Link to={{ pathname: "https://github.com/farmda31/KU_SQL_EmployeeTracker" }} target="_blank" rel="noopener referrer">
        <img src={employeeTrackerProjectImage} alt="Employee Tracker Project" style={{ cursor: 'pointer' }} />
        </Link>
        </div>
        <div className="portfolio-item">
        <Link to= {{ pathname: "https://github.com/farmda31/Read_Me_Generator" }} target="_blank" rel="noopener referrer">
        <img src={readMeGeneratorProjectImage} alt="Read Me Generator Project" style={{ cursor: 'pointer' }} />
        </Link>
        </div>
        <div className="portfolio-item">
          <Link to= {{ pathname: "https://github.com/tatesutter/Flavor-Finder" }} target="_blank" rel="noopener referrer">  
          <img src={flavorFinderImage} alt="Flavor Finder Project" style={{ cursor: 'pointer' }} />
        </Link>
        </div>
        <div className='portfolio-item'>
          <Link to= {{ pathname: "https://github.com/farmda31/first-day-repository "}} target="_blank" rel="noopener referrer">
          <img src={day1Image} alt="Day 1 Project" style={{ cursor: 'pointer' }} />
          </Link>
        </div>
        </div>
           <footer className="footer">
            <a href="https://github.com/farmda31" target="_blank" rel="noopener noreferrer">
              <img src={githubLogo} alt="GitHub Logo" className="logo" />
            </a>
            <a href="https://www.linkedin.com/in/daniel-farmer-427034341"  target="_blank" rel="noopener noreferrer">
              <img src={linkedinLogo} alt="LinkedIn Logo" className="logo" />
            </a>
            <a href="https://kuvirtfsfpt09-z5a9986.slack.com/team/U07N0T7K691" target="_blank" rel="noopener noreferrer">
              <img src={slack} alt="Slack Logo" className="logo" />
            </a>
          </footer>
    </div>
  );
};

export default Portfolio;