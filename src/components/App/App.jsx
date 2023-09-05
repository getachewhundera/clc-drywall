// import logo from './logo.svg';
import './App.css'
import Home from '../Home/Home';
import Navbar from '../Navbar/Navbar';
import Services from '../Services/Services';
import AboutUs from '../AboutUs/AboutUs';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Feedback from '../Feedback/Feedback';

//HashRouter
// import { HashRouter as Router, Route, Link } from "react-router-dom";

//React Imports
import React from 'react';
// import {useEffect, useState} from 'react';
//Import Axios 
// import axios from 'axios';
// Components imports





function App() {

  let Component 
  switch (window.location.pathname) {
    case "/": 
    Component = <Home />
    break 

    case "/Services": 
    Component = <Services />
    break 

    case "/AboutUs": 
    Component = <AboutUs />
    break 

    case "/Projects": 
    Component = <Projects />
    break 


    case "/Contact": 
    Component = <Contact />
    break

    case "/Feedback": 
    Component = <Feedback />
    break 


  }

  return(
    <div > 

    <Navbar />
    {Component}

    {/* <Home /> */}

    </div>

  );
}

export default App;
