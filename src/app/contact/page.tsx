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
        
      </div>  
    )
};
