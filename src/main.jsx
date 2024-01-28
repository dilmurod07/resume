import React from "react";
import ReactDOM from "react-dom/client";
import "./app.scss";
import Information from "./information";
import Youtobe from "./components/Youtobe";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="container">
      <div className="container-part-two">
        <header>
          <h1>HELLO</h1>
          <a
            className="link"
            style={{ textDecoration: "none", fontSize: "20px", color: "white" }}
            href="https://t.me/Abdu_vohob"
          >
            Telegram me
          </a>
          <h3> phone number me +998993033532</h3>
        </header>
        <Information />
        <Youtobe />
      </div>
    </div>
  </React.StrictMode>
);
