import React from "react";
import CustomImage from "./CustomImage";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const navigate = useNavigate();
  const images = [
    "/gallery/img/img_1.jpg",
    "/gallery/img/img_2.jpg",
    "/gallery/img/img_3.jpg",
    "/gallery/img/img_4.jpg",
    "/gallery/img/img_5.jpg",
    "/gallery/img/img_6.jpg",
    "/gallery/img/img_7.jpg",
    "/gallery/img/img_8.jpg",
    "/gallery/img/img_9.jpg",
  ];
  return (
    <div className="section hero">
      <div className="col typography">
        <h1>What Are We About</h1>
        <p>
          FoodiesHub is a place where you can please your soul and tummy
          delicious food recepies of all cousine. And our service is absolutely
          free. So start exploring now!
        </p>
        <button 
  className="btn"
  onClick={() => navigate('/recipes')}
  onMouseDown={(e) => e.currentTarget.classList.add('active')}
  onMouseUp={(e) => e.currentTarget.classList.remove('active')}
  onMouseLeave={(e) => e.currentTarget.classList.remove('active')}
>
  Explore Now
</button>
      </div>

      <div className="col gallery">
        {images.map((src, index) => (
          <CustomImage key={index} imgSrc={src} pt={"90%"} />
        ))}
      </div>
    </div>
  );
}

export default HeroSection;
