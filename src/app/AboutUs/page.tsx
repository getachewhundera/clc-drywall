'use client'
import React from 'react'

//Styles 
import styles from './about-us.module.css';

// "Hero Section import"
import PageHeader from '../components/PageHeader/PageHeader'

//CTA Component Import
// import CTAComponent from '../components/cta-container/cta-container';

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
                                With over 20 years of hands-on experience in the drywall industry, we are a small, owner-operated company
                                dedicated to delivering exceptional quality and service. From drywall installation and finishing to intricate
                                texturing and seamless repairs, we handle every project with precision and care. Our expertise extends to both
                                residential and commercial projects, ensuring that each job, big or small, is completed to the highest standards.
                                We understand that our clients' homes and businesses are their most valuable assets, so we approach every task with
                                the responsibility and respect that our clients deserve.
                            </p>
                            <br></br>
                            <p>
                                What sets us apart is our commitment to personalized service. As a smaller company, we have the flexibility
                                to work closely with our clients, understanding their specific needs and tailoring our services accordingly.
                                Our hardworking team, led by our dedicated owner, takes pride in maintaining open communication and delivering
                                results that exceed expectations. Whether you need a single wall repaired or an entire home drywalled and painted,
                                you can trust us to provide a smooth, professional finish that enhances the beauty and value of your property.
                                Your satisfaction is our top priority, and we strive to build lasting relationships based on trust,
                                quality, and reliability. For a free estimate and consultation, give us a call any time!
                                No job is too big or small, and we take great pride in the work we do.
                            </p>
                            <br></br>
                            <ul>
                                <li><span>Owner-operated with 20+ years of experience :</span> Offering expert drywall
                                    services for both residential and commercial projects.
                                </li>
                                <br></br>
                                <li><span>Personalized service you can count on :</span>
                                 Tailored solutions that meet your specific needs, with a focus on quality and client satisfaction.
                                </li>
                                <br></br>
                                <li><span>Free estimates and consultations :</span> No job is too big or small—contact us anytime, and experience our commitment to excellence.
                                </li>
                            </ul>

                        </div>


                        <div className={`${styles['contact-button-container']}`}>
                            <div className={styles.contact_aboutpage_button}>
                                <button type="button" onClick={() => router.push('/contact')}>GET IN TOUCH</button>
                            </div>
                        </div>
                    </div>

                    <div className={` ${styles['aboutus-image-container']}`}>
                        <img src='./images/About-Page/logo.jpg' alt='' />
                    </div>
                </div>

                {/* CTA Component Import */}
                {/* <div className={styles['cta-message-container']}>
                    <CTAComponent />
                </div> */}
            </div>
        </div>


    )
};
