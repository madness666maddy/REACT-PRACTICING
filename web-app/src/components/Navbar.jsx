import React from 'react';
import '../assets/Styles/Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar(){
    return(
        <div className="header">
            <h2>Navbar</h2>
            <nav className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/services">Education</a></li>
                <li><a href="/portfolio">Skills</a></li>
                <li><a href="/blog">Projects</a></li>
                <li><a href="/contact">Contact</a></li>
            </nav>
            <button className="login-btn">Login</button>
        </div>
    );
}

export default Navbar;