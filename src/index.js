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
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <input
        type="checkbox"
        value={checked}
        onChange={() => setChecked((checked) => !checked)}
      />
      <p>{checked ? "checked" : "not checked"}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
