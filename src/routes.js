import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./views/dashboard/dashboard";
import Login from "./views/guest/login";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/login" component={Login} />
      </Switch>
    );
  }
}

export default Routes;
