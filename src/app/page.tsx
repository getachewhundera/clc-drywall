// `app/page.tsx` is the UI for the `/` URL
// `app/page.tsx` is the UI for the `/` URL
'use client'
import React from "react";
import styles from './styles/LandingPage.module.css';
import { StaticImageData } from "next/image";

type Props = {};

// Define your interface for handling images
interface ImageProps {
    src: string | StaticImageData;
    alt: string;
}


export default function Page(props: Props) {

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
        <div className={styles.landing_page}>


            {/* 1st section Header banner*/}
            <div className={styles['banner_container']}>

                <div className={styles['split-screen']}>
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
                            <button type="button" id={styles.mainPageContactUsButton}>
                                Get A Quote
                            </button>
                        </div>
                    </div>
                </div>


            </div>

            {/* 2nd section  */}





        </div>



    );
};