import React from "react";
import "../../index.css";
import "./TimerBox.css";

const TimerBox = ({ number, timer }) => {
  return (
    <>
      <div className="box-body">
        <div className="number-box">
          <p className="upper">upper</p>
          <p className="lower">lower</p>
          <p className="number">{number}</p>
        </div>
        <p className="dhms">{timer}</p>
      </div>
    </>
  );
};

export default TimerBox;
