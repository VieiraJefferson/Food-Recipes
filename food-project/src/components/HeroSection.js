import React from "react";
import CustomImage from "./CustomImage";

function HeroSection() {

    const images=[
        "/Galery/img/img_1.jpg",
        "/Galery/img/img_2.jpg",
        "/Galery/img/img_3.jpg",
        "/Galery/img/img_4.jpg",
        "/Galery/img/img_5.jpg",
        "/Galery/img/img_6.jpg",
        "/Galery/img/img_7.jpg",
        "/Galery/img/img_8.jpg",
        "/Galery/img/img_9.jpg",
       
      
    ]
  return (
    <div className="section hero">
      <div className="col typography">
        <h1>
            What Are We About 
        </h1>
        <p>
            FoodiesHub is a place where you can please your soul and tummy delicious food
            recepies of all cousine. And our service is absolutely free. 
            So start exploring now!
        </p>
        <button className="btn">
            explore now
        </button>
        </div>

      <div className="col gallery">
        {images.map((src,index)=>(
                <CustomImage key={index} imgSrc={src} pt={"90%"}
                 />
                
        )) }
        
     
        
        </div>

    </div>
  );
}

export default HeroSection;
