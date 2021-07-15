import React, { useState } from "react";
import "../style.css";
import "./DetailedDaily.css";

export default function DetailedDaily(props) {
  const date = new Date();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="Tab dailyTab">
      <h1>Daily Forecast</h1>
      <div className="hourlyContainer">
        {props.data.map((item, index) => {
          return (
            <div className="hourlyItem" key={index}>
              <h2 style={{ marginBottom: "10px" }}>
                {index === 0 ? "Today" : days[(date.getDay() + index) % 7]}
              </h2>
              <div className="hourlyDetails">
                <h3>
                  {Math.round(item.temp.min)}° / {Math.round(item.temp.max)}°
                </h3>
                <img
                  src={
                    "http://openweathermap.org/img/wn/" +
                    item.weather[0].icon +
                    "@2x.png"
                  }
                  alt={"icon"}
                  style={{ width: "50px" }}
                />
                <span>{item.weather[0].main}</span>
                <span>{Math.round(item.pop * 10) * 10}%</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
