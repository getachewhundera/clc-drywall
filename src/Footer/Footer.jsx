// import './Footer.css'


function Footer(){

    return(
    
        
        <footer className="App-footer">
             {/* got the location from this website. https://www.bizapedia.com/mn/clc-drywall-llc.html */}
            <div id='footerAddress'>
                CLC DRYWALL LLC 
                LOCATION:3945 Alberta Dr. Ne
                Rochester, MN 55906 
            </div>

            {/*Got buisness hours and contact info from clients facebook place. recommend that client update facebook to change monday's time from 8:13am to 8am  */}
            <div id="footerBuisnessHours">
                Monday: 8:00 AM - 5:00 PM
                Tuesday: 8:00 AM - 5:00 PM
                Wednesday: 8:00 AM - 5:00 PM
                Thursday: 8:00 AM - 5:00 PM
                Friday: 9:00 AM - 5:00 PM
                Saturday: CLOSED
                Sunday: CLOSED
            </div>

            <div id="footerBuisnessContactInfo">
                Phone: 507-358-4948
                Email: Christianloera1214@icloud.com
            </div>
    
    {/*  */}
      {/* contact us button in footer leads to the contact us page. "secondary call to action"  */}
                <div> 
                    <button type="click"  id='footerContactUsButton'> Contact Us </button>   
                </div>
        
        </footer>
      
        );
    };
    
    export default Footer; 