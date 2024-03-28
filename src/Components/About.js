import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div id="about" className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
            Early Life And Education
        </h1>
        <p className="primary-text">
        Walker was born on September 12, 1973, in Glendale, California. His mother, Cheryl (née Crabtree), was a fashion model, and his father, Paul William Walker III, was a sewer contractor and former amateur boxer, who was a two-time Golden Gloves champion. Walker's paternal grandfather, William, had a short-lived boxing career as "Irish" Billy Walker, while another raced factory cars for Ford in the 1960s.
        </p>
        <p className="primary-text">
        Raised as a member of the Church of Jesus Christ of Latter-day Saints, Walker had four younger siblings: Aimee, Ashlie, Caleb, and Cody. He spent the majority of his early life in the Sunland neighborhood of Los Angeles, and graduated from Village Christian School in 1991.Walker subsequently attended several community colleges in Southern California, majoring in marine biology.
        </p>
        <div className="about-buttons-container">
          <a href="https://en.wikipedia.org/wiki/Paul_Walker" target="_blank" className="secondary-button">
            <BsFillPlayCircleFill /> Learn More
          </a>
          <a href="https://youtu.be/o8UCI7r1Aqw?t=1" target="_blank" className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </a>
        </div>
      </div>
    </div>
  );
};
export default About;