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
            <Button variant="contained" color="primary" id="mainPageServicesButton" size='large'
              style={{
                fontSize: '20px', padding: '12px 24px', font: 'Helvetica', fontFamily: 'sans-serif'
              }}> Our Services </Button>
          </Link>
        </div>
      </section>


      <section id='mpContainers'> 

      <div id='mpContainerOne'>
        <img src='./veicon.png' alt='' />
        <h2> Vast Experience </h2>

      </div>

      <div id='mpContainerTwo'>
      <img src='./pwicon.png' alt='' />
        <h2> Professional Team </h2>

      </div>

      <div id='mpContainerThree'>
      <img src='./nshandshake.png' alt='' />
        <h2> Reliable Service </h2>

      </div>

      <div id='mpContainerFour'>
      <img src='./dqwicon.png' alt='' />
        <h2> Quality Work </h2>

      </div>

      </section>
{/* 
      <a href="https://www.vecteezy.com/free-vector/diamond-icon">Diamond Icon Vectors by Vecteezy</a>
      <a href="https://www.vecteezy.com/free-vector/handshake-icon">Handshake Icon Vectors by Vecteezy</a> */}








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