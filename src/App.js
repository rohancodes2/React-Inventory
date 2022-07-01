import React,{lazy,Suspense} from "react";
import logo from "./logo.svg";
import "./App.css";
 import Navbar from "./components/Navbar";
import store from './Redux/Store'
import {Provider } from 'react-redux'
import { BrowserRouter as Router ,Route } from "react-router-dom";
import SignIn from './components/SignIn'
import Main from './components/Main'


function App() {
  return (
    <Provider store={store}>
   <div >
    
   <Navbar></Navbar>
    
 
  
   </div>
   </Provider>
  );
}

export default App;
