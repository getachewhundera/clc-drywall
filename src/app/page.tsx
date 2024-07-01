// `app/page.tsx` is the UI for the `/` URL
'use client'
import React, { useEffect, useRef } from 'react';
import styles from './styles/LandingPage.module.css';
import { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";



// import Swiper core and required modules
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import 'boxicons/css/boxicons.min.css';


type Props = {
    showHeading?: boolean;
}

// Define your interface for handling images
interface ImageProps {
    src: string | StaticImageData;
    alt: string;
}


export default function Page({ showHeading = true }: Props) {
    const router = useRouter();
    const swiperRef = useRef<Swiper | null>(null);

    // const imagesLeft: ImageProps[] = [
    //     { src: '/images/LandingPageHeaderImages/main1.jpg', alt: "Left main image" },
    //     { src: '/images/LandingPageHeaderImages/nhimg1.jpeg', alt: "Left header image" },
    //     { src: '/images/LandingPageHeaderImages/nhimg1.2.jpeg', alt: "Left another header image" }
    // ];

    // const imagesRight: ImageProps[] = [
    //     { src: '/images/LandingPageHeaderImages/main.jpg', alt: "Right main image" },
    //     { src: '/images/LandingPageHeaderImages/nhimg1.1.jpeg', alt: "Right header image" },
    //     { src: '/images/LandingPageHeaderImages/nhimg1.21.jpeg', alt: "Right another header image" }
    // ];


    // Images to be used in the left pane
    const imagesLeft: string[] = [
        '/images/LandingPageHeaderImages/main1.jpg',
        '/images/LandingPageHeaderImages/nhimg1.jpeg',
        '/images/LandingPageHeaderImages/nhimg1.2.jpeg'
    ];
    // const imagesLeft: ImageProps[] = [
    //     { src: '/images/LandingPageHeaderImages/main1.jpg', alt: "main image" },
    //     { src: '/images/LandingPageHeaderImages/nhimg1.jpeg', alt: "header image" },
    //     { src: '/images/LandingPageHeaderImages/nhimg1.2.jpeg', alt: "another header image" }
    // ];

    // Images for the right pane
    const imagesRight: string[] = [
        '/images/LandingPageHeaderImages/main.jpg',
        '/images/LandingPageHeaderImages/nhimg1.1.jpeg',
        '/images/LandingPageHeaderImages/nhimg1.21.jpeg'
    ];

    // Check if running in the browser environment
    // if (typeof window !== 'undefined') {
    //     console.log(window.location.href);
    // }



    //initialized after component is rendered
    useEffect(() => {
        const swiperInstance = new Swiper('.mySwiper', {
            modules: [Navigation, Pagination],
            //   Default parameters
            slidesPerView: 3,
            spaceBetween: 32,
            slidesPerGroup: 1,
            loop: false,
            // Optional parameters
            direction: 'horizontal',
            grabCursor: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
                dynamicBullets: true,
                dynamicMainBullets: 6,
            },
            // Responsive breakpoints
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                // when window width is >= 480px
                480: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
                // when window width is >= 640px
                640: {
                    slidesPerView: 4,
                    spaceBetween: 40
                }
            }
        });
        swiperRef.current = swiperInstance;
    }, []);


    //funtions for the handle click events for Card Slider Navigation arrows
    const handlePrevClick = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    };

    const handleNextClick = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    };


    return (
        <div className={styles['LandingPageBody']}>
            {/* START of Hero Section on Landing Page */}
            <div className={styles.home_banner_area}>
                <div className={styles['banner_container']}>
                    <div className={styles['banner_inner']}>

                        <div className={styles.pane + " " + styles['left-pane']}>
                            {imagesLeft.map((img, index) => (
                                <div key={index} className={styles.image + " " + styles[`img-${index}`]} style={{ backgroundImage: `url(${img})` }}></div>
                            ))}
                        </div>

                        <div className={styles.pane + " " + styles['right-pane']}>
                            {imagesRight.map((img, index) => (
                                <div key={index} className={styles.image + " " + styles[`img-${index}`]} style={{ backgroundImage: `url(${img})` }}></div>
                            ))}
                        </div>

                        <div className={styles.container}>
                            <div className={styles['banner_content']}>
                                <span>CLC DRYWALL LLC</span>
                                <h3>Where Quality
                                    <br />
                                    Meets
                                    <br />
                                    Craftsmanship.
                                </h3>
                                <div className={styles.headerContactUsButton}>
                                    {/* call to action button, sits in the middle
                             of main webpage, easily identifiable*/}
                                    <button type="button" id={styles.mainPageContactUsButton} onClick={() => router.push('/contactus')}>
                                        Get A Quote
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* END of Hero Section on Landing Page */}




            {/* START of CARD SLIDER ANIMATION SERVICES SECTION */}
            {/* lp_cs = landing page card slider */}
            <div className={styles['landing_page_cs_animation_section']}>
                <div className={styles['decorative-lines-container']}>
                    <div className={styles.decorativelines}>
                        <div className={styles.decorativelinebase}> </div>
                        <div className={styles.decorativelineoverlayed}> </div>
                    </div>
                </div>

                <div className={styles['lp-cs-section-title-container']}>
                    <div className={styles['lp_cs_section_title']}>
                        <h2>WHAT WE PROVIDE</h2>
                    </div>
                </div>

                <div ref={swiperRef} className={`swiper mySwiper ${styles['lp-cs-container']}`}>
                    <div className={`swiper-wrapper ${styles['card-container']}`}>
                        <article className={`swiper-slide ${styles['card-article']}`}>
                            <div className={styles.card_image}>
                                <img src="./images/Card_Slider_LandingPage/drywallinstall.jpg" alt="Image of Drywall Board Installation" />
                            </div>

                            <div className={styles.card_data}>
                                <h3 className={styles.card_name}> Drywall Installation </h3>
                                <p className={styles.card_description}>
                                    sdfddsfdsfsdfdfsdfsdf
                                </p>
                                <Link href="/" className={styles.card_button}>View More</Link>
                            </div>
                        </article>

                        <article className={`swiper-slide ${styles['card-article']}`}>
                            <div className={styles.card_image}>
                                <img src="./images/Card_Slider_LandingPage/drywallinstall.jpg" alt="Image of Drywall Board Installation" />
                            </div>

                            <div className={styles.card_data}>
                                <h3 className={styles.card_name}> Drywall Installation </h3>
                                <p className={styles.card_description}>
                                    sdfddsfdsfsdfdfsdfsdf
                                </p>
                                <Link href="/" className={styles.card_button}>View More</Link>
                            </div>
                        </article>

                        <article className={`swiper-slide ${styles['card-article']}`}>
                            <div className={styles.card_image}>
                                <img src="./images/Card_Slider_LandingPage/drywallinstall.jpg" alt="Image of Drywall Board Installation" />
                            </div>

                            <div className={styles.card_data}>
                                <h3 className={styles.card_name}> Drywall Installation </h3>
                                <p className={styles.card_description}>
                                    sdfddsfdsfsdfdfsdfsdf
                                </p>
                                <Link href="/" className={styles.card_button}>View More</Link>
                            </div>
                        </article>

                        <article className={`swiper-slide ${styles['card-article']}`}>
                            <div className={styles.card_image}>
                                <img src="./images/Card_Slider_LandingPage/drywallinstall.jpg" alt="Image of Drywall Board Installation" />
                            </div>

                            <div className={styles.card_data}>
                                <h3 className={styles.card_name}> Drywall Installation </h3>
                                <p className={styles.card_description}>
                                    sdfddsfdsfsdfdfsdfsdf
                                </p>
                                <Link href="/" className={styles.card_button}>View More</Link>
                            </div>
                        </article>

                        <article className={`swiper-slide ${styles['card-article']}`}>
                            <div className={styles.card_image}>
                                <img src="./images/Card_Slider_LandingPage/drywallinstall.jpg" alt="Image of Drywall Board Installation" />
                            </div>

                            <div className={styles.card_data}>
                                <h3 className={styles.card_name}> Drywall Installation </h3>
                                <p className={styles.card_description}>
                                    sdfddsfdsfsdfdfsdfsdf
                                </p>
                                <Link href="/" className={styles.card_button}>View More</Link>
                            </div>
                        </article>


                        <article className={`swiper-slide ${styles['card-article']}`}>
                            <div className={styles.card_image}>
                                <img src="./images/Card_Slider_LandingPage/drywallinstall.jpg" alt="Image of Drywall Board Installation" />
                            </div>

                            <div className={styles.card_data}>
                                <h3 className={styles.card_name}> Drywall Installation </h3>
                                <p className={styles.card_description}>
                                    sdfddsfdsfsdfdfsdfsdf
                                </p>
                                <Link href="/" className={styles.card_button}>View More</Link>
                            </div>
                        </article>
                    </div>
                </div>

                {/* Pagination */}
                <div className={`swiper-pagination ${styles['swiper-pagination']}`}></div>

                {/*--Naviagtion Buttons--*/}
                <div className={styles.navigationArrows}>
                    <div onClick={handlePrevClick} className={styles['swiper-button-prev']}>
                        <i className='bx bx-chevron-left bx-lg'></i>
                    </div>
                    <div onClick={handleNextClick} className={styles['swiper-button-next']}>
                        <i className='bx bx-chevron-right bx-lg'></i>
                    </div>
                </div>


                {/*cs = card slider */}
                <div className={styles.cs_services_button}>
                    <button type="button" onClick={() => router.push('/services')}>Our Services</button>
                </div>

            </div>
            {/* END of CARD SLIDER ANIMATION SERVICES SECTION */}



            {/* START of FIXED CARDS DISPLAY SECTION */}
            <section id={styles['mpContainers']}>

                <h2>EXPERT SOLUTIONS YOU CAN RELY ON</h2>

                <div id={styles['mpContainerOne']}>
                    <img src='./LandingPageServicesIcons/veicon.png' alt='' />
                    <h2> Vast Experience </h2>
                </div>

                <div id={styles['mpContainerTwo']}>
                    <img src='./LandingPageServicesIcons/pwicon.png' alt='' />
                    <h2> Professional Team </h2>
                </div>

                <div id={styles['mpContainerThree']}>
                    <img src='./LandingPageServicesIcons/nshandshake.png' alt='' />
                    <h2> Reliable Service </h2>
                </div>

                <div id={styles['mpContainerFour']}>
                    <img src='./LandingPageServicesIcons/dqwicon.png' alt='' />
                    <h2> Quality Work </h2>
                </div>

            </section>
            {/* END of FIXED CARDS DISPLAY SECTION */}



            {/* START of RECENT PROJECTS DISPLAY SECTION */}

            <section className="lp_recent_projects_section">

                <h2>RECENT PROJECTS</h2>

                <div
                    className="all_images"
                    onClick={() => href = 'services/{id}'}
                >
                    <div className="allprojects_image_container">
                        <img src='' alt='' id='allprojects_image1' />
                        <img src='' alt='' id='allprojects_image2' />
                        <img src='' alt='' id='allprojects_image3' />
                        <img src='' alt='' id='allprojects_image4' />
                        <img src='' alt='' id='allprojects_image5' />
                    </div>
                </div>

            </section>

            {/* END of RECENT PROJECTS DISPLAY SECTION */}

        </div >
    );
};