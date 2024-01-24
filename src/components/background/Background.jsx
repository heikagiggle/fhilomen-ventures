import React from "react";
import shoe from "../../assets/shoe display.jpg";
import "./Background.css";
import { Link } from "react-router-dom";

const Background = () => {
  return (
    <div className="fhilomen__background">
      <div className="background-image">
        <img src={shoe} alt="shoe" />
        <Link to="/order" className="overlay-button">
          Shop Here
        </Link>
      </div>
    </div>
  );
};

export default Background;
