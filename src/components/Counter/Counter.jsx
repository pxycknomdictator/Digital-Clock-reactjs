import React, { useEffect, useState } from "react";
import "../../index.css";
import "./Counter.css";
import starsbackground from "../../assets/bg-stars.svg";
import Heading from "../Heading/Heading.jsx";
import SocialIcons from "../SocialIcons/SocialIcons.jsx";
import Hill from "../Hill/Hill.jsx";
import TimerBox from "../TimerBox/TimerBox.jsx";

const Counter = () => {
  const initalvalue = new Date();
  const [time, setTime] = useState(initalvalue);

  // Get time

  const date = time.getDate();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  // Adding zero function

  const addZero = (values) => {
    return values < 10 ? `0${values}` : values;
  };

  // Get update time

  const updateDate = addZero(date);
  const updateHours = addZero(hours);
  const updateMinutes = addZero(minutes);
  const updateSeconds = addZero(seconds);

  // useEffect render one time and setinterval calling function every 1 second

  useEffect(() => {
    const interVal = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(interVal);
    };
  }, []);

  return (
    <>
      <main className="container">
        <div className="backstars">
          <img className="start" src={starsbackground} alt="starsbackground" />
        </div>
        <div className="counter-container flex items-center justify-center">
          <div className="counter-body center">
            <Heading />
            <div className="timer-container grid">
              <TimerBox number={updateDate} timer="Days" />
              <TimerBox number={updateHours} timer="Hours" />
              <TimerBox number={updateMinutes} timer="Minutes" />
              <TimerBox number={updateSeconds} timer="Seconds" />
            </div>
            <SocialIcons />
          </div>
        </div>
        <Hill />
      </main>
    </>
  );
};

export default Counter;
