import './Header.css'


function Header(){

    return(
    
    <header className="App-header">
        <div>
            <div> image logo </div>
            <div>
                <button id='homePageButton'> HOME </button>
                <button id='servicesPageButton'> SERVICES </button>
                <button id='projectsPageButton'> PROJECTS </button>
                <button id='contactPageButton'> CONTACT </button>
                <button id='subcontractingPageButton'> SUBCONTRACTING </button>
                <button id='careersPageButton'> CAREERS </button>
                <button id='feedbackPageButton'> FEEDBACK </button>
                <button id='callNowPageButton'> CALL NOW </button>
            </div>
        </div>
    
    </header>
    );
};

export default Header; 