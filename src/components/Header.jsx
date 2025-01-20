import React from 'react';
import { Link } from 'react-router-dom'; // Ensure this import is present
import './Header.css'; // Import the CSS file for styling

const Header = () => {
    return (
        <header className="header">
        <h1 classname="header-name">Daniel Farmer</h1>
            <nav>
                <ul>
                    <li><Link to="/">About Me</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                    <li><Link to="/resume">Resume</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;