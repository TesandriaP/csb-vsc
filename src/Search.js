import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState("");

  function SearchForm(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: 0
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "caa883a4a60d93878755b08a933f74ea";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(SearchForm);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <form className="Search" onSubmit={handleSubmit}>
      <input type="search" placeholder="Type city" onChange={updateCity} />
      <input type="submit" value="Search" />
    </form>
  );
  if (loaded) {
    return (
      <div>
        {" "}
        {form}
        <div>
          <ul>
            <p>Temperature: {Math.round(weather.temperature)}°C</p>
            <p>Humidity: {weather.humidity}</p>
            <p>Wind: {Math.round(weather.wind)} mph</p>
          </ul>
        </div>
      </div>
    );
  } else {
    return form;
  }
}
<footer>
       <a href="https://github.com/TesandriaP/vanilla-weather-app"
     target="_blank" rel="noopener">
      Open-source code</a> 
      by
      <em>
            Penn626
      </em>
    </footer>