import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import FrontPage from "./pages/FrontPage";
import Projects from "./pages/Projects";
import Hobbies from "./pages/Hobbies";
import Photography from "./pages/Photography";
import Sports from "./pages/Sports";
import Contacts from "./pages/Contacts";
import { CssBaseline } from "@material-ui/core";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#000000",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#ffffff",
    },
    info: {
      main: "#1e90ff",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "*": {
          "scrollbar-width": "thin",
        },
        "*::-webkit-scrollbar-track": {
          webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.3)",
          borderRadius: "10px",
          backgroundColor: "##ffffff",
        },
        "*::-webkit-scrollbar": {
          width: "10px",
          backgroundColor: "##ffffff",
        },
        "*::-webkit-scrollbar-thumb": {
          borderRadius: "10px",
          webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,.3)",
          backgroundColor: "#808080",
        },
      },
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
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
              <Footer />
            </Route>
            <Route exact path="/hobbies">
              <NavBar />
              <Hobbies />
              <Footer />
            </Route>
            <Route exact path="/hobbies/photography">
              <NavBar />
              <Photography />
              <Footer />
            </Route>
            <Route exact path="/hobbies/sports">
              <NavBar />
              <Sports />
              <Footer />
            </Route>
            <Route exact path="/contacts">
              <NavBar />
              <Contacts />
              <Footer />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
