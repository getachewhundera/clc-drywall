import React from "react";
import Link from "next/link";

//Styles 
import styles from './PageHeader.module.css';


type Props = {
    title?: string;
    navTitle?: string;
};

//Secondary navigiation 
//location-based breadcrumb that directly takes you home page from other pages on the website. 

const PageHeader = ({ title = "About Us", navTitle = "About Us" }: Props) => {
    return (
        <div className={styles.heroBanner}>
            <div className={styles.container}>
                <h2>{title}</h2>
                <nav aria-label="breadcrumb" className={styles.bannerBreadcrumb}>
                    <ol className={styles.breadcrumb}>
                        <li className={styles.breadcrumbItem}>
                            <Link href="/">Home</Link>
                        </li>
                        <li className={styles.breadcrumbItem}>/</li>
                        
                        <li className={`${styles.breadcrumbItem} ${styles.active}`} aria-current="page">
                            {navTitle}
                        </li>
                    </ol>
                </nav>
            </div>
        </div>
    );
};

export default PageHeader;