'use client'
import React, { useEffect, useState, useRef } from 'react';
//CSS Styling: 
import styles from './services.module.css';

//Component imports
import PageHeader from '../components/PageHeader/PageHeader'


// `app/services/page.tsx` is the UI for the `/services` URL



type Props = {}







export default function services(props: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);




  useEffect(() => {
    const figures = document.querySelectorAll(`.${styles.threeDCarouselContainer} figure`);
    const n = figures.length;
    const theta = 360 / n;

    figures.forEach((figure, i) => {
      const rotation = i * theta;
      (figure as HTMLElement).style.transform = `rotateY(${rotation}deg) translateZ(var(--apothem))`;
    });
  }, []);



  //Functions for onClick event for 3D Carousel Prev & Next 
  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + 6) % 6);
    rotateCarousel(currentIndex - 1);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 6);
    rotateCarousel(currentIndex + 1);
  };



  const rotateCarousel = (index: number) => {
    const carousel = document.querySelector(`.${styles.threeDCarouselContainer}`);
    if (carousel) {
      const theta = 360 / 6;
      const angle = index * -theta;
      (carousel as HTMLElement).style.transform = `translateZ(calc(-1 * var(--apothem))) rotateY(${angle}deg)`;
    }
  };







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
      <div className={styles['threeDcarousel-section']}>


        {/*FIRST SECTION'S DECORATIVE LINES*/}
        <div className={styles['sp-decorative-lines-container']}>
          <div className={styles['sp-decorativelines']}>
            <div className={styles['sp-decorativelinebase']}> </div>
            <div className={styles['sp-decorativelineoverlayed']}> </div>
          </div>
        </div>

        {/*FIRST SECTION'S TITLE*/}
        {/* sp = service page*/}
        <div className={styles['sp-first-section-title-container']}>
          <div className={styles['sp-first-section-title']}>
            <h2>Services</h2>
          </div>
        </div>



        <div className={styles.threeDCarouselWrapper}>
          <div className={styles['threeDCarouselContainer']}>

            {/* Service Offering #1 */}
            <figure id={styles.figure} className={styles['serviceOfferingOneAnimation']} >

              <img src='./servicesPageImages/drywallinstallation_1.jpg' alt='Drywall Installation' className={styles['serviceOfferingOneImage']} id={styles['threeDcarousel-images']} />

              <div className={styles['serviceOfferingTitleOne']} id={styles['title-text']}>
                <p>DRYWALL INSTALLATION AND REPAIR</p>
              </div>

              <div className={styles.row}>
                <div className={`${styles['right-description-column']} ${styles['column']}`}>
                  <div className={styles['serviceOfferingStatementOne']} id={styles['text']}>
                    <p>We offer a complete range of drywall services including drywall hanging,
                      drywall installation, drywall taping, drywall sanding, and drywall mudding.
                      Our skilled team is ready to handle every aspect of your drywall
                      project with expertise and precision.
                    </p>
                  </div>
                </div>

                <div className={`${styles['left-list-column']} ${styles['column']}`}>
                  <div className={styles['serviceOfferingListOne']} id={styles['list-text']}>
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

            </figure>



            {/* Service Offering #2 */}
            <figure id={styles.figure} className={styles['serviceOfferingTwoAnimation']} >

              <img src='./servicesPageImages/drywallmudding_2.jpg' alt='Drywall Finishing' id={styles['threeDcarousel-images']} className={styles['serviceOfferingTwoImage']} />

              <div className={styles['serviceOfferingTitleTwo']} id={styles['title-text']}>
                <p>UPGRADE YOUR WALLS</p>
              </div>

              <div className={styles.row}>
                <div className={`${styles['right-description-column']} ${styles['column']}`}>
                  <div className={styles['serviceOfferingStatementTwo']} id={styles['text']}>
                    <p>
                      Transform your space and say farewell to outdated popcorn ceilings with our
                      range of stylish ceiling upgrades. Experience an upgrade that elevates your
                      space with your choice of modern ceiling textures. Whether you desire a sleek,
                      smooth finish or a textured design, our options offer endless possibilities
                      for enhancing the aesthetics of your home.
                    </p>
                  </div>
                </div>

                <div className={`${styles['left-list-column']} ${styles['column']}`}>
                  <div className={styles['serviceOfferingListTwo']} id={styles['list-text']}>
                    <ul>
                      <li> CEILING TEXTURING </li>
                      <li> WALL TEXTURING </li>
                      <li> RESIDENTIAL TEXTURING </li>
                      <li> COMMERCIAL TEXTURING </li>
                    </ul>
                  </div>
                </div>
              </div>

            </figure>



            {/* Service Offering #3 */}
            <figure id={styles.figure} className={styles['serviceOfferingThreeAnimation']}>

              <img src='./servicesPageImages/ceiling_popcorn_removal_3.png' alt='Popcorn Removal' id={styles['threeDcarousel-images']} className={styles['serviceOfferingThreeImage']} />

              <div className={styles['serviceOfferingTitleThree']} id={styles['title-text']}>
                <p>ELEVATE YOUR SPACES </p>
              </div>

              <div className={styles.row}>
                <div className={`${styles['right-description-column']} ${styles['column']}`}>
                  <div className={styles['serviceOfferingStatementThree']} id={styles['text']}>
                    <p> Elevate your interior space with our professional interior painting services
                      that prioritize clean and precise workmanship. Our team takes utmost care to
                      protect your furnishings and surroundings, ensuring a hassle-free painting experience.
                      From meticulous preparation to flawless execution, we go above and beyond to create a
                      refreshed and vibrant atmosphere in your space.
                    </p>
                  </div>
                </div>

                <div className={`${styles['left-list-column']} ${styles['column']}`}>
                  <div className={styles['serviceOfferingListThree']} id={styles['list-text']}>
                    <ul>
                      <li> Interior Painting </li>
                      <li> Residential Painting </li>
                      <li> Office Painting </li>
                      <li> Commercial Painting </li>
                    </ul>
                  </div>
                </div>
              </div>

            </figure>




            {/* Service Offering #4 */}
            <figure id={styles.figure} className={styles['serviceOfferingFourAnimation']}>

              <img src='./servicesPageImages/repairproject1.1ac_4.jpg' alt='Drywall Repair' id={styles['threeDcarousel-images']} className={styles['serviceOfferingFourImage']} />

              <div className={styles['serviceOfferingTitleThree']} id={styles['title-text']}>
                <p>ELEVATE YOUR SPACES </p>
              </div>

              <div className={styles.row}>
                <div className={`${styles['right-description-column']} ${styles['column']}`}>
                  <div className={styles['serviceOfferingStatementFour']} id={styles['text']}>
                    <p> Elevate your interior space with our professional interior painting services
                      that prioritize clean and precise workmanship. Our team takes utmost care to
                      protect your furnishings and surroundings, ensuring a hassle-free painting experience.
                      From meticulous preparation to flawless execution, we go above and beyond to create a
                      refreshed and vibrant atmosphere in your space.
                    </p>
                  </div>
                </div>

                <div className={`${styles['left-list-column']} ${styles['column']}`}>
                  <div className={styles['serviceOfferingListFour']} id={styles['list-text']}>
                    <ul>
                      <li> Interior Painting </li>
                      <li> Residential Painting </li>
                      <li> Office Painting </li>
                      <li> Commercial Painting </li>
                    </ul>
                  </div>
                </div>
              </div>

            </figure>



            {/* Service Offering #5 */}
            <figure id={styles.figure} className={styles['serviceOfferingFiveAnimation']} >

              <img src='./servicesPageImages/knockdown-texture_5.jpg' alt='Texture Knockdown' id={styles['threeDcarousel-images']} className={styles['serviceOfferingFiveImage']} />

              <div className={styles['serviceOfferingTitleFive']} id={styles['title-text']}>
                <p>ELEVATE YOUR SPACES</p>
              </div>

              <div className={styles.row}>
                <div className={`${styles['right-description-column']} ${styles['column']}`}>
                  <div className={styles['serviceOfferingStatementFive']} id={styles['text']}>
                    <p> Elevate your interior space with our professional interior painting services
                      that prioritize clean and precise workmanship. Our team takes utmost care to
                      protect your furnishings and surroundings, ensuring a hassle-free painting experience.
                      From meticulous preparation to flawless execution, we go above and beyond to create a
                      refreshed and vibrant atmosphere in your space.
                    </p>
                  </div>
                </div>

                <div className={`${styles['left-list-column']} ${styles['column']}`}>
                  <div className={styles['serviceOfferingListFive']} id={styles['list-text']}>
                    <ul>
                      <li> Interior Painting  </li>
                      <li> Residential Painting   </li>
                      <li> Office Painting  </li>
                      <li> Commercial Painting </li>
                    </ul>
                  </div>
                </div>
              </div>

            </figure>



            {/* Service Offering #6 */}
            <figure id={styles.figure} className={styles['serviceOfferingSixAnimation']}>

              <img src='./servicesPageImages/interiorpainting_6.jpg' alt="Interior Painting" id={styles['threeDcarousel-images']} className={styles['serviceOfferingSixImage']} />

              <div className={styles['serviceOfferingTitleSix']} id={styles['title-text']}>
                <p>ELEVATE YOUR SPACES</p>
              </div>

              <div className={styles.row}>
                <div className={`${styles['right-description-column']} ${styles['column']}`}>
                  <div className={styles['serviceOfferingStatementSix']} id={styles['text']}>
                    <p> Elevate your interior space with our professional interior painting services
                      that prioritize clean and precise workmanship. Our team takes utmost care to
                      protect your furnishings and surroundings, ensuring a hassle-free painting experience.
                      From meticulous preparation to flawless execution, we go above and beyond to create a
                      refreshed and vibrant atmosphere in your space.
                    </p>
                  </div>
                </div>

                <div className={`${styles['left-list-column']} ${styles['column']}`}>
                  <div className={styles['serviceOfferingListSix']} id={styles['list-text']}>
                    <ul>
                      <li> Interior Painting  </li>
                      <li> Residential Painting   </li>
                      <li> Office Painting  </li>
                      <li> Commercial Painting </li>
                    </ul>
                  </div>
                </div>
              </div>

            </figure>

          </div>

          <div className={styles['carouselNav']}>
            <button className={styles['carouselNextButton']} onClick={handleNextClick}>Next</button>
            <button className={styles['carouselPrevButton']} onClick={handlePrevClick}>Prev</button>
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

        <div className={styles['customer-testiomonials-container']}>
          <div className={styles['single-customer-testimonial']}>
            <div className={styles['client-image']}>
              <img src='' alt='' />
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

  )
};
