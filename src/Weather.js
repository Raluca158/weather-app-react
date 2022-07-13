import React, {useState} from "react";
import "./weather.css";
import Temperature from "./Temperature";
import Forecast from "./Forecast.js";
import axios from "axios"; 

export default function Weather() {
  
      const [ready, setReady] = useState(false);
      const [temperature, setTemperature] = useState(null);
      function handleResponse(response) {
        setTemperature(Math.round(response.data.main.temp))
        setReady(true);
      }
      if (ready) {

        <div className="row justify-content-around">
      <div className="col-5">
        <div className="card bg-dark text-white">
          <img src={require("./Clouds.jpg")} alt="clouds" class="card-img" />
          <div className="card-img-overlay">
            <h5 className="card-title" id="current-city">
              Bucharest {temperature}
            </h5>
            <br />
            <p className="card-text" id="current-date">
              <strong>Monday, 31 May</strong>
            </p>
            <div className="row">
      <div className="col-6 temperature">
        <span id="temperature">18</span>
        <span className="units">
          <a href="#" id="celsius-unit" className="active">
            °C
          </a>{" "}
          |
          <a href="#" id="fahrenheit-unit">
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
          </div>
        </div>
      </div>
      <Forecast />
    </div>
        
  
      }
      else {
        const apiKey = "fa8e748cbde4ed02a809ebf9c178a37b";
        let city = "Bucharest";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
  
        return "Loading..."
      }
    
  }

    
  

