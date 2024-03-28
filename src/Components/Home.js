import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
    return (
    <div className="home-container">
    <Navbar />
    <div className="home-banner-container">
        <div className="home-bannerImage-container">
        <img src={BannerBackground} alt="" />
    </div>
    <div id="home" className="home-text-section">
        <h1 className="primary-heading">
        Remembering Paul Walker
        </h1>
        <p className="primary-text">
        Paul William Walker IV (September 12, 1973 - November 30, 2013) was an American actor best known for his role as Brian O'Conner in the Fast & Furious franchise.Walker began his career as a child actor in the 1970s and 1980s, but rose to fame in the late 1990s after appearing in a string of successful films.
        He was known not only for his acting talent but also for his philanthropic efforts, particularly his work with disaster relief organizations. On November 30, 2013, Walker tragically died in a car accident in Santa Clarita, California, while attending a charity event for his organization Reach Out Worldwide. Despite his untimely death, Paul Walker's legacy continues to live on through his work and the impact he made on the film industry and beyond.
        </p>
        <a href="https://youtu.be/4eQ-VbtJy1E" target="_blank" className="secondary-button">
            Rest In Peace<FiArrowRight />{" "}
        </a>
    </div>
        <div className="home-image-section">
        <img src={BannerImage} alt="" />
        </div>
    </div>
    </div>
    );
};

export default Home;