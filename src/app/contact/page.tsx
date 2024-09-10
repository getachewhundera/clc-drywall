// `app/contactus/page.tsx` is the UI for the `/contactUs` URL
'use client'
// `app/projects/page.tsx` is the UI for the `/projects` URL
import React from 'react';
//CSS Styling: 
import styles from './contact.module.css';

//Component imports
import PageHeader from '../components/PageHeader/PageHeader'



type Props = {}


export default function contact(props: Props) {


    return (
        <div className={styles['ContactPageBody']}>

            {/* PageHeader IMPORT*/}
            <div className={styles['contact-banner-area']}>
                <PageHeader title='Contact' navTitle='contact' />
            </div>

            <div className={styles['container']}>
                <div className={styles['formWrapper']}>
                    <div className={styles['formHeader']}>
                        <h1>Contact Us</h1>
                        <p>Share some details about your project. We’ll respond as quickly as possible.</p>
                        <p>Fill up the form below to send us a message.</p>
                    </div>
                    <div className={styles['formBody']}>
                        <form action="https://api.web3forms.com/submit" method="POST" id="form">
                            <input type="hidden" name="access_key" value="d770e801-931b-4d40-bade-e332fa82b8d9" />
                            <input type="hidden" name="subject" value="New Submission From CLC WEBSITE Contact Form" />
                            <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

                            <div className={styles['formGroup']}>
                                <div className={styles['formControl']}>
                                    <label htmlFor="fname">First Name</label>
                                    <input type="text" name="name" id="first_name"  required />
                                </div>
                                <div className={styles['formControl']}>
                                    <label htmlFor="lname">Last Name</label>
                                    <input type="text" name="last_name" id="lname"  required />
                                </div>
                            </div>

                            <div className={styles['formGroup']}>
                                <div className={styles['formControl']}>
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" name="email" id="email" required />
                                </div>
                                <div className={styles['formControl']}>
                                    <label htmlFor="phone">Phone Number</label>
                                    <input type="text" name="phone" id="phone" required />
                                </div>
                            </div>

                            <div className={styles['formControl']}>
                                <label htmlFor="message">Your Message</label>
                                <textarea rows="5" name="message" id="message" placeholder="Your Message" required></textarea>
                            </div>

                            <div className={styles['formControl']}>
                                <button type="submit">Send Message</button>
                            </div>
                            <p className={styles['formResult']} id="result"></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>



    )
};
