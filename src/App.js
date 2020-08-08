import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import FrontPage from "./pages/FrontPage";
import Projects from "./pages/Projects";
import Hobbies from "./pages/Hobbies";
import Photography from "./pages/Photography";
import Sports from "./pages/Sports";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <NavBar />
          <FrontPage />
          <Footer />
        </Route>
        <Route exact path="/projects">
          <NavBar />
          <Projects />
        </Route>
        <Route exact path="/hobbies">
          <NavBar />
          <Hobbies />
        </Route>
        <Route exact path="/hobbies/photography">
          <NavBar />
          <Photography />
        </Route>
        <Route exact path="/hobbies/sports">
          <NavBar />
          <Sports />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
