import React, { useState } from "react";
import "./Header.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Header(props) {
  const [city, setCity] = useState("Budapest");

  const onChange = (event) => {
    setCity(event.target.value);
  };

  const onSubmit = () => {
    props.getCity(city);
  };

  return (
    <div className={"Header"}>
      <div className={"searchBar"}>
        <input
          type={"text"}
          className={"locationInput"}
          placeholder={"Enter city name"}
          onChange={onChange}
        />
        <button onClick={onSubmit} className={"searchButton"}>
          <i
            className="bi bi-search"
            style={{
              color: "white",
              fontSize: "1.6em",
              fontWeight: "bold",
            }}
          />
        </button>
      </div>
    </div>
  );
}
