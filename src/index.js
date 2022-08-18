import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// const [first, second, third] = ["Alex", "Ali", "Anna"];

// console.log(first, second);
// console.log(second);
// console.log(third);

// <App name="Alex" />

//Adicionando state ao app component

function App() {
  const [status, setStatus] = useState("Not Delivered");

  return (
    <div>
      <h1>The package is: {status}.</h1>
      <button onClick={() => setStatus("Delivered")}>Deliver</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
