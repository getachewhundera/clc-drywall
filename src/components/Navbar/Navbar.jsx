import './Navbar.css';
import React from 'react';


function Navbar(){

    return (
        <nav className='nav'>
           {/* <img src="./logo.jpg" alt="CLC DRYWALL"/> */}
            {/* <a href='/' className='headerImage' > 
                 </a>  */}

            <a href='/' className='site-title'>
                CLC DRYWALL
            </a>


            <ul>
                <li className='active'>
                    <a href='/'> Home</a>
                </li>

                <li className='active'>
                    <a href='/Services'> Services </a>
                </li>

                <li className='active'>
                    <a href='/AboutUs'> About Us </a>
                </li> 

                <li className='active'>
                    <a href='/Projects'> Projects </a>
                </li> 

                <li className='active'>
                    <a href='/Contact'> Contact </a>
                </li> 


                <li className='active'>
                    <a href='/Feedback'> Feedback </a>
                </li>

            </ul>
            
        </nav>


    );
};

export default Navbar; 
