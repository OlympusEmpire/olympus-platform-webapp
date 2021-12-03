import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Navbar } from "../components/entends/Navbar";
import { Footer } from "../components/entends/Footer";
import { LoginScreen } from "../components/session/LoginScreen";
import { CommunityScreen } from "../components/community/CommunityScreen";
import { DashboardRoute } from "./DashboardRoute";

export const AppRouter = () => {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/login" component={ LoginScreen } />

            <Route path="/" component={ DashboardRoute } />

          </Switch>
        </div>
      </Router>
    )
}
