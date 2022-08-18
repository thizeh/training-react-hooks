import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const [first, second, third] = ["Alex", "Ali", "Anna"];

console.log(first, second);
console.log(second);
console.log(third);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App name="Alex" />
  </React.StrictMode>
);
