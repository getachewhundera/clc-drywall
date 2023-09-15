import './App.css'
import Navbar from '../Navbar/Navbar.jsx';
import Home from '../Home/Home';
import AboutUs from '../AboutUs/AboutUs';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Feedback from '../Feedback/Feedback';
import Services from '../Services/Services';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import React from 'react';


function App() {
  return (
      <Router>
          <div>
              <Navbar />

              <Switch>      
                <Route path="/Services" component={Services} />
                <Route path="/AboutUs" component={AboutUs} />
                <Route path="/Projects" component={Projects} />
                <Route path="/Contact" component={Contact} />
                <Route path="/Feedback" component={Feedback} />
                <Route path="/" component={Home} />
              </Switch>       
          </div>
      </Router>
  );
}

export default App;