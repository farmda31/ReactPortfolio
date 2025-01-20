import React from 'react';
import resumeFile from '../assets/Resume.docx';
import githubLogo from "../assets/github-logo.png";
import linkedinLogo from "../assets/linkedin-logo.png"; 
import '../components/Header.css'; // Import the CSS file for styling
import slack from "../assets/Slack.png";

const Resume = () => {
  return (
    <div className="resume-page">
      <h1>Resume</h1>
      <h2>Here is my resume.</h2>
      <a href={resumeFile} download="Resume.docx">Download Resume</a>
      <h2>Front-End Proficiences</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Angular</li>
        <li>Vue</li>
        <li>Bootstrap</li>
      </ul>
      <h2>Back-End Proficiences</h2>
      <ul>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>Python</li>
        <li>Java</li>      
      </ul>
            <footer className="footer">
              <a href="https://github.com/farmda31" target="_blank" rel="noopener noreferrer">
                <img src={githubLogo} alt="GitHub Logo" className="logo" />
              </a>
              <a href="https://www.linkedin.com/in/daniel-farmer-427034341" target="_blank" rel="noopener noreferrer">
                <img src={linkedinLogo} alt="LinkedIn Logo" className="logo" />
              </a>
                    <a href="https://kuvirtfsfpt09-z5a9986.slack.com/team/U07N0T7K691" target="_blank" rel="noopener noreferrer">
                      <img src={slack} alt="Slack Logo" className="logo" />
                    </a>
            </footer>
    </div>
  );
};

export default Resume;