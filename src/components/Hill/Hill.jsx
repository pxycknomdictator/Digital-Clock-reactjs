import React from "react";
import "../../index.css";
import "./Hill.css";
import hill from "../../assets/pattern-hills.svg"

const Hill = () => {
  return <>
    <div className="hill-container">
        <img className="hill" src={hill} alt="hill" />
    </div>
  </>
};

export default Hill;
