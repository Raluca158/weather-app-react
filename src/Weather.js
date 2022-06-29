import React from "react";
import "./weather.css";
import Temperature from "./Temperature";
import Forecast from "./Forecast.js";

export default function Weather() {
  return (
    <div className="row justify-content-around">
      <div className="col-5">
        <div className="card bg-dark text-white">
          <img src={require("./Clouds.jpg")} alt="clouds" class="card-img" />
          <div className="card-img-overlay">
            <h5 className="card-title" id="current-city">
              Zarnesti
            </h5>
            <br />
            <p className="card-text" id="current-date">
              <strong>Monday, 31 May</strong>
            </p>
            <Temperature />
          </div>
        </div>
      </div>
      <Forecast />
    </div>
  );
}
