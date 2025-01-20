import React from 'react';
import { useState } from 'react';
import './Contact.css';
import '../components/Header.css'; // Import the CSS file for styling
import githubLogo from "../assets/github-logo.png";
import linkedinLogo from "../assets/linkedin-logo.png"; 
import slack from "../assets/Slack.png";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const validateForm = () => {
    const newErrors = {};
    if (!name) newErrors.name = "Name is required.";
    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!email.includes('@')) {
      newErrors.email = "Email must contain an '@' symbol.";
    }
    if (!message) newErrors.message = "Message is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

const handleSubmit = (e) => {
  e.preventDefault(); // Prevents the default form submission
  if (validateForm()) {
    // If the validation passes, then you can handle the form submission here
    console.log("Form submitted:", { name, email, message });
    // Sets the success message
    setSuccessMessage("Message submitted");
    // Resets the form fields
    setName('');
    setEmail('');
    setMessage('');
    setErrors({});
  }
};

return (
  <div className="contact">
      <h1>Contact</h1>
      <form onSubmit={handleSubmit}>
        <h2>Name:</h2>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p className="error">{errors.name}</p>}
        
        <h2>Email Address:</h2>
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="error">{errors.email}</p>}
        
        <h2>Message:</h2>
        <textarea
          placeholder="Enter your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        {errors.message && <p className="error">{errors.message}</p>}

          <input type="submit" value="Submit" />
      </form>
      {successMessage && <p className="success">{successMessage}</p>} {/* Render success message */}
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

export default Contact;