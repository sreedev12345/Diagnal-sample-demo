import React from "react";
import poster1 from "../assets/poster1.jpg";
import poster2 from "../assets/poster2.jpg";
import poster3 from "../assets/poster3.jpg";
import poster4 from "../assets/poster4.jpg";
import poster5 from "../assets/poster5.jpg";
import poster6 from "../assets/poster6.jpg";
import poster7 from "../assets/poster7.jpg";
import poster8 from "../assets/poster8.jpg";
import poster9 from "../assets/poster9.jpg";

const getImage = (bannerImage) => {
    switch (bannerImage) {
      case "poster1.jpg": {
        return poster1;
      }
      case "poster2.jpg": {
        return poster2;
      }
      case "poster3.jpg": {
        return poster3;
      }
      case "poster4.jpg": {
        return poster4;
      }
      case "poster5.jpg": {
        return poster5;
      }
      case "poster6.jpg": {
        return poster6;
      }
      case "poster7.jpg": {
        return poster7;
      }
      case "poster8.jpg": {
        return poster8;
      }
      case "poster9.jpg": {
        return poster9;
      }
      default :
        return null
      
    }
  };

const Bannerlist = ({banner}) => {
    const bannerImage = banner["poster-image"];
  return (
    <div>
      <img src={getImage(bannerImage)} alt={bannerImage}/>
      <div>{banner.name}</div>
    </div>
  );
};

export default Bannerlist;
