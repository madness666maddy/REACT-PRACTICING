import React from "react";
import '../assets/Styles/Home.css';
import codeThinking from '../assets/code_thinking.svg';

function Home(){
    return(
        <section className="home-section">
            <div className="home-content">
                <h2>Welcome To My Portfolio</h2>

                <h1>Hi, I'm <span className="highlight">Madhan V</span></h1>
                <p>I'm a passionate web developer with expertise in creating dynamic and user-friendly websites. 
                    I specialize in front-end development, utilizing modern technologies to build responsive and 
                    visually appealing web applications.</p>

                <div className="button-container">
                    <a href="#contact" className="btn">Contact Me</a>
                    <a href="#portfolio" className="btn">View Portfolio</a>
                </div>
            </div>

            <div className="home-image">
                <img src={codeThinking} alt="Code Thinking" />
            </div>

        </section>
    );
}

export default Home;