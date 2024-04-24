import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Card = ({ title, description, icon }) => {
  return (
    <div className="card-container">
      {icon && (
        <div className=""><img src={icon} alt="" /></div>
      )}
      <h2>{title}</h2>
      <p>{description}</p>
      <button>Learn More <FaArrowRight/> </button>
    </div>
  );
};

export default Card;
