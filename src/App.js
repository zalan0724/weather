import React, { useEffect, useState } from "react";
import * as keys from "./apikey.json";
import Header from "./components/Header";
import Current from "./components/Current";
import DetailedDaily from "./components/DetailedDaily";
import DetailedHourly from "./components/DetailedHourly";
import "./style.css";
import "./mobileStyle.css";
import loading from "./loading2.gif";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [city, setCity] = useState("Budapest");
  const [currentWeather, setCurrentWeather] = useState({});
  const [detailedWeather, setDetailedWeather] = useState({});

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const currentData = await fetchCurrent(city);
      const detailedData = await fetchDetailed(
        currentData.coord.lat,
        currentData.coord.lon
      );
      setCurrentWeather(currentData);
      console.log(detailedData);
      setDetailedWeather(detailedData);
      setIsLoading(false);
    })();
  }, [city]);

  const getCityName = async (cityName) => {
    setCity(cityName);
  };

  return (
    <div className="App">
      <div className="grid">
        <Header getCity={getCityName} />
        {isLoading ? <img src={loading} /> : ""}
        {isLoading ? (
          ""
        ) : (
          <Current
            current={currentWeather}
            minMax={detailedWeather.daily[0].temp}
            rain={detailedWeather.daily[0].pop}
          />
        )}
        {isLoading ? "" : <DetailedHourly data={detailedWeather.hourly} />}
        {isLoading ? "" : <DetailedDaily data={detailedWeather.daily} />}
      </div>
    </div>
  );
}

async function fetchCurrent(location) {
  const response = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      location +
      "&units=metric&appid=" +
      keys.weather_key
  );
  const currentData = await response.json();
  return currentData;
}

async function fetchDetailed(lat, lon) {
  const response = await fetch(
    "https://api.openweathermap.org/data/2.5/onecall?lat=" +
      lat +
      "&lon=" +
      lon +
      "&units=metric&exclude=current,minutely,alerts&appid=" +
      keys.weather_key
  );
  const detailedData = await response.json();
  return detailedData;
}
