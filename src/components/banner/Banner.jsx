import React from "react";
import videoSrc from "../../assets/video1.mp4";
import HomeForm from "../form/HomeForm";

const Banner = () => {
  return (
    <div id="banner-wrapper">
      <div className="overlay_background">
        <video src={videoSrc} autoPlay loop muted />
      </div>
      <HomeForm></HomeForm>
    </div>
  );
};

export default Banner;
