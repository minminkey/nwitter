import React, { useState } from "react";
import {HashRouter as Router, Route, Swich } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

const AppRouter = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
      <Router>
        <Swich>
          {isLoggedIn ? (
            <>
              <Route exact path="/">
                <Home />
              </Route>
            </>
          ) : (
            <Router exact path="/">
              <Auth />
            </Router>
          )}
        </Swich>
      </Router>
    );
};

export default AppRouter;