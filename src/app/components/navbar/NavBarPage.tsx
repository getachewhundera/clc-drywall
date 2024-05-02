'use client'
import React, { useRef } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import useVerticalScrollEvent from '../../hooks/useVerticalScrollEvent'

import styles from './navbar.module.css';


type Props = {};


export default function NavaBarPage(props: Props) {

    const stickyRef = useRef<HTMLDivElement>(null);

    useVerticalScrollEvent((evt: any) => {
        if (evt.currentTarget.scrollY >= 172) {
            (stickyRef.current as HTMLDivElement).classList.add('navbar_fixed');
            return;
        }
        if (stickyRef.current && evt.currentTarget.scrollY <= 42) {
            (stickyRef.current as HTMLDivElement).classList.remove('navbar_fixed');
            return;
        }
        // if(evt.currentTarget.scrollY <= 42) {
        //   (stickyRef.current as HTMLDivElement).classList.remove('navbar_fixed');
        //   return;
        // }

    });

    return (
        <header className={styles.header_area} ref={stickyRef}>
            <div>

                {/* Top Nav of the NavBar */}
                <div className={styles.top_menu}>

                    <div className={styles.container}>
                        <div className={styles.floatleft}>
                            <i className={styles.mobile}></i>
                            <a className="dn_btn" href="">
                                +1 (507) 358-4948
                            </a>
                            <i className={styles.locationpin}></i>
                            <span className={styles.dn_btn}>
                                Rochester, MN
                            </span>
                        </div>

                        <div className={styles.floatright}>
                            <span className="follow_us">Follow us: </span>
                            <ul className={styles['list header_social']}>
                                <li>
                                    <a href="#">
                                        <i className={styles.ti-facebook}></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className: string[] ={styles.ti-twitter}></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className={styles.ti-instagram}></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="search_input" id="search_input_box">
                    <div className="container ">
                        <form className="d-flex justify-content-between search-inner">
                            <input
                                type="text"
                                className="form-control"
                                id="search_input"
                                placeholder="Search Here"
                            />
                            <button type="submit" className="btn"></button>
                            <span
                                className="ti-close"
                                id="close_search"
                                title="Close Search"
                            ></span>
                        </form>
                    </div>
                </div>



                {/* Main Part of NavBar--pages, links */}

                <div className="main_menu">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container">
                            <Link className="navbar-brand logo_h" href="/">
                                <Image src="/images/logo.png.webp" alt="" width={165} height={80} />
                            </Link>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>

                            <div
                                className="collapse navbar-collapse offset"
                                id="navbarSupportedContent"
                            >
                                <ul className="nav navbar-nav menu_nav ml-auto">
                                    <li className="nav-item active">
                                        <Link className="nav-link" href="/">
                                            Home
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" href="/about">
                                            About
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" href="/services">
                                            Services
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" href="/projects">
                                            Projects
                                        </Link>
                                    </li>
                                    {/* <li className="nav-item submenu dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Blog
              </a>
              <ul className="dropdown-menu">
                <li className="nav-item">
                  <Link className="nav-link" href="/blog">
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/single-blog">
                    Blog Details
                  </Link>
                </li>
              </ul>
            </li> */}
                                    <li className="nav-item">
                                        <Link className="nav-link" href="/contactUs">
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="right-button">
                                <ul>
                                    <li className="shop-icon">
                                        <a href="#">
                                            <i className="ti-shopping-cart-full"></i>
                                            <span>0</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a id="search" href="#">
                                            <i className="ti-search"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>





            </div>
        </header >
    );
};