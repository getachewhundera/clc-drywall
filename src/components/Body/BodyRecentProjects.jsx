import './Body.css'
import React from 'react';
import { Button } from '@mui/material';
import { useHistory } from "react-router-dom";
//ThemeProvider passes down our created theme. 
import { ThemeProvider } from '@mui/material/styles';
//Whatever Theme wraps in down below has access to the values in the Theme that is defined in the file. 
//importing in our theme aka "lprpButtonTheme" (renamed. exported component) from the RecentProjectsButtonTheme file
import lprpButtonTheme from './RecentProjectsButtonTheme';






function BodyRecentProjects() {
    let history = useHistory();


    //Switches to Recent projects page 
    function handleClick() {
        history.push('/Projects');
    };




    return (
        <>
            {/*This will be the Recent projects section where it will diplay a full project from start to finish and then link to actual recent projects page. 
      When View All button is clicked it will direct it to a Recent projects page.  */}
            <section>
                <h1> Recent Projects </h1>
                <div className='recentprojectimages'>
                    <div id='lprpimg1'> img 1 <img src="../bathroom_project/bathroomproject1.jpg" alt="" /> </div>
                    <div id='lprpimg2'> img 2 <img src="../bathroom_project/bathroomproject1.2.jpg" alt="" /> </div>
                    <div id='lprpimg3'> img 3 <img src="../bathroom_project/bathroomproject1.3.jpg" alt="" /> </div>
                    <div id='lprpimg4'> img 4 <img src="../bathroom_project/bathroomproject1.4.jpg" alt="" /> </div>
                    <div id='lprpimg5'> img 5 <img src="../bathroom_project/bathroomproject1.5.jpg" alt="" /> </div>
                </div>

                <br></br>

                <div className='recentprojectsButton'>
                    <ThemeProvider theme={lprpButtonTheme}>
                        <Button
                            type="button"
                            id="lprpButton"
                            onClick={handleClick}
                            variant="contained"
                            color="primary"
                        >
                            View All
                        </Button>
                    </ThemeProvider>
                </div>

            </section>


        </>
    );
};

export default BodyRecentProjects;
//