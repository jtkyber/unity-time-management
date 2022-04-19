import React, { useState } from "react";
import Nav from "./components/Nav";
import Intro from "./components/Intro";
import Companies from "./components/Companies";
import About from "./components/About";
import GetStarted from "./components/GetStarted";

function App() {
  const [route, setRoute] = useState('index');

  return (
    <div className="appContainer">
      {
        route === 'signUp'
        ? <GetStarted />
        : null
      }
      <Nav setRoute={setRoute} />
      <Intro />
      <Companies />
      <About />
    </div>
  );
}

export default App
