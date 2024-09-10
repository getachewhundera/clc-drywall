// `app/page.tsx` is the UI for the `/` URL
'use client'
import React, { useState, useEffect, useRef } from 'react';
import styles from './styles/LandingPage.module.css';
import { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import "@fontsource/fjalla-one";
import "@fontsource/source-sans-pro";

// import Swiper core and required modules
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import 'boxicons/css/boxicons.min.css';



type Props = {
    showHeading?: boolean;
}


// interface ImageProps {
//     src: string | StaticImageData;
//     alt: string;
// }


export default function Page({ showHeading = true }: Props) {
    const router = useRouter();
    const swiperRef = useRef<Swiper | null>(null);

    //`useState` hook initialized to 'all' as default for the filterable portfolio
    const [selectedCategory, setSelectedCategory] = useState('all');



    // const imagesLeft: ImageProps[] = [
    //     { src: '/images/LandingPageHeaderImages/main1.jpg', alt: "Left main image" },
    //     { src: '/images/LandingPageHeaderImages/nhimg1.jpeg', alt: "Left header image" },
    //     { src: '/images/LandingPageHeaderImages/nhimg1.2.jpeg', alt: "Left another header image" }
    // ];

    // const imagesRight: ImageProps[] = [
    //     { src: '/images/LandingPageHeaderImages/main.jpg', alt: "Right main image" },
    //     { src: '/images/LandingPageHeaderImages/nhimg1.1.jpeg', alt: "Right header image" },
    //     { src: '/images/LandingPageHeaderImages/nhimg1.21.jpeg', alt: "Right another header image" }
    // ];


    // Images to be used in the left pane
    const imagesLeft: string[] = [
        '/images/landing-page/banner-images-LandingPage/main1.jpg',
        '/images/landing-page/banner-images-LandingPage/nhimg1.jpeg',
        '/images/landing-page/banner-images-LandingPage/nhimg1.2.jpeg'
    ];
    // const imagesLeft: ImageProps[] = [
    //     { src: '/images/LandingPageHeaderImages/main1.jpg', alt: "main image" },
    //     { src: '/images/LandingPageHeaderImages/nhimg1.jpeg', alt: "header image" },
    //     { src: '/images/LandingPageHeaderImages/nhimg1.2.jpeg', alt: "another header image" }
    // ];

    // Images for the right pane
    const imagesRight: string[] = [
        '/images/landing-page/banner-images-LandingPage/main.jpg',
        '/images/landing-page/banner-images-LandingPage/nhimg1.1.jpeg',
        '/images/landing-page/banner-images-LandingPage/nhimg1.21.jpeg'
    ];



    //initialized after component is rendered
    useEffect(() => {
        const swiperInstance = new Swiper('.mySwiper', {
            modules: [Navigation, Pagination],
            //   Default parameters
            slidesPerView: 3,
            spaceBetween: 30,
            slidesPerGroup: 1,
            loop: false,
            // Optional parameters
            direction: 'horizontal',
            grabCursor: true,
            navigation: {
                nextEl: `.${styles.nextnavigationArrow}`, 
                prevEl: `.${styles.prevnavigationArrow}`, 
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
                dynamicBullets: true,
                dynamicMainBullets: 2,
            },
            // Responsive breakpoints
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                // when window width is >= 640px
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                // when window width is >= 1024px
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
            },
        });
        swiperRef.current = swiperInstance;
    }, []);



    /**------Filterable Portfolio------**/
    //event handler funtion for `handleCategoryClick` 
    //category associated with the clicked button is passed (i.e 'all', 'residential', etc. )
    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
    };


    //funtions for the handle click events for Card Slider Navigation arrows
    const handlePrevClick = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    };

    const handleNextClick = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    };

    //object for filterable portfolio
    const portfolioItems = [
        { id: 1, category: 'residential',
            src: 
            [
                './images/landing-page/filterable-portfolio-images/residential/before-and-after-full-project/project1/basement-1-mudded.installed-sep19.2023.jpg',
                './images/landing-page/filterable-portfolio-images/residential/before-and-after-full-project/project1/basement-2-complete-sep19.2023.residential.drywall.finished.product.jpg'
            ] 
        },
        { id: 2, category: 'commercial', src: '' },
        { id: 3, category: 'repair', src: './images/4.jpg.webp' },
    ];

    //filtering logic. creates "new array"
    const filteredItems = portfolioItems.filter(
        item => selectedCategory === 'all' || item.category === selectedCategory
    );







    return (
        <div className={`${styles.LandingPageBody}`} >
            {/* START of Hero Section on Landing Page */}
            <div className={styles.home_banner_area}>
                <div className={styles['banner_container']}>
                    <div className={styles['banner_inner']}>

                        <div className={styles.pane + " " + styles['left-pane']}>
                            {imagesLeft.map((img, index) => (
                                <div key={index} className={styles.image + " " + styles[`img-${index}`]} style={{ backgroundImage: `url(${img})` }}></div>
                            ))}
                        </div>

                        <div className={styles.pane + " " + styles['right-pane']}>
                            {imagesRight.map((img, index) => (
                                <div key={index} className={styles.image + " " + styles[`img-${index}`]} style={{ backgroundImage: `url(${img})` }}></div>
                            ))}
                        </div>
                        {/* 
                        <div className={styles.container}>
                            <div className={styles['banner_content']}>
                                <span>CLC DRYWALL LLC</span>
                                <h3>Where Quality
                                    <br />
                                    Meets
                                    <br />
                                    Craftsmanship.
                                </h3>
                                <div className={styles.headerContactUsButton}>
                                    <button type="button" id={styles.mainPageContactUsButton} onClick={() => router.push('/contactus')}>
                                        Get A Quote
                                    </button>
                                </div>
                            </div>
                        </div> */}

                    </div>
                </div>
            </div>
            {/* END of Hero Section on Landing Page */}




            {/*------ START: CARD SLIDER ANIMATION SERVICES SECTION ------*/}
            {/* lp_cs = landing page card slider */}
            <div className={styles['landing_page_cs_animation_section']}>
                {/* <div className={styles['decorative-lines-container']}>
                    <div className={styles.decorativelines}>
                        <div className={styles.decorativelinebase}> </div>
                        <div className={styles.decorativelineoverlayed}> </div>
                    </div>
                </div> */}

                <div className={styles['lp-cs-section-title-container']}>
                    <div className={styles['lp_cs_section_title']}>
                        <h2>Services</h2>
                    </div>
                </div>


                <div className={styles['services-statement']}>
                    <p>"Our comprehensive range of services covers every aspect of drywall and painting,
                        from installation and finishing to repairs and texturing. Whether you're working on a
                        residential or commercial project, our skilled team delivers exceptional results tailored to your needs.
                        Explore our featured services below, and discover even more options to transform your space."
                    </p>
                </div>
                <div className={styles['card-slider-row']}>
                    <div className={styles.prevnavigationArrow} onClick={handlePrevClick}>
                        <i className='bx bx-chevron-left'></i>
                    </div>

                    <div className={`swiper mySwiper ${styles['lp-cs-container']}`} ref={swiperRef} >
                        <div className={`swiper-wrapper ${styles['card-container']}`}>
                            <article className={`swiper-slide ${styles['card-article']}`}>
                                <div className={styles.card_image}>
                                    <img src="./images/landing-page/Card_Slider_LandingPage/drywall-Installation.jpg" alt="Image of Drywall Board Installation" />
                                </div>

                                <div className={styles.card_data}>
                                    <h3 className={styles.card_name}> Drywall Installation </h3>
                                    <p className={styles.card_description}>
                                        Precision drywall installation for flawless, ready-to-finish walls and ceilings.
                                    </p>
                                    <Link href="/services" className={styles.card_button}>View More</Link>
                                </div>
                            </article>

                            <article className={`swiper-slide ${styles['card-article']}`}>
                                <div className={styles.card_image}>
                                    <img src="./images/landing-page/Card_Slider_LandingPage/tapingandmudding.jpg" alt="Image of Drywall Board Installation" />
                                </div>

                                <div className={styles.card_data}>
                                    <h3 className={styles.card_name}>Drywall Finishing</h3>
                                    <p className={styles.card_description}>
                                        Seamless taping and finishing for smooth, paint-ready surfaces.
                                    </p>
                                    <Link href="/" className={styles.card_button}>View More</Link>
                                </div>
                            </article>

                            <article className={`swiper-slide ${styles['card-article']}`}>
                                <div className={styles.card_image}>
                                    <img src="./images/landing-page/Card_Slider_LandingPage/knockdown-texture.png" alt="Image of Drywall Board Installation" />

                                </div>

                                <div className={styles.card_data}>
                                    <h3 className={styles.card_name}> Drywall Texturing​ </h3>
                                    <p className={styles.card_description}>
                                        Expert texturing to add depth and character to your walls and ceilings.
                                    </p>
                                    <Link href="/" className={styles.card_button}>View More</Link>
                                </div>
                            </article>

                            <article className={`swiper-slide ${styles['card-article']}`}>
                                <div className={styles.card_image}>
                                    <img src="./images/landing-page/Card_Slider_LandingPage/repairproject1.1bc.jpg" alt="Image of a wall with damage to the drywall" />
                                </div>

                                <div className={styles.card_data}>
                                    <h3 className={styles.card_name}> Drywall Repair/Patchwork </h3>
                                    <p className={styles.card_description}>
                                        Quick, seamless repairs for flawless wall restoration.
                                    </p>
                                    <Link href="/" className={styles.card_button}>View More</Link>
                                </div>
                            </article>

                            <article className={`swiper-slide ${styles['card-article']}`}>
                                <div className={styles.card_image}>
                                    <img src="./images/landing-page/Card_Slider_LandingPage/popcorn-removal.jpeg" alt="Image of a popcorn ceiling being removed" />
                                </div>

                                <div className={styles.card_data}>
                                    <h3 className={styles.card_name}> Popcorn Ceiling Removal </h3>
                                    <p className={styles.card_description}>
                                        Safe and efficient removal for modern, smooth ceilings.
                                    </p>
                                    <Link href="/" className={styles.card_button}>View More</Link>
                                </div>
                            </article>


                            <article className={`swiper-slide ${styles['card-article']}`}>
                                <div className={styles.card_image}>
                                    <img src="./images/landing-page/Card_Slider_LandingPage/interiorpainting.ss.png" alt="Image of a Finished and painted wall that represents a service offering for interior and exterior painting services" />
                                </div>

                                <div className={styles.card_data}>
                                    <h3 className={styles.card_name}> Interior/Exterior Painting </h3>
                                    <p className={styles.card_description}>
                                        Transforming spaces with precision painting, inside and out.
                                    </p>
                                  
                                    <Link href="/" className={styles.card_button}>View More</Link>
                                </div>
                            </article>
                        </div>
                    </div>


                    <div className={styles.nextnavigationArrow} onClick={handleNextClick}>
                        <i className='bx bx-chevron-right'></i>
                    </div>
                </div>


                {/* Pagination */}
                <div className={styles['pagination-bullets-container']}>
                    <div className={`swiper-pagination ${styles['swiper-pagination']}`}></div>
                </div>


                {/*cs = card slider */}
                <div className={styles['cs-services-button-container']}>
                    <div className={styles.cs_services_button}>
                        <button type="button" onClick={() => router.push('/services')}>Our Services</button>
                    </div>
                </div>

            </div>

                 {/*------ END: CARD SLIDER ANIMATION SERVICES SECTION ----*/}





            {/* START of FIXED CARDS DISPLAY SECTION */}
            <div className={styles['fixed-cards-section-main-container']}>
                <div className={styles['fixed-cards-section-title-container']}>
                    <div className={styles['fixed-cards-section-title']}>
                        <h2>EXPERT SOLUTIONS YOU CAN RELY ON</h2>
                    </div>
                </div>
                <div className={styles['fixed-cards-container']}>
                    <div className={styles['cards-container']}>
                        <div className={styles['card-1']}>
                            <img src='./images/landing-page/Fixed_Cards_LandingPage_Icons/veicon.png' alt='' />
                            <h2> Vast Experience </h2>
                        </div>
                        <div className={styles['card-2']}>
                            <img src='./images/landing-page/Fixed_Cards_LandingPage_Icons/pwicon.png' alt='' />
                            <h2> Professional Team </h2>
                        </div>
                        <div className={styles['card-3']}>
                            <img src='./images/landing-page/Fixed_Cards_LandingPage_Icons/nshandshake.png' alt='' />
                            <h2> Reliable Service </h2>
                        </div>
                        <div className={styles['card-4']}>
                            <img src='./images/landing-page/Fixed_Cards_LandingPage_Icons/dqwicon.png' alt='' />
                            <h2> Quality Work </h2>
                        </div>
                    </div>
                </div>
            </div>
            {/* END of FIXED CARDS DISPLAY SECTION */}



            {/* START of RECENT PROJECTS DISPLAY SECTION. Filterable Portfolio */}

            <div className={styles['lp-recent-projects-section-main-container']}>

                <div className={styles['lp-projects-decorative-lines-container']}>
                    <div className={styles['lp-projects-decorativelines']}>
                        <div className={styles['lp-projects-decorativelinebase']}> </div>
                        <div className={styles['lp-projects-decorativelineoverlayed']}> </div>
                    </div>
                </div>


                <div className={styles['recent-projects-section-title-container']}>
                    <div className={styles['recent-projects-section-title']}>
                        <h2>RECENT PROJECTS</h2>
                    </div>
                </div>


                <div className={styles['filterable-portfolio-container']}>
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

                <div className={styles['recent-projects-button-container']}>
                    <div className={styles['recent-projects-button']}>
                        <button type="button" onClick={() => router.push('/projects')}>View All</button>
                    </div>
                </div>

            </div>
            {/* END of RECENT PROJECTS DISPLAY SECTION */}
        </div>
    );
};