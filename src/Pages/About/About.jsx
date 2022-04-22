import React from 'react';
import {FaHtml5, FaCss3Alt, FaSass, FaBootstrap, FaReact} from "react-icons/fa";
import {SiJavascript} from "react-icons/si";

import LoanCalc from "../../images/about-images/LoanCalculator.png";
import Marble from "../../images/about-images/Marble.png";
import FetchCard from "../../images/about-images/Fetch card.png";

import KHO from "../../images/about-images/kho.png";
import EDEM from "../../images/about-images/ecole detat major.png";
import FuAk from "../../images/about-images/FuAk.png";
import KTMU from "../../images/about-images/KTMU.png";

import "./about.scss";

function About() {
  return (
    <section className="about">
        <div className="container">
          <div className="about__intro">
            <h1>Greeting from  Jalyn Kyrgyz</h1>
            <p>Frontend React Developer</p>
          </div>
          <div className="about__skills">
            <h3>My skills</h3>
            <ul>
              <li><FaHtml5/>HTML</li>
              <li><FaCss3Alt/>CSS</li>
              <li><SiJavascript/>JavaScript</li>
              <li><FaReact/>React</li>
              <li><FaSass/>Sass</li>
              <li><FaBootstrap/>Bootstrap</li>
            </ul>
          </div>
          <div className="about__portfolio">
            <h3>Latest Works</h3>
            <ul>
              <li><img src={LoanCalc} alt="" />
              <a href="https://jalynkyrgyz.github.io/Loan-calculator/index.html"><h4>Loan Calculator</h4> </a> </li>
              <li><img src={Marble} alt=""/>
              <a href="https://jalynkyrgyz.github.io/marble/index.html">
              <h4>Landing Page</h4> </a></li>
              <li><img src={FetchCard} alt=""/>
              <a href="https://jalynkyrgyz.github.io/Fetch-cards/index.html"><h4>Card Example</h4></a></li>
            </ul>
          </div>
          <div className="about__education">
            <h3>Educational Background</h3>
            <ul>
              <li><img src={KHO} alt=""/><a href="https://kho.msu.edu.tr/eng_mainpage.html"><h4>Turkish Land Forces Academy</h4></a><p>Cadet (Bachelor of Science): 1997 - 2002</p></li>
              <li><img src={EDEM} alt=""/><a href="https://www.agglo-compiegne.fr/site-de-lecole-detat-major"><h4>French Staff school</h4></a><p>Listener (Staff officer's course): 2008 - 2009</p></li>
              <li><img src={FuAk} alt=""/><a href="https://www.bundeswehr.de/en/organization/further-fmod-departments/bundeswehr-command-and-staff-college"><h4>German Staff College</h4></a><p>Listener (General Staff officer's course): 2017 - 2018</p></li>
              <li><img src={KTMU} alt=""/><a href="https://www.manas.edu.kg/en/index.php"><h4>Kyrgyz Turkish Manas University</h4></a><p>Undergraduate (Master of Arts): 2021 - 2023</p></li>
            </ul>
          </div>


        </div>
    </section>
  )
}

export default About