import React from "react";

export default function Temperature() {
  return (
    <div className="row">
      <div className="col-6 temperature">
        <span id="temperature">18</span>
        <span className="units">
          <a href="1" id="celsius-unit" className="active">
            °C
          </a>{" "}
          |
          <a href="2" id="fahrenheit-unit">
            °F
          </a>{" "}
        </span>
        <br />
        Sunny 🌞
        <br />
        Min. temp 10°C
        <br />
        Max. temo 19°C
      </div>
      <div className="col-6 weather">
        Chance of rain: 10%
        <br />
        Humidity: 20%
        <br />
        Wind: 35 km/h
      </div>
    </div>
  );
}
