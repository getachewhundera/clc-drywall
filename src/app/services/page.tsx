'use client'
import React, { useEffect, useState} from 'react'; 

//CSS Styling:
import styles from './services.module.css';

//Component imports
import PageHeader from '../components/PageHeader/PageHeader'

import 'boxicons/css/boxicons.min.css';



type Props = {}



export default function services(props: Props) {


    // React state to manage the current position
    const [currentPosition, setCurrentPosition] = useState(4); // Starts with the 4th item (#item4) as center "card"
  
  
    // Function to handle rotating the carousel
    function rotateCarousel(direction: number) {
        const totalItems = 7; // Total number of items
        let newPosition = (currentPosition + direction) % totalItems;
  
        if (newPosition <= 0) {
            newPosition += totalItems;
        }

        setCurrentPosition(newPosition); 
  
  
        // updates the CSS variable to reflect the new position
        document.documentElement.style.setProperty('--position', newPosition.toString());
    }

//sets intial position of the items on component mount
  useEffect(() => {
    //setting the initial css variable for the position; 
    document.documentElement.style.setProperty('--position', currentPosition.toString());
  }, [currentPosition]);
  

    return (
        <div className={styles['ServicePageBody']}>

            {/*----HORIZONTAL SCROLLING BAR---*/}
            <div className={styles['scrollingItemsContainer']}>
                <div className={styles['horizontalScrollingItems']}>
                    <div className={styles['horizontal-scrolling-items']}>
                        <div className={styles['item-container']}>
                            <div className={styles['item']}>Drywall Installation</div>
                            <div className={styles['item-spacer']}>.</div>
                        </div>
                        <div className={styles['item-container']}>
                            <div className={styles['item']}>Drywall Finishing</div>
                            <div className={styles['item-spacer']}>.</div>
                        </div>
                        <div className={styles['item-container']}>
                            <div className={styles['item']}>Popcorn Removal</div>
                            <div className={styles['item-spacer']}>.</div>
                        </div>
                        <div className={styles['item-container']}>
                            <div className={styles['item']}>Drywall Repair</div>
                            <div className={styles['item-spacer']}>.</div>
                        </div>
                        <div className={styles['item-container']}>
                            <div className={styles['item']}>Texture Knockdown</div>
                            <div className={styles['item-spacer']}>.</div>
                        </div>
                        <div className={styles['item-container']}>
                            <div className={styles['item']}>Interior Painting</div>
                            <div className={styles['item-spacer']}>.</div>
                        </div>

                        <div className={styles['horizontal-scrolling-items']}>
                            <div className={styles['item-container']}>
                                <div className={styles['item']}>Drywall Installation</div>
                                <div className={styles['item-spacer']}>.</div>
                            </div>
                            <div className={styles['item-container']}>
                                <div className={styles['item']}>Drywall Finishing</div>
                                <div className={styles['item-spacer']}>.</div>
                            </div>
                            <div className={styles['item-container']}>
                                <div className={styles['item']}>Popcorn Removal</div>
                                <div className={styles['item-spacer']}>.</div>
                            </div>
                            <div className={styles['item-container']}>
                                <div className={styles['item']}>Drywall Repair</div>
                                <div className={styles['item-spacer']}>.</div>
                            </div>
                            <div className={styles['item-container']}>
                                <div className={styles['item']}>Texture Knockdown</div>
                                <div className={styles['item-spacer']}>.</div>
                            </div>
                            <div className={styles['item-container']}>
                                <div className={styles['item']}>Interior Painting</div>
                                <div className={styles['item-spacer']}>.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* PageHeader IMPORT*/}
            <div className={styles['services-banner-area']}>
                <PageHeader title='Services' navTitle='services' />
            </div>



            {/* 3D CAROUSEL SECTION*/}
            <div className={styles['threeDCarouselSection']}>

                <div className={styles['threeDCarouselContainer']}>
                    <div className={styles['threeDCarouselWrapper']}>

                        {/* Service Offering #1 */}
                        <div className={styles['item']} id={styles['item1']}>
                            <div className={styles['img-container']}>
                                <img src='./images/services-page/3dcarousel-images/drywall-repair.jpeg' alt='Drywall Repair' id={styles['item-one-image']} />
                            </div>

                            <h3 id={styles['title']} className={styles['title-one']}> DRYWALL REPAIR </h3>

                            <div className={styles['row']}>
                                <div className={`${styles['left-description-column']}`} id={styles['left-column-one']}>
                                    <p>We offer a complete range of drywall services including drywall hanging,
                                        drywall installation, drywall taping, drywall sanding, and drywall mudding.
                                        Our skilled team is ready to handle every aspect of your drywall
                                        project with expertise and precision.
                                    </p>
                                </div>

                                <div className={`${styles['right-list-column']}`} id={styles['right-column-one']}>
                                    <ul>
                                        <li>Residential Drywall</li>
                                        <li>Drywall Hanging</li>
                                        <li>Drywall Texturing</li>
                                        <li>Commercial Drywall</li>
                                        <li>Drywall Taping</li>
                                        <li>Drywall Installation</li>
                                        <li>Drywall Finishing</li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        {/* Service Offering #2 */}
                        <div className={styles['item']} id={styles['item2']}>
                            <div className={styles['img-container']}>
                                <img src='./images/services-page/3dcarousel-images/knockdown-texture.jpg' alt='Texture Knockdown' id={styles['item-two-image']} />
                            </div>

                            <h3 id={styles['title']} className={styles['title-two']}> Texture Knockdown</h3>

                            <div className={styles['row']}>
                                <div className={`${styles['left-description-column']}`} id={styles['left-column-two']}>
                                    <p>We offer a complete range of drywall services including drywall hanging,
                                        drywall installation, drywall taping, drywall sanding, and drywall mudding.
                                        Our skilled team is ready to handle every aspect of your drywall
                                        project with expertise and precision.
                                    </p>
                                </div>

                                <div className={`${styles['right-list-column']}`} id={styles['right-column-two']}>
                                    <ul>
                                        <li>Residential Drywall</li>
                                        <li>Drywall Hanging</li>
                                        <li>Drywall Texturing</li>
                                        <li>Commercial Drywall</li>
                                        <li>Drywall Taping</li>
                                        <li>Drywall Installation</li>
                                        <li>Drywall Finishing</li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        {/* Service Offering #3 */}
                        <div className={styles['item']} id={styles['item3']}>
                            <div className={styles['img-container']}>
                                <img src='./images/services-page/3dcarousel-images/popcorn-removal.jpeg' alt='Popcorn Removal' id={styles['item-three-image']} />
                            </div>

                            <h3 id={styles['title']} className={styles['title-three']}> Popcorn Removal</h3>

                            <div className={styles['row']}>
                                <div className={`${styles['left-description-column']}`} id={styles['left-column-three']}>
                                    <p>We offer a complete range of drywall services including drywall hanging,
                                        drywall installation, drywall taping, drywall sanding, and drywall mudding.
                                        Our skilled team is ready to handle every aspect of your drywall
                                        project with expertise and precision.
                                    </p>
                                </div>

                                <div className={`${styles['right-list-column']}`} id={styles['right-column-three']}>
                                    <ul>
                                        <li>Residential Drywall</li>
                                        <li>Drywall Hanging</li>
                                        <li>Drywall Texturing</li>
                                        <li>Commercial Drywall</li>
                                        <li>Drywall Taping</li>
                                        <li>Drywall Installation</li>
                                        <li>Drywall Finishing</li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        {/* Service Offering #4 */}
                        <div className={styles['item']} id={styles['item4']}>

                            <div className={styles['img-container']}>
                                <img src='./images/services-page/3dcarousel-images/drywall-installation.jpeg' alt='Drywall Installation' id={styles['item-four-image']} />
                            </div>

                            <h3 id={styles['title']} className={styles['title-four']}> DRYWALL INSTALLATION </h3>

                            <div className={styles['row']}>
                                <div className={`${styles['left-description-column']}`} id={styles['left-column-four']}>
                                    <p>We offer a complete range of drywall services including drywall hanging,
                                        drywall installation, drywall taping, drywall sanding, and drywall mudding.
                                        Our skilled team is ready to handle every aspect of your drywall
                                        project with expertise and precision.
                                    </p>
                                </div>

                                <div className={`${styles['right-list-column']}`} id={styles['right-column-four']}>
                                    <ul>
                                        <li>Residential Drywall</li>
                                        <li>Drywall Hanging</li>
                                        <li>Drywall Texturing</li>
                                        <li>Commercial Drywall</li>
                                        <li>Drywall Taping</li>
                                        <li>Drywall Installation</li>
                                        <li>Drywall Finishing</li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        {/* Service Offering #5 */}
                        <div className={styles['item']} id={styles['item5']}>

                            <div className={styles['img-container']}>
                                <img src='./images/services-page/3dcarousel-images/finished-drywall.jpeg' alt='Drywall Finishing' id={styles['item-five-image']} />
                            </div>

                            <h3 id={styles['title']} className={styles['title-five']}> Drywall Finishing </h3>

                            <div className={styles['row']}>
                                <div className={`${styles['left-description-column']}`} id={styles['left-column-five']}>
                                    <p>We offer a complete range of drywall services including drywall hanging,
                                        drywall installation, drywall taping, drywall sanding, and drywall mudding.
                                        Our skilled team is ready to handle every aspect of your drywall
                                        project with expertise and precision.
                                    </p>
                                </div>

                                <div className={`${styles['right-list-column']}`} id={styles['right-column-five']}>
                                    <ul>
                                        <li>Residential Drywall</li>
                                        <li>Drywall Hanging</li>
                                        <li>Drywall Texturing</li>
                                        <li>Commercial Drywall</li>
                                        <li>Drywall Taping</li>
                                        <li>Drywall Installation</li>
                                        <li>Drywall Finishing</li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        {/* Service Offering #6 */}
                        <div className={styles['item']} id={styles['item6']}>

                            <div className={styles['img-container']}>
                                <img src='./images/services-page/3dcarousel-images/painting.jpeg' alt="Interior Painting" id={styles['item-six-image']} />
                            </div>

                            <h3 id={styles['title']} className={styles['title-six']}> Interior Painting </h3>

                            <div className={styles['row']}>
                                <div className={`${styles['left-description-column']}`} id={styles['left-column-six']}>
                                    <p>We offer a complete range of drywall services including drywall hanging,
                                        drywall installation, drywall taping, drywall sanding, and drywall mudding.
                                        Our skilled team is ready to handle every aspect of your drywall
                                        project with expertise and precision.
                                    </p>
                                </div>

                                <div className={`${styles['right-list-column']}`} id={styles['right-column-six']}>
                                    <ul>
                                        <li>Residential Drywall</li>
                                        <li>Drywall Hanging</li>
                                        <li>Drywall Texturing</li>
                                        <li>Commercial Drywall</li>
                                        <li>Drywall Taping</li>
                                        <li>Drywall Installation</li>
                                        <li>Drywall Finishing</li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        {/* Service Offering #7 */}
                        <div className={styles['item']} id={styles['item7']}>

                            <div className={styles['img-container']}>
                                <img src='./images/services-page/3dcarousel-images/painting.jpeg' alt="Exterior Painting" id={styles['item-seven-image']} />
                            </div>

                            <h3 id={styles['title']} className={styles['title-seven']}> Exterior Painting </h3>

                            <div className={styles['row']}>
                                <div className={`${styles['left-description-column']}`} id={styles['left-column-seven']}>
                                    <p>We offer a complete range of drywall services including drywall hanging,
                                        drywall installation, drywall taping, drywall sanding, and drywall mudding.
                                        Our skilled team is ready to handle every aspect of your drywall
                                        project with expertise and precision.
                                    </p>
                                </div>

                                <div className={`${styles['right-list-column']}`} id={styles['right-column-seven']}>
                                    <ul>
                                        <li>Residential Drywall</li>
                                        <li>Drywall Hanging</li>
                                        <li>Drywall Texturing</li>
                                        <li>Commercial Drywall</li>
                                        <li>Drywall Taping</li>
                                        <li>Drywall Installation</li>
                                        <li>Drywall Finishing</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
      
                    <div className={styles['carouselNav']}>
                        <button onClick={() => rotateCarousel(-1)}>Previous</button>
                        <button onClick={() => rotateCarousel(1)}>Next</button>
                    </div>
                </div>



            </div>












            {/*STATS SECTION*/}
            <div className={styles['stats-section-container']}>
                <div className={styles['main-columns']}>
                    <div className={styles['left-column']}>
                        <div className={styles['stats-section-img']}>
                            <img src='./images/services-page/services-page-stats-section-image/truck.jpg' alt='' />
                        </div>


                    </div>


                    <div className={styles['right-column']}>


                        <div className={styles['title']}>
                            <h2>PROVIDING PERSONALIZED AND HIGH QUALITY SERVICE</h2>
                        </div>


                        <div className={styles['informational-text']}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Integer sit amet erat pretium, feugiat magna sit amet, aliquet urna.
                                Cras quis metus ut dolor facilisis dapibus porttitor eget risus.
                                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                                Maecenas eget purus ac arcu egestas molestie.
                            </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Integer sit amet erat pretium, feugiat magna sit amet, aliquet urna.
                                Cras quis metus ut dolor facilisis dapibus porttitor eget risus.
                                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                                Maecenas eget purus ac arcu egestas molestie.
                            </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Integer sit amet erat pretium, feugiat magna sit amet, aliquet urna.
                                Cras quis metus ut dolor facilisis dapibus porttitor eget risus.
                                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                                Maecenas eget purus ac arcu egestas molestie.
                            </p>
                        </div>


                        <div className={styles['stats-container-grid']}>
                            <div className={`${styles['number']} ${styles['number-of-customers']}`}>
                                <h5>
                                    <span className={styles['counter']}>3</span>K+
                                </h5>
                                <p>happy customer</p>
                            </div>
                            <div className={`${styles['number']} ${styles['projects-completed']}`}>
                                <h5>
                                    <span className={styles['counter']}>2</span>K+
                                </h5>
                                <p>Project Done</p>
                            </div>
                            <div className={`${styles['number']} ${styles['average-rating']}`}>
                                <h5>
                                    <span className={styles['counter']}>9</span>/
                                    <span className={styles['counter']}>10</span>
                                </h5>
                                <p>Average Rating</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >






            {/*CUSTOMER REVIEWS SECTION*/}
            <div className={styles['customer-reviews-section-container']}>


                {/*DECORATIVE LINES*/}
                <div className={styles['sp-decorative-lines-container']}>
                    <div className={styles['sp-decorativelines']}>
                        <div className={styles['sp-decorativelinebase']}> </div>
                        <div className={styles['sp-decorativelineoverlayed']}> </div>
                    </div>
                </div>


                {/*TITLE*/}
                {/* sp = service page*/}
                <div className={styles['sp-first-section-title-container']}>
                    <div className={styles['sp-first-section-title']}>
                        <h2>Customer Reviews </h2>
                    </div>
                </div>








                <div className={`swiper ${styles['swiper']}`}>


                    <div className={`swiper-wrapper ${styles['swiper-wrapper']}`}>






                        <div className={`swiper-slide ${styles['swiper-slide']}`}>
                            <div className={styles['single-customer-testiomonial-container']}>
                                <div className={styles['single-customer-testimonial']}>
                                    <div className={styles['client-image']}>
                                        <img src='./images/services-page/customer-testimonials-images/client-image.png' alt='' />
                                    </div>


                                    <div className={styles['description']}>
                                        <h4>Chris Smith </h4>
                                        <p className={styles['designation']}>customer</p>
                                        <p> “Review, review, Review, review, Review, review, Review,
                                            review, Review, review, Review, review, Review, review,
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>




                        <div className={`swiper-slide ${styles['swiper-slide']}`}>
                            <div className={styles['single-customer-testiomonial-container']}>
                                <div className={styles['single-customer-testimonial']}>
                                    <div className={styles['client-image']}>
                                        <img src='./images/services-page/customer-testimonials-images/client-image.png' alt='' />
                                    </div>


                                    <div className={styles['description']}>
                                        <h4>Chris Smith </h4>
                                        <p className={styles['designation']}>customer</p>
                                        <p> “Review, review, Review, review, Review, review, Review,
                                            review, Review, review, Review, review, Review, review,
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>




                        <div className={`swiper-slide ${styles['swiper-slide']}`}>
                            <div className={styles['single-customer-testiomonial-container']}>
                                <div className={styles['single-customer-testimonial']}>
                                    <div className={styles['client-image']}>
                                        <img src='./images/services-page/customer-testimonials-images/client-image.png' alt='' />
                                    </div>


                                    <div className={styles['description']}>
                                        <h4>Chris Smith </h4>
                                        <p className={styles['designation']}>customer</p>
                                        <p> “Review, review, Review, review, Review, review, Review,
                                            review, Review, review, Review, review, Review, review,
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>




                        <div className={`swiper-slide ${styles['swiper-slide']}`}>
                            <div className={styles['single-customer-testiomonial-container']}>
                                <div className={styles['single-customer-testimonial']}>
                                    <div className={styles['client-image']}>
                                        <img src='./images/services-page/customer-testimonials-images/client-image.png' alt='' />
                                    </div>


                                    <div className={styles['description']}>
                                        <h4>Chris Smith </h4>
                                        <p className={styles['designation']}>customer</p>
                                        <p> “Review, review, Review, review, Review, review, Review,
                                            review, Review, review, Review, review, Review, review,
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>




                    </div>




                    {/* Pagination */}
                    <div className={`swiper-pagination ${styles['swiper-pagination']}`}></div>




                    {/*--Naviagtion Buttons--*/}




                    <div className={`swiper-button-prev ${styles['swiper-button-prev']}`}></div>
                    <div className={`swiper-button-next ${styles['swiper-button-next']}`}></div>




                </div>




            </div >
        </div >


    )
};
