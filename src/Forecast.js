import React from "react";
import "./forecast.css";
export default function Forecast() {
  return (
    <div className="col-3 forecast">
      <div className="card text-center">
        <div className="card-body">
          <h5 className="card-title">Tuesday, 1 June</h5>
          <p className="card-text">16°C ⛅</p>
        </div>
      </div>
      <div className="card text-center">
        <div className="card-body">
          <h5 className="card-title">Wednesday, 2 June</h5>
          <p className="card-text">18°C ☁️</p>
        </div>
      </div>
      <div className="card text-center">
        <div className="card-body">
          <h5 className="card-title">Thursday, 3 June</h5>
          <p className="card-text">14°C 🌧️</p>
        </div>
      </div>
      <div className="card text-center">
        <div className="card-body">
          <h5 className="card-title">Friday, 4 June</h5>
          <p className="card-text">12°C ⛈️</p>
        </div>
      </div>
      <div className="card text-center">
        <div className="card-body">
          <h5 className="card-title">Saturday, 5 June</h5>
          <p className="card-text">15°C 🌦️</p>
        </div>
      </div>
    </div>
  );
}
