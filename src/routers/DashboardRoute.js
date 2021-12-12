import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { Fragment } from "react/cjs/react.production.min";
import { AboutUsScreen } from "../components/about/AboutUsScreen";
import { CommunityScreen } from "../components/community/CommunityScreen";
import { ContactScreen } from "../components/contact/ContactScreen";
import { Navbar } from "../components/entends/Navbar";
import { Footer } from "../components/entends/Footer";
import { GaleryScreen } from "../components/galery/GaleryScreen";
import { MembersScreen } from "../components/members/MembersScreen";
import { OlympusScreen } from "../components/olympus/OlympusScreen";

export const DashboardRoute = () => {
    return (
        <Fragment>
            <Navbar />

            <div>
                <Switch>
                    <Route exact path="/welcome" component={ OlympusScreen } />
                    <Route exact path="/members" component={ MembersScreen } />
                    <Route exact path="/about-us" component={ AboutUsScreen } />
                    <Route exact path="/contact" component={ ContactScreen } />
                    <Route exact path="/galery" component={ GaleryScreen } />
                    <Route exact path="/community" component={ CommunityScreen } />
                    <Redirect to="/welcome" />
                </Switch>
            </div>

            <Footer />

        </Fragment>
    )
}