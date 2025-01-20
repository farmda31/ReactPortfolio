import React from 'react';
import './AboutMe.css';
import githubLogo from "../assets/github-logo.png"; // Update with the correct path
import linkedinLogo from "../assets/linkedin-logo.png"; // Update with the correct path
import profile_pic from "../assets/Profile_pic.png"; // Update with the correct path
import slack from "../assets/Slack.png";

const AboutMe = () => {
  return (
    <div className="about-me">
      <h1>About Me</h1>
      <img src={profile_pic} alt="Profile Pic" className="profile-pic" />
      <p>This is a brief introduction about myself. My name is Daniel Farmer and I live in Nashville, Tennessee.  I moved to Nashville 17 years ago after graduating from Western Kentucky University.</p>
      <p> I have 17+ years of experience in the e-Discovery industry with managing client portfolios, project deadlines, and various reporting questions.</p>
      <p> I have 8+ years of experience as Software Product Owner managing enterprise level projects, Relativity accelerators, and small desktop applications.</p>
      <p> In addition to my work experience, I enjoy traveling, watching baseball, and spending time with my pets.</p>
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

export default AboutMe;
