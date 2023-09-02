import './Header.css'


function Header(){

return(

    
    <header className="App-header">
        <div id='headerLogo'>
            <img src="./logo.jpg" alt="CLC DRYWALL" />
        </div>
       
        

            <div id='headerButtons'>
                <button id='homePageButton'> HOME </button>
                <button id='servicesPageButton'> SERVICES </button>
                <button id='projectsPageButton'> PROJECTS </button>
                <button id='contactPageButton'> CONTACT </button>
                <button id='subcontractingPageButton'> SUBCONTRACTING </button>
                <button id='careersPageButton'> CAREERS </button>
                <button id='feedbackPageButton'> FEEDBACK </button>
            </div> 

            <div> 
                <button id='callNowPageButton'> CALL NOW </button>   
            </div>
    
    </header>
  
    );
};

export default Header; 