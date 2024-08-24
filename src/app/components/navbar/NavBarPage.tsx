'use client'
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
// import Image from 'next/image';
import styles from './navbar.module.css';
import 'hamburgers';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { faLocationDot, faMobile } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';




export default function NavBarPage() {
    const topNavRef = useRef<HTMLDivElement>(null); // Ref for top nav
    // const [showSearch, setShowSearch] = useState(false);
    // const [searchInput, setSearchInput] = useState('');
    // const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;
            if (topNavRef.current) {
                if (currentY >= 30) {
                    topNavRef.current.classList.add(styles.hidden); // Hides the top nav when scrolling down
                } else {
                    topNavRef.current.classList.remove(styles.hidden); // Shows the top nav when scrolled to top
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // const handleSearchToggle = () => {
    //     setShowSearch(!showSearch);
    // };

    // const handleInputChange = (e) => {
    //     setSearchInput(e.target.value);
    // };

    // const handleSearchSubmit = (e) => {
    //     e.preventDefault();
    //     console.log("Searching for:", searchInput);
    // };


    // const toggleMenu = () => {
    //     setIsMenuOpen(!isMenuOpen);
    // };

    return (
        <nav className={styles['complete-navbar']}>
            <div ref={topNavRef} className={styles['navbar-one']}>
                <div className={styles.left}>
                    <div className={styles.call}>
                        {/* <i className={styles['fa fa-phone-alt']}></i> */}
                        {/* <span>+1 (507) 358-4948</span> */}
                        <span><FontAwesomeIcon icon={faMobile}  className={styles['nav-mobile-icon']} /></span><text>507-358-4948</text>
                    </div>
                    {/* //TODO: Have location Link to Google Buisness Profile once created.  */}
                    <div className={styles.city}>
                        {/* <i className={styles['fa fa-location-pin']}></i> */}
                        <span> <FontAwesomeIcon icon={faLocationDot}  className={styles['nav-location-icon']} /></span>
                        <text> Rochester, MN </text>
                    </div>
                </div>

                <div className={styles.right}>
                    <span id={styles['follow-us']}>Follow us:</span>
                    <div className={styles.facebook}>
                        <a rel='nofollow' href='https://www.facebook.com/loera1214/' target='_blank'>
                            <FontAwesomeIcon className={styles['nav-facebook-icon']} icon={faFacebook} />
                        </a>
                    </div>

                    {/* //TODO: Link to instagram once created.  */}
                    <div className={styles.instagram}>
                        <a rel='nofollow' href='' target='_blank'>
                            <FontAwesomeIcon className={styles['nav-instagram-icon']} icon={faInstagram} />
                        </a>
                    </div>
                    {/* //TODO: Link to tiktok once created.  */}
                    <div className={styles.tiktok}>
                        <a rel='nofollow' href='' target='_blank'>
                            <FontAwesomeIcon className={styles['nav-tiktok-icon']} icon={faTiktok} />
                        </a>
                    </div>
                </div>
            </div>

            <div className={styles['navbar-two']}>
                <div className={styles.logo}>
                        <a href='/'><h1>CLC DRYWALL</h1></a>
                  

                    {/* <Link href="/" className={styles['navbar-brand logo_h']}>
                        <Image src="./images/CompnayLogo/logo.jpg" alt="" width={165} height={80} />
                    </Link> */}
                </div>

                <ul className={styles['menu_nav']}>
                    <li className={styles['nav-item']}>
                        <Link href="/" className={styles['nav-link']}>Home</Link>
                    </li>
                    <li className={styles['nav-item']}>
                        <Link href="/AboutUs" className={styles['nav-link']}>About</Link>
                    </li>
                    <li className={styles['nav-item']}>
                        <Link href="/services" className={styles['nav-link']}>Services</Link>
                    </li>
                    <li className={styles['nav-item']}>
                        <Link href="/projects" className={styles['nav-link']}>Projects</Link>
                    </li>
                    <li className={styles['nav-item']}>
                        <Link href="/contact" className={styles['nav-link']}>Contact</Link>
                    </li>
                </ul>

                {/* <div className={`${styles.search_input} ${showSearch ? styles['show-search'] : ''}`}>
                    <form className={styles['d-flex justify-content-between search-inner']} onSubmit={handleSearchSubmit}>
                        <input
                            type="text"
                            className={styles['form-control']}
                            placeholder="Search Here"
                            value={searchInput}
                            onChange={handleInputChange}
                        />
                        <button type="submit" className={styles.btn}>Search</button>
                        <span
                            className={styles['ti-close']}
                            title="Close Search"
                            onClick={handleSearchToggle}
                        ></span>
                    </form>
                </div> */}


                {/*HAMBURGER MENU*/}
                {/* <nav>

                    <button
                        className={`${styles['hamburger-menu']} ${isMenuOpen ? styles.active : ''}`}
                        type="button"
                        aria-label="Menu"
                        aria-controls="navigation"
                        aria-expanded={isMenuOpen}
                        onClick={toggleMenu}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <div id="popUpNav" className={`${styles.overlay} ${isMenuOpen ? styles.open : ''}`}>
                        <button className={styles['close-button']} onClick={toggleMenu}>×</button>
                        <div id="navigation" className={styles['overlay-content']}>
                            <Link href="/AboutUs" onClick={() => setIsMenuOpen(false)}>About</Link>
                            <Link href="/projects" onClick={() => setIsMenuOpen(false)}>Projects</Link>
                        </div>
                    </div>
                </nav> */}

            </div>
        </nav>
    );
}