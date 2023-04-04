import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./app.scss";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="container">
      <header>
        <h1>Abduvohob</h1>
        <a
          className="link"
          style={{ textDecoration: "none", fontSize: "20px", color: "white" }}
          href="https://t.me/@takhirov_a_h"
        >
          Telegram me
        </a>
        <h3>994339065 phone number me</h3>
      </header>

      <App />
    </div>
  </React.StrictMode>
);
