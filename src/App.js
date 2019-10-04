import React from "react";
import Base from "terra-base";
import logo from "./logo.svg";
import "./App.css";
import ExampleComponent from "./ExampleComponent";

function App() {
  return (
    <Base locale="en">
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <ExampleComponent />
        </header>
      </div>
    </Base>
  );
}

export default App;
