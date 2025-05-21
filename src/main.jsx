import React from "react";
import ReactDOM from "react-dom/client";
import Dashboard from "./components/Dashboard";
import "./index.scss";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Dashboard />
  </React.StrictMode>
);