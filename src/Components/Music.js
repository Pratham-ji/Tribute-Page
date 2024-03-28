import React from "react";
import ProfilePic from "../Assets/paul-walker-image.png";
import { AiFillStar } from "react-icons/ai";

const Music = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
      <h5 className="primary-heading"> What He Said!</h5>
        <p className="primary-subheading">"You Know, The Best Decision I Ever Made Was Stepping Into That Store And Buying That First Sandwich."</p>
        <p className="primary-text">
        "Thought You Could Leave Without Saying Goodbye?"
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
        "But If I Win, I Take The Cash, And I Take The Respect. To Some People, That’s More Important."
        </p>
        <div className="testimonials-stars-container">
        </div>
        <h2>Brian O'Conner</h2>
      </div>
    </div>
  );
};

export default Music;