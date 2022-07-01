import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import {  BrowserRouter as Router,  NavLink,  Route, Switch } from "react-router-dom";
import { routes } from "../data/MainItems";
import Navbar from "./Navbar";
import  SignIn  from "./SignIn";
import Signout from "./Signout";
export default function Main() {
   return(


    <Router>
     
        <NavLink to="/nav"></NavLink>

        <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={true}
                children={<route.main/>}
              />
            ))}
          </Switch>
    </Router>
   )
}
