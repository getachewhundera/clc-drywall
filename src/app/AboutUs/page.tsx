'use client'
import React from 'react'

//Styles 
import styles from './about-us.module.css';

// "Hero Section import"
import PageHeader from '../components/PageHeader/PageHeader'

//CTA Component Import
import CTAComponent from '../components/cta-container/cta-container';

import { useRouter } from 'next/navigation';

type Props = {}

export default function AboutUs(props: Props) {
    const router = useRouter();





    return (
        <div className={styles['AboutPageBody']}>

            {/* PageHeader IMPORT*/}
            <div className={styles['about-banner-area']}>
                <PageHeader title='About' navTitle='about' />
            </div>
            <div className={styles['about-page-content']}>
                <div className={` ${styles['main-body-container']}`}>
                    <div className={styles['aboutus-description-container']}>
                        <div className={styles['aboutus-description']}>
                            <p>
                                We count on 20 years of experience in the field, and our goal is to serve our clients with
                                responsibility and high-quality work. Our client's satisfaction is our number one priority.
                            </p>
                            <br></br>
                            <br></br>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet erat pretium,
                                feugiat magna sit amet, aliquet urna. Cras quis metus ut dolor facilisis dapibus porttitor eget risus.

                            </p>
                        </div>


                        <div className={`${styles['contact-button-container']}`}>
                            <div className={styles.contact_aboutpage_button}>
                                <button type="button" onClick={() => router.push('/contact')}>GET IN TOUCH</button>
                            </div>
                        </div>
                    </div>

                    <div className={` ${styles['aboutus-image-container']}`}>
                        <img src='./images/LandingPageAboutUsImages/logo.jpg' alt='' />
                    </div>
                </div>

                {/* CTA Component Import */}
                <div className={styles['cta-message-container']}>
                    <CTAComponent />
                </div>
            </div>
        </div>


    )
};
