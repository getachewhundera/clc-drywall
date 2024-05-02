import './Footer.css'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

function Footer() {

    return (
        <footer id="footer-content" class="container" >
            <div id="footer-bg">

                <div id="column1">
                    <h2> Contact Us </h2>
                    <div id='contactInfoFooter'>
                        <p> Phone: 507-358-4948 </p>
                        <p>  Email: Christianloera1214@icloud.com </p>
                        <p>
                            CLC DRYWALL LLC
                            LOCATION:3945 Alberta Dr. Ne
                            Rochester, MN 55906
                        </p>
                    </div>
                    <div id='websiteCreatorLicensing'>
                        <h2>Untitled Inc.</h2>
                        <p>&copy; Untitled</p>
                        <p>All rights reserved.</p>
                    </div>
                </div>

                <div id='column2'>
                    <h2> Buisness Hours </h2>
                    <div id="footerBuisnessHours">
                        Monday: 8:00 AM - 5:00 PM
                        Tuesday: 8:00 AM - 5:00 PM
                        Wednesday: 8:00 AM - 5:00 PM
                        Thursday: 8:00 AM - 5:00 PM
                        Friday: 9:00 AM - 5:00 PM
                        Saturday: CLOSED
                        Sunday: CLOSED
                    </div>
                </div>

                <div id="column3">
                    <div className='thirdCTA'>
                        <>

                            <Link to="/Home"> Home </Link>

                            <Link to="/Services"> Services </Link>

                            <Link to="/AboutUs"> About Us </Link>


                            <Link to="/Projects"> Projects </Link>


                            <Link to="/Contact"> Contact </Link>


                            <Link to="/Feedback"> Feedback </Link>
                        </>



                        <Link to="/Contact">
                            <Button 
                            variant="contained" 
                            color="primary"
                            id="mainPageServicesButton" 
                            size='large'
                                style={{
                                    fontSize: '20px', padding: '12px 24px', font: 'Helvetica', fontFamily: 'sans-serif', border: '1px solid white', background: '#262626'
                                }}> GET A QUOTE!
                            </Button>
                        </Link>
                    </div>


                    <div id='socialLinks'>
                        <h2>Social</h2>
                        <ul>
                            {/* <li><a href="">Facebook</a></li>                    
                            <li><a href="">Instagram</a></li> */}
                        </ul>
                    </div>

                </div>

            </div>
        </footer>

    );
};

export default Footer; 

