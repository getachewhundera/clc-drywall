'use client'
import React, { useState, useRef } from 'react'; // Import useEffect is not needed here
import Link from 'next/link';
import Image from 'next/image';
import styles from './navbar.module.css';
import useVerticalScrollEvent from '../hooks/useVerticalScrollEvent';



export default function NavBarPage() {
    const topNavRef = useRef(null);  // Reference for the top nav
    const [showSearch, setShowSearch] = useState(false);
    const [searchInput, setSearchInput] = useState('');

    useVerticalScrollEvent((evt: any) => {
        const currentY = evt.currentTarget.scrollY;
        if (currentY >= 172) {
            topNavRef.current.classList.add('hidden'); // Hides the top nav when scrolling down
        } else {
            topNavRef.current.classList.remove('hidden'); // Shows the top nav when scrolled to top
        }
    });

    const handleSearchToggle = () => {
        setShowSearch(!showSearch);
    };

    const handleInputChange = (e) => {
        setSearchInput(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        console.log("Searching for:", searchInput);
    };

    return (
            <nav className={styles['complete-navbar']}>
                <div className={styles['navbar-one']}>
                    <div className={styles.left}>
                        <div className={styles.call}>
                            <i className={styles['fa fa-phone-alt']}></i>
                            <span>+1 (507) 358-4948</span>
                        </div>

                        <div className={styles.city}>
                            <i className={styles['fa fa-location-pin']}></i>
                            <span> Rochester, MN </span>
                        </div>
                    </div>

                    <div className={styles.right}>
                        <span id={styles['follow-us']}>Follow us:</span>
                        <div className={styles.facebook}>
                            <i className={styles['fab fa-facebook']}></i>
                            <span>facebook</span>
                        </div>
                        <div className={styles.twitter}>
                            <i className={styles['fab fa-twitter']}></i>
                            <span>twitter</span>
                        </div>
                        <div className={styles.instagram}>
                            <i className={styles['fab fa-instagram']}></i>
                            <span>instagram</span>
                        </div>
                    </div>
                </div>

                <div className={styles['navbar-two']}>
                    <div className={styles.logo}>
                        <Link href="/" className={styles['navbar-brand logo_h']}>
                            <Image src="/images/logo.png.webp" alt="" width={165} height={80} />
                        </Link>
                    </div>

                    <ul className={styles['menu_nav']}>
                        <li className={styles['nav-item active']}>
                            <Link href="/" className={styles['nav-link']}>Home</Link>
                        </li>
                        <li className={styles['nav-item']}>
                            <Link href="/about" className={styles['nav-link']}>About</Link>
                        </li>
                        <li className={styles['nav-item']}>
                            <Link href="/services" className={styles['nav-link']}>Services</Link>
                        </li>
                        <li className={styles['nav-item']}>
                            <Link href="/projects" className={styles['nav-link']}>Projects</Link>
                        </li>
                        <li className={styles['nav-item']}>
                            <Link href="/contactUs" className={styles['nav-link']}>Contact</Link>
                        </li>
                    </ul>

                    <div className={styles.search_input} id={styles.search_input_box} className={showSearch ? 'show-search' : ''}>
                        <form className={styles['d-flex justify-content-between search-inner']} onSubmit={handleSearchSubmit}>
                            <input
                                type="text"
                                className={styles['form-control']}
                                id={styles.search_input}
                                placeholder="Search Here"
                                value={searchInput}
                                onChange={handleInputChange}
                            />
                            <button type="submit" className={styles.btn}>Search</button>
                            <span
                                className={styles['ti-close']}
                                id={styles['close_search']}
                                title="Close Search"
                                onClick={handleSearchToggle}
                            ></span>
                        </form>
                    </div>

                </div>



            </nav>
    );
}