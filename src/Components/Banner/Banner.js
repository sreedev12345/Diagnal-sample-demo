import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./banner.css";
import poster1 from "../assets/poster1.jpg";
import poster2 from "../assets/poster2.jpg";
import poster3 from "../assets/poster3.jpg";
import poster4 from "../assets/poster4.jpg";
import poster5 from "../assets/poster5.jpg";
import poster6 from "../assets/poster6.jpg";
import poster7 from "../assets/poster7.jpg";
import poster8 from "../assets/poster8.jpg";
import poster9 from "../assets/poster9.jpg";
import useLazyLoad from "../useLazyLoad";
import "bootstrap/dist/css/bootstrap.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

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
  }
};

const Banner = () => {
  const state = useSelector((state) => state.banner.content);
  return (

   <div style={{height:'200px'}}>
     <div
    style={{ marginTop:'20px', display: "grid",gap:'30px', justifyContent:'center', gridTemplateColumns: "repeat(3, 0fr)" }}>
      {state.map((banner, index) => {
       const bannerImage = (banner['poster-image'])
        return (
          <div  key={index}>
            <div >
            <img src={getImage(bannerImage)}/>
            <div>{banner.name}</div>
            </div>
          </div>
        );
      })}
    </div>
   </div>
  );
};

export default Banner;
