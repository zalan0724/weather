import React, { useEffect, useState } from "react";
import "../style.css";
import "./DetailedHourly.css";

export default function DetailedHourly(props) {
  const [hour, setHour] = useState();

  useEffect(() => {
    const d = new Date();
    setHour(d.getHours());
  });

  return (
    <div className="Tab hourlyTab">
      <h1>Hourly Forecast</h1>
      <div className="DetailedHourly">
        {props.data.map((item, index) => {
          return (
            <div className="detailItem" key={index}>
              <h2 style={{ marginBottom: "10px" }}>
                {index === 0 ? "Now" : (hour + index) % 24}
              </h2>
              <div className="hourlyDetails">
                <h3>{Math.round(item.temp)}°</h3>
                <div>
                  <img
                    src={
                      "http://openweathermap.org/img/wn/" +
                      item.weather[0].icon +
                      "@2x.png"
                    }
                    style={{ width: "50px" }}
                    alt={"icon"}
                  />
                  <span className="hourlySpan">
                    {item.pop < 0.1 ? "" : Math.round(item.pop * 10) * 10 + "%"}
                  </span>
                  <span className="hourlySpan">{item.weather[0].main}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
