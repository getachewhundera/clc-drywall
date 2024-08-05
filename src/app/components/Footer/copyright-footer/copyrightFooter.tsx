'use client'
import React from 'react'

//Styles 

import styles from './copyrightFooter.module.css'



const CopyrightFooter = () => {
    return (
        <div className={styles['copyright-footer-area']}>
            <div className={styles['secondary-footer-area']}>
                <div className="bottom-footer">
                    <p>
                        Copyright &copy;
                        2024 CLCDRYWALL. All
                        rights reserved
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CopyrightFooter; 