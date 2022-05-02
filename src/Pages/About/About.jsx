import { motion } from 'framer-motion';

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
  const pVariants = {
    hidden: {
      x: -1000,
      opacity: 0,
      color: "white",        
    },
    visible: {
      x: 0,
      opacity: 1,
      color: "red",
    },
  };

  const worksAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: custom => (
      {
        x: 0,
        opacity: 1,
        transition: {delay: custom * 0.4},
      }) 
  }

  const eduAnimation = {
    hidden: {
      y: 100,
      opacity: 0,},
    visible: custom => (
      {
      y: 0,
      opacity: 1,
      transition: {duration: 2,
        delay: custom * 1},
    }),
  }

  return (
    <section className="about">
        <div className="container">
          <div className="about__intro">
            <h1>Greeting from  Jalyn Kyrgyz</h1>
            <motion.p
             initial={"hidden"}
             animate = {"visible"}
             transition = {{
              delay: 0.5,
             }}
             variants={pVariants}
            >Frontend React Developer</motion.p>
          </div>
          <div className="about__skills">
            <h3>My skills</h3>
            <ul>     
              <motion.li
              whileHover={{scale: 1.3, color: "yellow"}}><FaHtml5/>HTML</motion.li>
              <motion.li whileHover={{scale: 1.3, color: "yellow"}}><FaCss3Alt/>CSS</motion.li>
              <motion.li whileHover={{scale: 1.3, color: "yellow"}}><SiJavascript/>JavaScript</motion.li>
              <motion.li whileHover={{scale: 1.3, color: "yellow"}}><FaReact/>React</motion.li>
              <motion.li whileHover={{scale: 1.3, color: "yellow"}}><FaSass/>Sass</motion.li>
              <motion.li whileHover={{scale: 1.3, color: "yellow"}}><FaBootstrap/>Bootstrap</motion.li>
            </ul>
          </div>
          <div className="about__portfolio">
            <h3>Latest Works</h3>
            <motion.ul
              variants={worksAnimation}
              initial="hidden"
              whileInView="visible"
            >
              <motion.li custom={1} variants={worksAnimation}              
              ><img src={LoanCalc} alt="" />
              <a href="https://jalynkyrgyz.github.io/Loan-calculator/index.html"><h4>Loan Calculator</h4> </a> </motion.li>
              <motion.li custom={2} variants={worksAnimation}                
              ><img src={Marble} alt=""/>
              <a href="https://jalynkyrgyz.github.io/marble/index.html">
              <h4>Landing Page</h4> </a></motion.li>
              <motion.li custom={3} variants={worksAnimation}                 
              ><img src={FetchCard} alt=""/>
              <a href="https://jalynkyrgyz.github.io/Fetch-cards/index.html"><h4>Card Example</h4></a></motion.li>
            </motion.ul>
          </div>
          <motion.div className="about__education"
          variants={eduAnimation}
          initial="hidden"
          whileInView = "visible"
          >
            <motion.h3 
            variants={eduAnimation}>Educational Background</motion.h3>
            <ul>                           
              <motion.li custom={1} variants={eduAnimation} ><img src={KHO} alt=""/><a href="https://kho.msu.edu.tr/eng_mainpage.html"><h4>Turkish Land Forces Academy</h4></a><p>Cadet (Bachelor of Science): 1997 - 2002</p></motion.li>
              <motion.li custom={2} variants={eduAnimation}><img src={EDEM} alt=""/><a href="https://www.agglo-compiegne.fr/site-de-lecole-detat-major"><h4>French Staff school</h4></a><p>Listener (Staff officer's course): 2008 - 2009</p></motion.li>
              <motion.li custom={3} variants={eduAnimation}><img src={FuAk} alt=""/><a href="https://www.bundeswehr.de/en/organization/further-fmod-departments/bundeswehr-command-and-staff-college"><h4>German Staff College</h4></a><p>Listener (General Staff officer's course): 2017 - 2018</p></motion.li>
              <motion.li custom={4} variants={eduAnimation}><img src={KTMU} alt=""/><a href="https://www.manas.edu.kg/en/index.php"><h4>Kyrgyz Turkish Manas University</h4></a><p>Undergraduate (Master of Arts): 2021 - 2023</p></motion.li>
            </ul>
          </motion.div>


        </div>
    </section>
  )
}

export default About