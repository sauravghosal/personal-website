import React from "react";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import About from "./pages/About";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Circles from "./components/Circles";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Header></Header>
      <div
        className="px-10 sm:px-12 md:px-16 lg:px-60 bg-gray-100 overflow-hidden w-full grid"
        style={{ minHeight: "calc(100vh - 3.5rem)" }}
      >
        <Switch>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route path={`/about`}>
            <About />
          </Route>
          <Route path={`/projects/:id`}>
            <Project />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Circles top={[32, 32]} left={[3, 10]} />
        <Circles bottom={[0, 0]} right={[10, 10]} />
      </div>
    </Router>
  );
}

export default App;
