import React from "react";
import image_1 from "../Assets/image_1.png";
import image_2 from "../Assets/image_2.png";
import image_3 from "../Assets/image_3.png";

const Work = () => {
  const workInfoData = [
    {
      image: image_1,
      title: "#1",
      text: "Everyone's Favourite",
      videoUrl: "https://youtu.be/RgKAFK5djSk"
    },
    {
      image: image_2,
      title: "#2",
      text: "Drift",
      videoUrl: "https://youtu.be/iuJDhFRDx9M"
    },
    {
      image: image_3,
      title: "#3",
      text: "My Favourite",
      videoUrl: "https://youtu.be/E0z_TXMNc6Q"
    },
  ];

  return (
    <div id="music" className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Music</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Ranked on the basis of most favourite to least favourite.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <a href={data.videoUrl} target="_blank" rel="noopener noreferrer">
              <div className="info-boxes-img-container">
                <img src={data.image} alt="" />
              </div>
            </a>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
