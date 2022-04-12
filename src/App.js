import Nav from "./components/Nav";
import Intro from "./components/Intro";
import Companies from "./components/Companies";
import About from "./components/About";

function App() {
  return (
    <div className="appContainer">
      <Nav />
      <Intro />
      <Companies />
      <About />
    </div>
  );
}

export default App;
