// `app/page.tsx` is the UI for the `/` URL
// `app/page.tsx` is the UI for the `/` URL
'use client'
import React from "react";
import styles from './styles/LandingPage.module.css';

type Props = {};


export default function Page(props: Props) {
    // Check if running in the browser environment
    if (typeof window !== 'undefined') {
        console.log(window.location.href);
    }

    const imagesLeft = [
        '/images/main1.jpg',
        '/images/nhimg1.jpeg',
        '/images/nhimg1.2.jpeg'
    ];

    const imagesRight = [
        '/images/LandingPageHeaderImages/main.jpg',
        '/images/LandingPageHeaderImages/nhimg1.1.jpeg',
        '/images/LandingPageHeaderImages/nhimg1.21.jpeg'
    ];

    return (
            <div className={styles.landing_page}>


                {/* 1st section Header banner*/}
                <div className={styles.banner_container}>

                    <div className={styles.splitScreen}>
                        <div className={styles.pane + " " + styles.leftPane}>
                            {imagesLeft.map((img, index) => (
                                <div key={index} className={styles.image + " " + styles[`img-${index}`]} style={{ backgroundImage: `url(${img})` }}></div>
                            ))}
                        </div>

                        <div className={styles.pane + " " + styles.rightPane}>
                            {imagesRight.map((img, index) => (
                                <div key={index} className={styles.image + " " + styles[`img-${index}`]} style={{ backgroundImage: `url(${img})` }}></div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.container}>
                        <div className={styles.banner_content}>
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