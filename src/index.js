import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./App.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div ClassName="weather">
      <h1>Weather app</h1>
      <App />
    </div>
    <footer>
      Coded by <strong>itumeleng katherine kolwane</strong> and open-sourced on
      <a href="https://github.com/katherinetumi/my-weather-react-app">GitHub</a>
    </footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
