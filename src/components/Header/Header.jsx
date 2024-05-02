import './Header.css';
import React from 'react';



function Header() {


  console.log(window.location);

  const imagesLeft = [
    './LandingPageHeaderImages/main1.jpg',
    './LandingPageHeaderImages/nhimg1.jpeg', 
    './LandingPageHeaderImages/nhimg1.2.jpeg'
  ];

  const imagesRight = [
    './LandingPageHeaderImages/main.jpg',
    './LandingPageHeaderImages/nhimg1.1.jpeg',
    './LandingPageHeaderImages/nhimg1.21.jpeg' 

  ];

  return (

    <>
        <div className='split-screen'>
        <div className='pane left-pane'>
          {imagesLeft.map((img, index) => (
            <div key={index} className={ `image img-${index}`} style={{ backgroundImage: `url(${img})` }}> </div> 
          ))}
        </div>

        <div className='pane right-pane'>
        {imagesRight.map((img, index) => (
            <div key={index} className={`image img-${index}`} style={{ backgroundImage: `url(${img})` }}> </div> 
          ))}

        </div>
        
        </div>

        <div className='center-text'>
          <h1> CLC DRYWALL LLC </h1>
          <h2> Where Quality Meets Craftsmanship.</h2>
        </div>
        <div className='headerContactUsButton'>
          {/* call to action button, sits in the middle of main webpage, easily identifiable*/}
          <button type="button" id='mainPageContactUsButton' >  Contact Us </button>
        </div>
      

    </>

  );

};

export default Header; 