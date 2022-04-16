import Nav from "./components/Nav";
import Intro from "./components/Intro";
import Companies from "./components/Companies";
import About from "./components/About";
import GetStarted from "./components/GetStarted";

function App() {
  return (
    <div className="appContainer">
      <GetStarted />
      <Nav />
      <Intro />
      <Companies />
      <About />
    </div>
  );
}

export default App
// 