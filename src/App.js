import React from "react";
import "./App.css";
import WeatherEngine from "./components/WeatherEngine";

function App() {
  return (
    <div className="App">
      <div className="grid-container">
        <div className="grid-item">
          <WeatherEngine location="vancouver" />
        </div>
        <div className="grid-item">
          <WeatherEngine location="hungary" />
        </div>
        <div className="grid-item">
          <WeatherEngine location="germany" />
        </div>
        <div className="grid-item">
          <WeatherEngine location="finland" />
        </div>
        <div className="grid-item">
          <WeatherEngine location="sydney" />
        </div>
        <div className="grid-item">
          <WeatherEngine location="beijing" />
        </div>
        <div className="grid-item">
          <WeatherEngine location="tokyo" />
        </div>
        <div className="grid-item">
          <WeatherEngine location="mali" />
        </div>
      </div>
      <Display />
    </div>
  );
}

function Display() {
  return (
    <div className="display">
      <div className="header">Weather Around The World 🌎🤖</div>
      <div className="links">
        by{" "}
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          @perwezkhan4
        </a>
        <br />
        <br />
        <p className="para">
          Click on the City/Country name to search your next location ! ⚡🚀
        </p>
      </div>
    </div>
  );
}

export default App;
