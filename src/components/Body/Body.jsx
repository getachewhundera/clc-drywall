import './Body.css'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import BodyAboutUs from './BodyAboutUs.jsx';
import BodyRecentProjects from './BodyRecentProjects.jsx';



function Body() {


  return (
    <>
      <section id='mainPageBodyItems'>
        <div id='mainPageServicesImage' alt="CLC Services ">
          <img src='./LandingPageServicesImages/truck1.jpg' alt="CLC Services" />
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
            <Button variant="contained" color="primary" id="mainPageServicesButton" size='large'
              style={{
                fontSize: '20px', padding: '12px 24px', font: 'Helvetica', fontFamily: 'sans-serif'
              }}> Our Services </Button>
          </Link>
        </div>
      </section>


      <section id='mpContainers'> 

      <div id='mpContainerOne'>
        <img src='./LandingPageServicesIcons/veicon.png' alt='' />
        <h2> Vast Experience </h2>

      </div>

      <div id='mpContainerTwo'>
      <img src='./LandingPageServicesIcons/pwicon.png' alt='' />
        <h2> Professional Team </h2>

      </div>

      <div id='mpContainerThree'>
      <img src='./LandingPageServicesIcons/nshandshake.png' alt='' />
        <h2> Reliable Service </h2>

      </div>

      <div id='mpContainerFour'>
      <img src='./LandingPageServicesIcons/dqwicon.png' alt='' />
        <h2> Quality Work </h2>

      </div>

      </section>
{/* 
      <a href="https://www.vecteezy.com/free-vector/diamond-icon">Diamond Icon Vectors by Vecteezy</a>
      <a href="https://www.vecteezy.com/free-vector/handshake-icon">Handshake Icon Vectors by Vecteezy</a> */}


      <BodyAboutUs />
      <BodyRecentProjects /> 

    </>

  );

};

export default Body; 