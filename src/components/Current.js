import React, { useEffect, useState } from "react";
import "../style.css";
import "./Current.css";

export default function Current(props) {
  const weather = props.current;
  return (
    <div className="Tab Current">
      <h2 className="currentElement">
        {weather.name} ({weather.sys.country})
      </h2>
      <div className="currentElement currentTemp">
        <h1 className="currentElement" style={{ display: "inline-block" }}>
          {Math.round(weather.main.temp)}°
        </h1>
        <img
          src={
            "http://openweathermap.org/img/wn/" +
            weather.weather[0].icon +
            "@2x.png"
          }
          alt={"icon"}
        />
      </div>
      <div className="currentElement minMax">
        Min: <h3 style={{ margin: "0" }}>{Math.round(props.minMax.min)}°</h3> /
        Max: <h3 style={{ margin: "0" }}>{Math.round(props.minMax.max)}°</h3>
      </div>
      <div className="currentElement">
        Weather: <h3 style={{ margin: "0" }}>{weather.weather[0].main}</h3>
      </div>
      <div className="currentElement">
        Precipitation: <h3 style={{ margin: "0" }}>{props.rain * 100}%</h3>
      </div>
      <div className="currentElement">
        Wind:{" "}
        <h3 style={{ margin: "0" }}>
          {Math.round(weather.wind.speed * 36) / 10} km/h {weather.wind.deg}°
        </h3>
      </div>
      <div className="currentElement">
        Humidity: <h3 style={{ margin: "0" }}>{weather.main.humidity}%</h3>
      </div>
      <div className="currentElement">
        Pressure: <h3 style={{ margin: "0" }}>{weather.main.pressure} hPa</h3>
      </div>
      <div className="currentElement">
        Visibility:{" "}
        <h3 style={{ margin: "0" }}>{weather.visibility / 1000} km</h3>
      </div>
    </div>
  );
}
