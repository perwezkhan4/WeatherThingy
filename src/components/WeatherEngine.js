import React, { useState, useEffect } from "react";
import PulseLoader from "react-spinners/PulseLoader";

import WeatherCard from "./WeatherCard/component";

const WeatherEngine = ({ location }) => {
  // init for our state variables
  const [query, setQuery] = useState(""); // for user query
  const [error, setError] = useState(false); // for error handeling
  const [loading, setLoading] = useState(false); // for loading state
  const [weather, setWeather] = useState({
    // to display and store weather for specific cities
    temp: null,
    city: null,
    condition: null,
    country: null,
  });

  //defining the data fetchin function
  const getWeather = async (q) => {
    setQuery(""); // reset the query to empty
    setLoading(true); // set loading to true while we fetch the results
    try {
      const apiRes = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&APPID=c80b69787ac9c776d1cf86f8a6c50ce7`
      );
      const resJSON = await apiRes.json();
      setWeather({
        temp: resJSON.main.temp,
        city: resJSON.name,
        condition: resJSON.weather[0].main,
        country: resJSON.country,
      });
    } catch (error) {
      setError(true); // If there is any error just set error to true
    }
    setLoading(false);
  };

  // this hook will make the code run only once the component is mounted and will only run when Location changes which won't happen
  useEffect(() => {
    getWeather(location);
  }, [location]);

  if (error) {
    return (
      <div style={{ color: "black" }}>
        {/* There has been an error! */}
        <br />
        <button onClick={() => setError(false)}>
          No such Location Found - Click to Reset!
        </button>
      </div>
    );
  }

  if (loading) {
    return (
      <div
        style={{
          color: "black",
          width: "200px",
          height: "240px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <PulseLoader color="purple" size={10} />
      </div>
    );
  }

  return (
    <WeatherCard
      temp={weather.temp}
      condition={weather.condition}
      city={weather.city}
      country={weather.country}
      getWeather={getWeather}
    />
  );
};

export default WeatherEngine;
