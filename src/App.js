import { Route } from "react-router-dom";
import Home from "./Components/Home/Home.jsx"
import Nav from "./Components/Nav/Nav.jsx"
import About from "./Components/About/About.jsx"
import Skills from "./Components/Skills/Skills.jsx"
import Work from "./Components/Work/Work.jsx"
import c from "./App.module.css"

function App() {
  
  return (
    <div className={c.app} >
      <Route component={Nav} path="/" />
      <Route component={Home} exact path="/" />
      <Route component={About} exact path="/about" />
      <Route component={Skills} exact path="/skills" />
      <Route component={Work} exact path="/work" />
    </div>
  );
}

export default App;
