import './Navbar.css';
import React from 'react';
// import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Home from '../Home/Home';
import Services from '../Services/Services';
import AboutUs from '../AboutUs/AboutUs';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Feedback from '../Feedback/Feedback';


function Navbar(){

    return (
        <Router>
        <nav className='nav'>
           {/* <img src="./logo.jpg" alt="CLC DRYWALL"/> */}
            {/* <a href='/' className='headerImage' > 
                 </a>  */}

            <a href='/' className='site-title'>
                CLC DRYWALL
            </a>


            <ul>
                <li className='active'>
                    <Link to="/"> Home </Link>
                </li>

                <li className='active'>
                <Link to="/Services"> Services </Link>
                </li>

                <li className='active'>
                    <Link to="/AboutUs"> About Us </Link>
                </li> 

                <li className='active'>
                    <Link to="/Projects"> Projects </Link>
                </li> 

                <li className='active'>
                    <Link to="/Contact"> Contact </Link>
                </li> 


                <li className='active'>
                    <Link to="/Feedback"> Feedback </Link>
                </li>

            </ul>
              </nav>


    <Route path="/" exact>
        <Home />
    </Route>

    <Route path="/Services">
        <Services />
    </Route>

    <Route path="/AboutUs">
        <AboutUs />
    </Route>

    <Route path="/Projects">
        <Projects/>
    </Route>

    <Route path="/Contact">
        <Contact />
    </Route>

    <Route path="/Feedback">
        <Feedback />
    </Route>

  
 </Router>
    );
};

export default Navbar; 
