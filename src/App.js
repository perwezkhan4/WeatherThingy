import React from "react";
import "./App.css";
import WeatherEngine from "./components/WeatherEngine";

function App() {
  return (
    <div className="App">
      <div className="grid-container">
        <div className="grid-item">
          <WeatherEngine location="vancouver, ca" />
        </div>
        <div className="grid-item">
          <WeatherEngine location="hungary, hu" />
        </div>
        <div className="grid-item">
          <WeatherEngine location="germany, de" />
        </div>
        <div className="grid-item">
          <WeatherEngine location="finland, fi" />
        </div>
        <div className="grid-item">
          <WeatherEngine location="sydney, au" />
        </div>
        <div className="grid-item">
          <WeatherEngine location="beijing, zh_cn" />
        </div>
        <div className="grid-item">
          <WeatherEngine location="tokyo, " />
        </div>
        <div className="grid-item">
          <WeatherEngine location="mali, " />
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
        <a
          href="https://github.com/perwezkhan4"
          target="_blank"
          rel="noopener noreferrer"
        >
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
