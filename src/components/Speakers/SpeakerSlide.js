import React from 'react';
import "./styles/SpeakerSlide.Style.css";
import Slide from './factor/Slide.js';

const SpeakerSlide = () => {
  const imageSlides = [
    { name: "Anmol Gupta", role: "CEO 7Prosper", src: require("./assets/images/Anmol-Gupta.jpeg") },
    { name: "Ashutosh Gupta", role: "CMO THOUGHTWIN", src: require("./assets/images/Ashutosh-Gupta.jpeg") },
    { name: "Chetna Joshi Tiwari", role: "Miss India World 2023", src: require("./assets/images/Chetna-Joshi-Tiwari.jpeg") },
    { name: "Himanshu Goyal", role: "Founder EShip Simplifies", src: require("./assets/images/Himanshu-Goyal.jpeg") },
    { name: "Kapil Jadhwani", role: "Founder Indore Food Explorer", src: require("./assets/images/Kapil-Jadhwani.jpeg") },
    { name: "Mansukhbhai Prajapati", role: "CEO Mitticool", src: require("./assets/images/Mansukhbhai-Prajapati.jpeg") },
    { name: "Munish Jindal", role: "Founder & CEO of HoverRobotix", src: require("./assets/images/Munish-Jindal.jpeg") },
    { name: "Prashant Kulkarni", role: "Founder Tasty Alphabets Pvt. Ltd.", src: require("./assets/images/prashant-Kulkarni.jpeg") },
    { name: "Pushpendra Singh Jadon", role: "Founder & Director Key Elements", src: require("./assets/images/Pushpendra-Singh-jadon.jpg") },
    { name: "Shishir Somani", role: "CEO Archer Communications", src: require("./assets/images/Shishir-Somani.JPG") },
    { name: "Sufiyan Rao", role: "CEO & Founder Brain Inventory", src: require("./assets/images/Sufiyan-Rao.jpeg") },
    { name: "Ujjawal Pahwa", role: "Founder Cosmic Club", src: require("./assets/images/Ujjawal-Pahwa.jpg") },
    { name: "Vibha Vyas", role: "Author - Billionaire's Hired Wife", src: require("./assets/images/Vibha-Vyas.png") },
  ];

  return (
    <div id='SpeakerSlide'>
      <div className='slide-container'>
        {imageSlides.map((slide, index) => (
          <Slide key={index} name={slide.name} role={slide.role} srcs={slide.src} />
        ))}
      </div>
    </div>
  );
};

export default SpeakerSlide;
