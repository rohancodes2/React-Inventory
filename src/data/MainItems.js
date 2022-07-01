import Navbar from "../components/Navbar";
import  SignIn from "../components/SignIn";
import React from 'react';
import Signout from "../components/Signout";
export   const routes = [
        
    {
      path: "/",
      main: () =><Navbar/>,
      
    },
    {
      path: "/signIn",
      main: () =><SignIn/>,
      
    },
  ];