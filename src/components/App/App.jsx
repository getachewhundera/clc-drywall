// import logo from './logo.svg';
import './App.css'
import Header from '../Header/Header';
import Footer from '../../Footer/Footer';

//React Imports
import React from 'react';
// import {useEffect, useState} from 'react';
//Import Axios 
// import axios from 'axios';
// Components imports





function App() {
  
  
  
  
  
  
  return(
    <div>
      <header>
        <Header />
        </header>

        <body id="bodySection">
          this is the body portion
        </body>


      <section>
        <h1> CLC DRYWALL LLC </h1>
        <h2> Where Quality Meets Craftsmanship.</h2> 
      {/* call to action button, sits in the middle of main webpage, easily identifiable*/}   
        <button type="button" id='mainPageContactUsButton' >  Contact Us </button>
   
        <img src="./main1.jpg"/>
        </section>

        <section>
          <div id='mainPageServicesImage'> 
            <img src='./truck1.jpg'/>
          </div>
          <div>
            <h1> Our Services </h1>
            <h2>
              <ul>
                <li> Drywall Hanging </li> 
                <li> Drywall Finising </li>
                <li> Popcorn Removal </li>
                <li> Texture knowkdown </li>
                <li> Interior Painting </li>
                <li> and More </li>
              </ul>
            </h2>

            <button type="button"  id="mainPageServicesButton"> Our Services </button>
          </div>

        </section>

        <section> 
          <div id='mainPageAboutUsImage'>
            <img src='./logo.jpg'/>

          </div>

          <div> 
            <h1> About Us </h1>
            <h2>
              We are locally owned and operated company. 


            </h2>
            <button type="button"  id="mainPageAboutUsButton"> About Us</button> 
          </div> 

        </section>

{/* */}

{/*This will be the Recent projects section where it will diplay a full project from start to finish and then link to actual recent projects page. 
When View All button is clicked it will direct it to a Recent projects page.  */}
        <section>
          <h1> Recent Projects </h1>
          <div>
            few images will go here of one full project.
          </div>
            <br></br>

          <button type="button"  id="mainPageViewAllButton"> View All</button> 

        </section>







        <footer> 
          <Footer />
        </footer>


      </div> 
   
    

    
      




  );
}

export default App;
