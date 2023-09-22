import './Body.css'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';



function Body() {


  return (
    <>
      <section id='mainPageBodyItems'>
        <div id='mainPageServicesImage' alt="CLC Services ">
          <img src='./truck1.jpg' alt="CLC Services" />
        </div>
        <div id='servicesList'>
          <h1> Our Services </h1>
         
            <ul>
              <li> Drywall Hanging </li>
              <li> Drywall Finising </li>
              <li> Popcorn Removal </li>
              <li> Texture knowkdown </li>
              <li> Interior Painting </li>
              <li> and More </li>
            </ul>

            <Link to="/Services">
              <Button variant="contained" color="primary" id="mainPageServicesButton"> Our Services </Button>
            </Link>
          
    
      
        </div>

      </section>

      <section>
        <div id='mainPageAboutUsImage'>
          <img src='./logo.jpg' alt="CLC About Us" />

        </div>

        <div>
          <h1> About Us </h1>
          <h2>
            We are locally owned and operated company.


          </h2>
          <a href="AboutUs">
            <button type="button" id="mainPageAboutUsButton"> About Us</button>
          </a>
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

        <button type="button" id="mainPageViewAllButton"> View All</button>

      </section>

    </>

  );

};

export default Body; 