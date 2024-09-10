'use client'
// `app/projects/page.tsx` is the UI for the `/projects` URL
import React, { useState, useEffect, useRef } from 'react';

//CSS Styling: 
import styles from './projects.module.css';

//Component imports
import PageHeader from '../components/PageHeader/PageHeader'
import CTAComponent from '../components/cta-container/cta-container';

type Props = {}






export default function projects(props: Props) {
    //`useState` hook initialized to 'all' as default for the filterable portfolio
    const [selectedCategory, setSelectedCategory] = useState('all');


    /**------Filterable Portfolio------**/
    //event handler funtion for `handleCategoryClick` 
    //category associated with the clicked button is passed (i.e 'all', 'residential', etc. )
    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
    };


    //object for filterable portfolio
    const portfolioItems = [
        { id: 1, category: 'residential', src: './images/2.jpg.webp' },
        { id: 2, category: 'commercial', src: './images/3.jpg.webp' },
        { id: 3, category: 'repair', src: './images/4.jpg.webp' },
    ];

    //filtering logic. creates "new array"
    const filteredItems = portfolioItems.filter(
        item => selectedCategory === 'all' || item.category === selectedCategory
    );




  


    return (
        <div className={styles['ProjectsPageBody']}>

            {/* PageHeader IMPORT*/}
            <div className={styles['projects-banner-area']}>
                <PageHeader title='Projects' navTitle='projects' />
            </div>

            {/* START of RECENT PROJECTS DISPLAY SECTION. Filterable Portfolio */}

            <div className={styles['portfolio-main-container']}>


                <div className={styles['portfolio-wrapper']}>
                    <ul>
                        <li className={`${selectedCategory === 'all' ? 'active' : ''} ${styles['category']}`} data-filter="all" onClick={() => handleCategoryClick('all')}>All</li>
                        <li className={`${selectedCategory === 'residential' ? 'active' : ''} ${styles['category']}`} data-filter="residential" onClick={() => handleCategoryClick('residential')}>Residential</li>
                        <li className={`${selectedCategory === 'commercial' ? 'active' : ''} ${styles['category']}`} data-filter="commercial" onClick={() => handleCategoryClick('commercial')}>Commercial</li>
                        <li className={`${selectedCategory === 'repair' ? 'active' : ''} ${styles['category']}`} data-filter="repair" onClick={() => handleCategoryClick('repair')}>Repair</li>
                    </ul>

                    {/* mapping over "new array" (filteredItems) after items have been filtered through*/}
                    <div className={styles['item-display-container']}>
                        {filteredItems.map(item => (
                            <div key={item.id} className={styles['itemBox']}>
                                <img src={item.src} alt={item.category} />
                            </div>
                        ))}
                    </div>



                </div>



            </div>
            {/* END of RECENT PROJECTS DISPLAY SECTION */}

            <div className={styles['projects-page-ctacomponent']}>
                <CTAComponent />
            </div>




        </div>
    )
};
