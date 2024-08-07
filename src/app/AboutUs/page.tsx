import React from 'react'

//Styles 
import styles from './about-us.module.css';

// "Hero Section import"
import PageHeader from '../components/PageHeader/PageHeader'

type Props = {}

export default function AboutUs(props: Props) {





    return (
        <div className={styles['AboutPageBody']}>
            
            {/* PageHeader IMPORT*/}
            <div className={styles['about-banner-area']}>
                <PageHeader title='About' navTitle='about' />
            </div>


            <h1>Hello, This is the About Us Page!</h1>

        </div>


    )
};
