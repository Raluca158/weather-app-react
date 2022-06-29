import React from "react";

export default function Temperature() {
  return (
    <div className="row">
      <div className="col-6 temperature">
        <span id="temperature">18°C</span>
        
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
