import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./app.scss";
import Information from "./components/information";
import Youtobe from "./components/Youtobe";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="container">
      <div className="container-part-two">
        <header>
          <h1>Abduvohob</h1>
          <a
            className="link"
            style={{ textDecoration: "none", fontSize: "20px", color: "white" }}
            href="https://t.me/Abdu_vohob"
          >
            Telegram me
          </a>
          <h3>994339065 phone number me</h3>
        </header>
        <Information />
        <App />
        <Youtobe />
      </div>
    </div>
  </React.StrictMode>
);
