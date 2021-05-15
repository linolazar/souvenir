import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "../components/login/SignIn";
import SignUp from "../components/login/SignUp";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <SignIn />
          </Route>
          <Route path="/SignUp">
            <SignUp />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
