'use client'
import React from 'react'
import { useRouter } from "next/navigation";
//Styles 
import styles from './footer.module.css';


type Props = {}

const Footer = (props: Props) => {
  const router = useRouter();
  return (
    <footer className={styles['footer-area']}>
      <div className={styles['main-footer-area']}>

        <div className={styles['row']}>
          {/* Column 1. Left Column */}
          <div className={`${styles['column']} ${styles['left']}`}>
            <div className={styles['column1-container']}>
              <div className={styles['column1-title']}>
                <h2>Contact Us</h2>
              </div>
              <div className={styles['underline-divider-container']}>
                    <div className={styles.underline}>
                        <div className={styles.line}> </div>
                    </div>
                </div>

              <div className={styles['footer-quote-button-container']}>
                <div className={styles['quote-button']}>
                  <button type="button" onClick={() => router.push('/contact')}>GET A QUOTE!</button>
                </div>
              </div>

              <div className={styles['company-phone-number-container-footer']}>
                <div className={styles['phone-icon-footer']}>
                </div>
                <div className={styles['company-phone-number-footer']}>507-358-4948</div>
              </div>

              <div className={styles['company-email-address-container-footer']}>
                <div className={styles['email-icon-footer']}>
                </div>
                <div className={styles['company-email-address-footer']}>Christianloera1214@icloud.com </div>
              </div>
            </div>
          </div>

          {/*Column 2. Middle Column */}
          <div className={`${styles['column']} ${styles['middle']}`}>
            <div className={styles['column2-container']}>
              <div className={styles['column2-title']}>
                <h2>Buisness Hours</h2>
              </div>
              <ul className={styles['business-hours']}>
                <li>
                  Monday - Thursday: <span>8:00 AM - 5:00 PM</span>{" "}
                </li>
                <li>
                  Friday : <span> 9:00 AM  - 5:00 PM</span>
                </li>
                <li>
                  Saturday : <span>Closed</span>
                </li>
                <li>
                  Sunday : <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>


          {/*Column 3. Right Column*/}
          <div className={`${styles['column']} ${styles['right']}`}>
            <div className={styles['column3-container']}>
              <div className={styles['column3-title']}>
                <h2>Useful Links</h2>
              </div>
              <div className={styles['secondary-column1-links-left']}>
                <ul className={styles['footer-nav1']}>
                  <li>
                    <i className="ti-angle-right"></i>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <i className="ti-angle-right"></i>
                    <a href="/about">About Us</a>
                  </li>
                  <li>
                    <i className="ti-angle-right"></i>
                    <a href="/contactus">Contact Us</a>
                  </li>
                </ul>
              </div>

              <div className={styles['secondary-column2-links-middle']}>
                <ul className={styles['footer-nav1']}>
                  <li>
                    <i className="ti-angle-right"></i>
                    <a href="/services">Services</a>
                  </li>
                  <li>
                    <i className="ti-angle-right"></i>
                    <a href="/projects">Projects</a>
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

              <div className={styles['secondary-column3-socialmedia-icons-right']}>
                <ul className="social-links">
                  {/* <li><a href="">Facebook</a></li>                    
                            <li><a href="">Instagram</a></li> */}
                </ul>
              </div>
            </div>
          </div>


        </div>
      </div>
    </footer >
  );
};

export default Footer; 