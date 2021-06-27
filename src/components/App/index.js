import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";

import Navigation from "../Navigation";
import LandingPage from "../Landing";
import HomePage from "../Home";
import Attendees from "../Users/attendees";
import HostPage from "../../HostPage/hostPage";
import GuestPage from "../../GuestPage/guestPage";
import LocalEvents from "../LocalEvents/localEvents";

import * as ROUTES from "../../constants/routes";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route path={ROUTES.HOME} component={HomePage} />
          <Route path={ROUTES.USERS} component={Attendees} />
          <Route path={ROUTES.HOST} component={HostPage} />
          <Route path={ROUTES.GUEST} component={GuestPage} />
          <Route path={ROUTES.EVENTS} component={LocalEvents} />
        </div>
      </Router>
    );
  }
}

export default App;
