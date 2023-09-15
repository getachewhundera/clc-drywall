import './Header.css'; 



function Header(){
    
    
    console.log(window.location);
    
    return(
    
      <>
        
        <section>
          <h1> CLC DRYWALL LLC </h1>
          <h2> Where Quality Meets Craftsmanship.</h2> 
          {/* call to action button, sits in the middle of main webpage, easily identifiable*/}   
          <button type="button" id='mainPageContactUsButton' >  Contact Us </button>
    
          <img src="./main1.jpg" alt="ClC Drywall"/>
        </section>

      </>

    );

};

export default Header; 