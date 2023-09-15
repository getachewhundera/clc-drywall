import './Header.css';



function Header() {


  console.log(window.location);

  return (

    <>

      <div className='split-screen'>
        <div className='left-pane'>
          <img src='/Users/getachewhundera/Documents/personal projects/clc-drywall-llc/src/components/Header/main1.jpg' alt="ClC Drywall" />
          <img src='/Users/getachewhundera/Documents/personal projects/clc-drywall-llc/src/components/Header/nhimg1.jpeg' alt='CLC DRYWALL'/>
          <img src='/Users/getachewhundera/Documents/personal projects/clc-drywall-llc/src/components/Header/nhimg1.2.jpeg' alt='CLC DRYWALL'/>

        </div>

        <div className='right-pane'>
        <img src= "/Users/getachewhundera/Documents/personal projects/clc-drywall-llc/src/components/Header/main.jpg" alt="ClC Drywall" />
        <img src='/Users/getachewhundera/Documents/personal projects/clc-drywall-llc/src/components/Header/nhimg1.1.jpeg' alt='CLC DRYWALL'/>
        <img src='/Users/getachewhundera/Documents/personal projects/clc-drywall-llc/src/components/Header/nhimg1.21.jpeg' alt='CLC DRYWALL'/>

        </div>

        <div className='center-text'>
          <h1> CLC DRYWALL LLC </h1>
          <h2> Where Quality Meets Craftsmanship.</h2>
        </div>
        <div className='headerContactUsButton'>
          {/* call to action button, sits in the middle of main webpage, easily identifiable*/}
          <button type="button" id='mainPageContactUsButton' >  Contact Us </button>
        </div>
      </div>

    </>

  );

};

export default Header; 