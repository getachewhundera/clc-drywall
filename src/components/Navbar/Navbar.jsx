import './Navbar.css';
import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <nav className='nav'>
                <a href='/' className='site-title'>CLC DRYWALL</a>
                <ul>
                    <li className='active'>
                        <Link to="/Home"> Home </Link>
                    </li>
                    <li className='active'>
                        <Link to="/Services"> Services </Link>
                    </li>
                    <li className='active'>
                        <Link to="/AboutUs"> About Us </Link>
                    </li>
                    <li className='active'>
                        <Link to="/Projects"> Projects </Link>
                    </li>
                    <li className='active'>
                        <Link to="/Contact"> Contact </Link>
                    </li>
                    <li className='active'>
                        <Link to="/Feedback"> Feedback </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;