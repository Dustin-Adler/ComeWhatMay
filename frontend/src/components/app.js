import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";
// import NavBarContainer from "./nav/navbar_container";

import LandingPage from "./landing_page/landing_page";
// import LoginFormContainer from "./session/login_form_container";
// import SignupFormContainer from "./session/signup_form_container";

const App = () => (
  <Switch>
    <AuthRoute exact path="/" component={LandingPage} />
    {/* <AuthRoute exact path="/login" component={LoginFormContainer} /> */}
    {/* <AuthRoute exact path="/signup" component={SignupFormContainer} /> */}
  </Switch>
);

export default App;
