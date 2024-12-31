import { createRoot } from "react-dom/client";
import App from "./App";
import React from "react";


function Sample() {
  let count = 0;
  let [result, setResult] = React.useState(true)

  const toggle = () => {
    setResult(prevResult => !prevResult);
  }

  return (
    <main>
      <h1>Is state important to know?</h1>
      <button onClick={toggle} className="sample-btn" arial-label="the answer is">{result ? "Yes" : "No"}</button>
      {/* <div className="btn-pack">
        <button onClick={add} className="plus-btn">+</button>
        <button onClick={subtract} className="minus-btn">-</button>
      </div> */}
    </main>
  )
}

const root = createRoot(document.getElementById("root"));
root.render(
  <Sample />
)
