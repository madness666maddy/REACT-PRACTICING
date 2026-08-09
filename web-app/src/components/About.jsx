import React from "react";
import '../assets/Styles/About.css';
import madhanv from '../assets/madhanv.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
  return (
    <section className="about-container d-flex align-items-center justify-content-between">  

      <div className="about-image img-fluid p-5 border rounded">
        <img src={madhanv} alt="Madhan Picture" />
      </div>

      <div className="about-content ">
        <h2>About</h2>
        <p>This is the About page.</p>
        <p> <strong>Name:</strong> Madhan V</p>
        <p> <strong>Occupation:</strong> Web Developer</p>
        <p> <strong>Email:</strong> madhanv@example.com</p>
        <p> <strong>Location:</strong> Bengaluru, India</p>

      </div>

    </section>  
  );
}

export default About;