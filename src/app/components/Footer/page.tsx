'use client'
import React from 'react'
import { useRouter } from "next/navigation";
//Styles 
import styles from './footer.module.css';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMobile } from '@fortawesome/free-solid-svg-icons';

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
                {/* <div className={styles['phone-icon-footer']}>
                <FontAwesomeIcon icon={faMobile} />
                </div> */}
                <div className={styles['company-phone-number-footer']}><span><FontAwesomeIcon icon={faMobile} /></span><text>507-358-4948</text></div>
              </div>

              <div className={styles['company-email-address-container-footer']}>
                {/* <div className={styles['email-icon-footer']}>
                  <FontAwesomeIcon icon={faEnvelope} />
                </div> */}
                <div className={styles['company-email-address-footer']}><span><FontAwesomeIcon icon={faEnvelope} /></span> <text> Christianloera1214@icloud.com </text> </div>


              </div>
            </div>
          </div>

          {/*Column 2. Middle Column */}
          <div className={`${styles['column']} ${styles['middle']}`}>
            <div className={styles['column2-container']}>
              <div className={styles['column2-title']}>
                <h2>Buisness Hours</h2>
              </div>

              <div className={styles['column2-underline-divider-container']}>
                <div className={styles['column2-underline']}>
                  <div className={styles['column2-line']}> </div>
                </div>
              </div>

              <div className={styles['business-hours-column']}>
                <ul>
                  <li><span className={styles['date']}>Monday - Thursday :</span> <span className={styles['time']}>8:00 AM - 5:00 PM</span></li>
                  <li><span className={styles['date']}>Friday :</span> <span className={styles['time']}>9:00 AM - 5:00 PM</span></li>
                  <li><span className={styles['date']}>Saturday :</span> <span className={styles['time']}>Closed</span></li>
                  <li><span className={styles['date']}>Sunday :</span> <span className={styles['time']}>Closed</span></li>
                </ul>
              </div>

            </div>
          </div>


          {/*Column 3. Right Column*/}
          <div className={`${styles['column']} ${styles['right']}`}>
            <div className={styles['column3-container']}>

              <div className={styles['column3-title']}>
                <h2>Useful Links</h2>
              </div>

              <div className={styles['column3-underline-divider-container']}>
                <div className={styles['column3-underline']}>
                  <div className={styles['column3-line']}> </div>
                </div>
              </div>

  {/* //TODO: add navigation for the links */}
              <div className={styles['secondary-row-container']}>
                <div className={styles['secondary-column1']}>
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

                <div className={styles['secondary-column2']}>
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
                {/* //TODO: ADD links to social media accounts. Add contact links for phone and email. */}

{/*  */}
                <div className={styles['secondary-column3']}>
                  <FontAwesomeIcon className={styles['facebook-icon']} icon={faFacebook} />
                  <FontAwesomeIcon className={styles['instagram-icon']}  icon={faInstagram} />
                  <FontAwesomeIcon className={styles['tiktok-icon']}  icon={faTiktok} />
                </div>

              </div>

            </div>
          </div>


        </div>
      </div>
    </footer >
  );
};

export default Footer; 