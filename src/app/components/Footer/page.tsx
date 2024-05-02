'use client'
import React from 'react'

//Styles 
import styles from './footer.module.css'


type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className={styles['footer-area']} >
      <div className={styles.container}>

        {/*  */}
        {/* Row 1  */}

        <div className="row">
          <div className="col-md-4">
            <h6>Userful Links</h6>
          </div>
          <div className="col-md-4">
            <h6>Business Hours</h6>
          </div>
          <div className="col-md-4">
            <h6>Social Links</h6>
          </div>
        </div>

        
          {/* Row 2 */}
          <div className={styles.row2container}>
          <div className="row">
            <div className="col">
              <ul className={styles['footer-nav1']}>
                <li>
                  <i className="ti-angle-right"></i>
                  <a href="/">Home</a>
                </li>
                <li>
                  <i className="ti-angle-right"></i>
                  <a href="/services">Services</a>
                </li>
                <li>
                  <i className="ti-angle-right"></i>
                  <a href="/about">About Us</a>
                </li>
                <li>
                  <i className="ti-angle-right"></i>
                  <a href="/projects">Projects</a>
                </li>
              </ul>
            </div>

            <div className="col col-sm-2">
              <ul className={styles['footer-nav1']}>
                <li>
                  <i className="ti-angle-right"></i>
                  <a href="/contactus">Contact Us</a>
                </li>
                <li>
                  <i className="ti-angle-right"></i>
                  <a href="/feedback">Feedback</a>
                </li>
                <li>
                  <i className="ti-angle-right"></i>
                  <a href="/termsandcondition">Terms and condition</a>
                </li>
                <li>
                  <i className="ti-angle-right"></i>
                  <a href="/privacypolicy"> Privacy Policy</a>
                </li>
              </ul>
            </div>

            <div className="col">
              <ul className="business-hour">
                <li>
                  Monday - Thursday : <span>8:00 am - 5:00 pm</span>{" "}
                </li>
                <li>
                  Friday : <span> 9:00 am - 5:00 pm</span>
                </li>
                <li>
                  Saturday : <span>Closed</span>
                </li>
                <li>
                  Sunday : <span>Closed</span>
                </li>
              </ul>
            </div>


            <div className="col">
              <ul className="social-links">
                {/* <li><a href="">Facebook</a></li>                    
                            <li><a href="">Instagram</a></li> */}
              </ul>
            </div>
          </div>

        </div>


        {/* Row 3 Single row button only */}
        <div className="row">
          <div className="col">
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white 
                 py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              <a href='/contactus'>GET A QUOTE!</a>
            </button>
          </div>
        </div>

        {/* Row 4  */}
        <div className="row">
          <div className='col align-items-center'>
            <div className="bottom-row-footer">
              <p>
                Copyright &copy;
                2024 CLCDRYWALL. All
                rights reserved
              </p>
            </div>
          </div>
        </div>



      </div>
    </footer >
  );
};

export default Footer