import React from "react";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";

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
      </Switch>
    </Router>
  );
}

export default App;
