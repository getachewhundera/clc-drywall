// `app/page.tsx` is the UI for the `/` URL
// `app/page.tsx` is the UI for the `/` URL
'use client'
import React from "react";
import styles from './styles/LandingPage.module.css';
import { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

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



    return (
        <>
            <div className={styles.home_banner_area}>


                {/* 1st section Header banner*/}
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

            <section className={styles.lp_cs_container}>
                <div className={styles.card_container}>
                    <div className={styles.card_content}>
                        <div>
                            <article className={styles.card_article}>
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

                            <article className={styles.card_article}>
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

                            <article className={styles.card_article}>
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


                            <article className={styles.card_article}>
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


                            <article className={styles.card_article}>
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


                            <article className={styles.card_article}>
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
                </div>
            </section>

            <section id={styles['mpContainers']}>

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


        </>






    );
};