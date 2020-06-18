import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//import components for routing
import Home from "./components/Home/Home";
import "./App.css";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Contact from "./components/Contact-Us/Contact";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Blog1 from "./components/Blog-Page-One/Blog1";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/login">
          <SignIn />
        </Route>

        <Route exact path="/signup">
          <SignUp />
        </Route>

        <Route exact path="/contact">
          <Contact />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/blog">
          <Blog />
        </Route>

        <Route exact path="/blog1">
          <Blog1 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
