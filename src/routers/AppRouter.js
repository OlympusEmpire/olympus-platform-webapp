import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { LoginScreen } from "../components/session/LoginScreen";
import { JoinUsScreen } from "../components/session/JoinUsScreen";
import { DashboardRoute } from "./DashboardRoute";

export const AppRouter = () => {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/login" component={ LoginScreen } />
            <Route exact path="/join-us" component={ JoinUsScreen } />
            <Route path="/" component={ DashboardRoute } />

          </Switch>
        </div>
      </Router>
    )
}
