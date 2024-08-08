'use client'
import React from 'react'

//Styles 
import styles from './cta-container.module.css';


type Props = {}

export default function CTAComponent(props: Props) {
  
    return (
        <div className={styles['cta-container-component-body']}>

            <div className={styles['cta-description-container']}>
                <div className={styles['cta-title']}>
                    <p>READY TO GET STARTED? </p>
                </div>
                <p>
                Elevate your spaces with the touch of professional craftsmanship through our comprehensive range of services.
                Contact our team to secure a spot on our schedule and get an custom estimate tailored to your needs!
                </p>

                <div className={styles['cta-button-container']}>
                    <div className={styles.cta_component_button}>
                        <button type="button" onClick={() => router.push('/contact')}>GET A QUOTE</button>
                    </div>
                </div>
            </div>

        </div>
    )
};