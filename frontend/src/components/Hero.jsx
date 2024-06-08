import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <div className="hero container">
      <div className="banner">
        <h1>{title}</h1>
        <p>
          Siddhivinayak Medical Healthcare Institute, a leader in medical
          education, is dedicated to fostering a diverse community of future
          physicians and researchers. Our commitment to innovation,
          collaboration, and wellness inspires our students to become the best
          they can be. We strive to provide high-quality healthcare services and
          improve patient outcomes.
        </p>
      </div>
      <div className="banner">
        <img src={imageUrl} alt="Hero-Image" className="animated-image" />
        <span>
          <img src="/Vector.png" alt="vector" />
        </span>
      </div>
    </div>
  );
};

export default Hero;
