// `app/page.tsx` is the UI for the `/` URL
// `app/page.tsx` is the UI for the `/` URL
'use client'
import React, { useEffect, useState } from 'react';
import styles from './styles/LandingPage.module.css';
import { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";


// Import Swiper styles from the public directory
// import '/swiper/swiper-bundle.min.css';
import '/public/swiper/swiper-bundle.min.css';

type Props = {
    showHeading?: boolean;
}

// Define your interface for handling images
interface ImageProps {
    src: string | StaticImageData;
    alt: string;
}


export default function Page({ showHeading = true }: Props) {
    const router = useRouter()

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

    // useEffect(() => {
    //     if (typeof window !== 'undefined') {
    //         const script = document.createElement('script');
    //         script.src = '/swiper/swiper-bundle.min.js';
    //         script.onload = () => {
    //             let swiperCards = window.Swiper;
    //             new Swiper('.card_content', {
    //                 loop: true,
    //                 spaceBetween: 32,
    //                 grabCursor: true,

    //                 pagination: {
    //                     el: '.swiper-pagination',
    //                     clickable: true, 
    //                     dynamicBullets: true, 
    //                 },
    //                 navigation: {
    //                     nextEl: '.swiper-button-next',
    //                     prevEl: '.swiper-button-prev',
    //                 },
    //             });
    //         };
    //         document.body.appendChild(script);
    //     }
    // }, []);

    //    let [changeCards, Swiper] = useState("swiper"); 

    // let swiper = new Swiper('.swiper', {
    // Optional parameters
    //     direction: 'horizontal',
    //     loop: true,
    //     spaceBetween: 32,
    //     grabCursor: true,

    //     pagination: {
    //         el: '.swiper-pagination',
    //         clickable: true, 
    //         dynamicBullets: true, 
    //     },
    //     navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev',
    //     },
    //   });



    // let swiperCards = new Swiper('.card_content', {
    //     loop: true,
    //     spaceBetween: 32, 
    //     grabCursor: true, 

    //     pagination: {
    //       el: '.swiper-pagination',
    //     },

    //     // Navigation arrows
    //     navigation: {
    //       nextEl: '.swiper-button-next',
    //       prevEl: '.swiper-button-prev',
    //     },
    //   });






    return (
        <>
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
            <section className='landing_page_cs_animation_section'>
                <div className={styles['lp_cs_section_title']}>
                    <h2>WHAT WE PROVIDE</h2>
                </div>
                <div className={styles.lp_cs_container}>
                    <div className={styles['card_container swiper']}>
                        <div className={styles.card_content}>
                            <div className={styles['swiper-wrapper']}>

                                <article className={styles['card_article swiper-slider']}>
                                    <div className={styles.card_image}>
                                        <img src="./images/Card_Slider_LandingPage/drywallinstall.jpg" alt="Image of Drywall Board Installation" />
                                        <div className={styles.card_shadow}></div>
                                    </div>

                                    <div className={styles.card_data}>
                                        <h3 className={styles.card_name}> Drywall Installation </h3>
                                        <p className={styles.card_description}>
                                            sdfddsfdsfsdfdfsdfsdf
                                        </p>
                                        <Link href="/" className={styles.card_button}>View More</Link>
                                    </div>
                                </article>

                                <article className={styles['card_article swiper-slider']}>
                                    <div className={styles.card_image}>
                                        <img src="./images/Card_Slider_LandingPage/drywallinstall.jpg" alt="Image of Drywall Board Installation" />
                                        <div className={styles.card_shadow}></div>
                                    </div>

                                    <div className={styles.card_data}>
                                        <h3 className={styles.card_name}> Drywall Installation </h3>
                                        <p className={styles.card_description}>
                                            sdfddsfdsfsdfdfsdfsdf
                                        </p>
                                        <Link href="/" className={styles.card_button}>View More</Link>
                                    </div>
                                </article>

                                <article className={styles['card_article swiper-slider']}>
                                    <div className={styles.card_image}>
                                        <img src="./images/Card_Slider_LandingPage/drywallinstall.jpg" alt="Image of Drywall Board Installation" />
                                        <div className={styles.card_shadow}></div>
                                    </div>

                                    <div className={styles.card_data}>
                                        <h3 className={styles.card_name}> Drywall Installation </h3>
                                        <p className={styles.card_description}>
                                            sdfddsfdsfsdfdfsdfsdf
                                        </p>
                                        <Link href="/" className={styles.card_button}>View More</Link>
                                    </div>
                                </article>

                                <article className={styles['card_article swiper-slider']}>
                                    <div className={styles.card_image}>
                                        <img src="./images/Card_Slider_LandingPage/drywallinstall.jpg" alt="Image of Drywall Board Installation" />
                                        <div className={styles.card_shadow}></div>
                                    </div>

                                    <div className={styles.card_data}>
                                        <h3 className={styles.card_name}> Drywall Installation </h3>
                                        <p className={styles.card_description}>
                                            sdfddsfdsfsdfdfsdfsdf
                                        </p>
                                        <Link href="/" className={styles.card_button}>View More</Link>
                                    </div>
                                </article>

                                <article className={styles['card_article swiper-slider']}>
                                    <div className={styles.card_image}>
                                        <img src="./images/Card_Slider_LandingPage/drywallinstall.jpg" alt="Image of Drywall Board Installation" />
                                        <div className={styles.card_shadow}></div>
                                    </div>

                                    <div className={styles.card_data}>
                                        <h3 className={styles.card_name}> Drywall Installation </h3>
                                        <p className={styles.card_description}>
                                            sdfddsfdsfsdfdfsdfsdf
                                        </p>
                                        <Link href="/" className={styles.card_button}>View More</Link>
                                    </div>
                                </article>


                                <article className={styles['card_article swiper-slider']}>
                                    <div className={styles.card_image}>
                                        <img src="./images/Card_Slider_LandingPage/drywallinstall.jpg" alt="Image of Drywall Board Installation" />
                                        <div className={styles.card_shadow}></div>
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

                        {/* Card Slider Navigation buttons */}
                        <div className={styles['swiper-button-prev']}>
                            <i className={styles['ri-arrow-left-s-line']}></i>
                        </div>

                        <div className={styles['swiper-button-next']}>
                            <i className={styles['ri-arrow-right-s-line']}></i>
                        </div>

                        {/* Card Slider  pagination*/}
                        <div className={styles['swiper-pagination']}></div>

                    </div>



                </div>
                {/*cs = card slider */}
                <div className='cs_services_button'>
                    <button type="button" onClick={() => router.push('/services')}>Our Services</button>
                </div>
            </section>
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



        </>






    );
};