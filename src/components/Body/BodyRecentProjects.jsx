import './Body.css'
import React from 'react';
import { Button } from '@mui/material';
import { useHistory } from "react-router-dom";






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
                    <div id='lprpimg1'> <img src="" alt="" /> </div>
                    <div id='lprpimg1'> <img src="" alt="" /> </div>
                    <div id='lprpimg1'> <img src="" alt="" /> </div>
                    <div id='lprpimg1'> <img src="" alt="" /> </div>
                    <div id='lprpimg1'> <img src="" alt="" /> </div>
                </div>

                <br></br>

                <div className='recentprojectsButton'>
                    <Button
                        type="button"
                        id="lprpButton"
                        onClick={handleClick}
                        variant="contained"
                    >
                        View All
                    </Button>
                </div>

            </section>


        </>
    );
};

export default BodyRecentProjects;
//