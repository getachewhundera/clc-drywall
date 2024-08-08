'use client'
// this section is only on the Home page and on the Services page
import Image from 'next/image'
import React, { useEffect, useState, useRef } from 'react';

import PageHeader from '../components/PageHeader/PageHeader'
//Styles 
import styles from './services.module.css';


//Import this in and move PageHeader to global 
// import PageHeader from '../components/PageHeader/PageHeader';
//Global section import from Components
// import StatsSection from '../components/StatsSection/StatsSection';
// import TestomonialsCarouselSection from "../components/TestomonialsCarouselSection/TestomonialsCarouselSection";

//Styles 
// import './services.module.css'; 

// `app/services/page.tsx` is the UI for the `/services` URL

type Props = {}

export default function services(props: Props) {
  const figureRef = useRef(null);
  const [currImage, setCurrImage] = useState(0);
  //declared state variable for 3D carousel images descriptions 
  // const [serviceImgDescriptionLeft, setServiceImgDescriptionLeft ] = useState(""); 
  // const [serviceImgDescriptionRight, setServiceImgDescriptionRight ] = useState(""); 


  useEffect(() => {
    const numImages = figureRef.current ? figureRef.current.children.length : 0;
    const theta = 2 * Math.PI / numImages;
    figureRef.current.style.transform = `rotateY(${currImage * -theta}rad)`;

    // Clear previous active class
    Array.from(figureRef.current.children).forEach(child => {
      child.classList.remove('activeCarouselItem');
    });

    // Add active class to current item
    if (figureRef.current.children[currImage]) {
      figureRef.current.children[currImage].classList.add('activeCarouselItem');
    }
  }, [currImage]);





  const handlePrevClick = () => {
    setCurrImage(currImage - 1);
  };

  const handleNextClick = () => {
    setCurrImage(currImage + 1);
  };


  useEffect(() => {
    const handleScroll = () => {

      const carouselOffsetTop = document.querySelector('.carouselSection').offsetTop;
      if (window.scrollY > carouselOffsetTop - window.innerHeight / 2) {

      } else {
        // Removes effect when the user scrolls back up
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);






  return (
    <div className={styles['ServicePageBody']}>

      {/*----HORIZONTAL SCROLLING BAR---*/}
      {/**/}
      <div className={styles['scrollingItemsContainer']}>
        <div className={styles['horizontalScrollingItems']}>
          <div className={styles['horizontal-scrolling-items']}>
            <div className={styles['item']}>Drywall Installation</div>
            <div className={styles['item']}>Drywall Finishing</div>
            <div className={styles['item']}>Popcorn Removal</div>
            <div className={styles['item']}>Drywall Repair</div>
            <div className={styles['item']}>Texture Knockdown</div>
            <div className={styles['item']}>Interior Painting</div>
          </div>

          <div className={styles['horizontal-scrolling-items']}>
            <div className={styles['item']}>Drywall Installation</div>
            <div className={styles['item']}>Drywall Finishing</div>
            <div className={styles['item']}>Popcorn Removal</div>
            <div className={styles['item']}>Drywall Repair</div>
            <div className={styles['item']}>Texture Knockdown</div>
            <div className={styles['item']}>Interior Painting</div>
          </div>
        </div>
      </div>

      {/* PageHeader IMPORT*/}
      <div className={styles['services-banner-area']}>
        <PageHeader title='Services' navTitle='services' />
      </div>


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



      {/* 3D CAROUSEL SECTION*/}
      {/* 
            serviceOfferingOneAnimation = box  is similar to box class - as it contains both img and descriptions  */}
      {/* ServiceOfferingOne = text - contians all text, but each div/text needs to be formatted differently  */}

      <div className={styles.threeDCarouselWrapper}>
        <div className={styles['carouselSection']}>
          <div className={styles['threeDCarouselContainer']} data-gap="80">

            {/* Service Offering #1 */}
            <div className={styles['serviceOfferingOneAnimation']}>
              <div className={styles['serviceOfferingTitleOne']} id={styles['text']}>
                <p> DRYWALL INSTALLATION AND REPAIR  </p>
              </div>

              <figure className={styles.figure} ref={figureRef}>
                <img src='./servicesPageImages/drywallinstallation_1.jpg' alt='Drywall Installation' />
              </figure>

              <div className={styles['serviceOfferingStatementOne']} id={styles['text']}>
                <p> We offer complete range of drywall services including drywall hanging,
                  drywall installation, drywall taping, drywall sanding, and drywall mudding.
                  Our skilled team is ready to handle every aspect of your drywall
                  project with expertise and precision.
                </p>
              </div>

              <div className={styles['serviceOfferingListOne']} id={styles['text']}>
                <ul>
                  <li> Residential Drywall </li>
                  <li> Drywall Hanging </li>
                  <li> Drywall Texturing </li>
                  <li> Commercial Drywall </li>
                  <li> Drywall Taping </li>
                  <li> Drywall Installation </li>
                  <li> Drywall Finishing </li>
                </ul>
              </div>
            </div>


            {/* Service Offering #2 */}
            <div className={styles['serviceOfferingTwoAnimation']}>
              <div className={styles['serviceOfferingTitleTwo']}>
                <p> UPGRADE YOUR WALLS  </p>
              </div>

              <figure className={styles.figure} ref={figureRef}>
                <img src='./servicesPageImages/drywallmudding_2.jpg' alt='Drywall Finishing' />
              </figure>

              <div className={styles['serviceOfferingStatementTwo']}>
                <p> Transform your space and say farewell to outdated popcorn ceilings with our
                  range of stylish ceiling upgrades. Experience an upgrade that elevates your
                  space with your choice of modern ceiling textures. Whether you desire a sleek,
                  smooth finish or a textured design, our options offer endless possibilities
                  for enhancing the aesthetics of your home.
                </p>
              </div>

              <div className={styles['serviceOfferingListTwo']}>
                <ul>
                  <li> CEILING TEXTURING </li>
                  <li> WALL TEXTURING </li>
                  <li> RESIDENTIAL TEXTURING </li>
                  <li> COMMERCIAL TEXTURING </li>
                </ul>
              </div>
            </div>


            {/* Service Offering #3 */}
            <div className={styles['serviceOfferingThreeAnimation']}>
              <div className={styles['serviceOfferingTitleThree']}>
                <p> ELEVATE YOUR SPACES  </p>
              </div>

              <figure className={styles.figure} ref={figureRef}>
                <img src='./servicesPageImages/ceiling_popcorn_removal_3.png' alt='Popcorn Removal' />
              </figure>

              <div className={styles['serviceOfferingStatementThree']}>
                <p> Elevate your interior space with our professional interior painting services
                  that prioritize clean and precise workmanship. Our team takes utmost care to
                  protect your furnishings and surroundings, ensuring a hassle-free painting experience.
                  From meticulous preparation to flawless execution, we go above and beyond to create a
                  refreshed and vibrant atmosphere in your space.
                </p>
              </div>

              <div className={styles['serviceOfferingListThree']}>
                <ul>
                  <li> Interior Painting </li>
                  <li> Residential Painting </li>
                  <li> Office Painting </li>
                  <li> Commercial Painting </li>
                </ul>
              </div>
            </div>


            {/* Service Offering #4 */}
            <div className={styles['serviceOfferingFourAnimation']}>
              <div className={styles['serviceOfferingTitleFour']}>
                <p> ELEVATE YOUR SPACES  </p>
              </div>

              <figure className={styles.figure} ref={figureRef}>
                <img src='./servicesPageImages/repairproject1.1ac_4.jpg' alt='Drywall Repair' />
              </figure>

              <div className={styles['serviceOfferingStatementFour']}>
                <p> Elevate your interior space with our professional interior painting services
                  that prioritize clean and precise workmanship. Our team takes utmost care to
                  protect your furnishings and surroundings, ensuring a hassle-free painting experience.
                  From meticulous preparation to flawless execution, we go above and beyond to create a
                  refreshed and vibrant atmosphere in your space.
                </p>
              </div>

              <div className={styles['serviceOfferingListFour']}>
                <ul>
                  <li> Interior Painting  </li>
                  <li> Residential Painting   </li>
                  <li> Office Painting  </li>
                  <li> Commercial Painting </li>
                </ul>
              </div>
            </div>


            {/* Service Offering #5 */}
            <div className={styles['serviceOfferingFiveAnimation']}>

              <div className={styles['serviceOfferingTitleFive']}>
                <p> ELEVATE YOUR SPACES  </p>
              </div>

              <figure className={styles.figure} ref={figureRef}>
                <img src='./servicesPageImages/knockdown-texture_5.jpg' alt='Texture Knockdown' />
              </figure>

              <div className={styles['serviceOfferingStatementFive']}>
                <p> Elevate your interior space with our professional interior painting services
                  that prioritize clean and precise workmanship. Our team takes utmost care to
                  protect your furnishings and surroundings, ensuring a hassle-free painting experience.
                  From meticulous preparation to flawless execution, we go above and beyond to create a
                  refreshed and vibrant atmosphere in your space.
                </p>
              </div>

              <div className={styles['serviceOfferingListFive']}>
                <ul>
                  <li> Interior Painting  </li>
                  <li> Residential Painting   </li>
                  <li> Office Painting  </li>
                  <li> Commercial Painting </li>
                </ul>
              </div>
            </div>


            {/* Service Offering #6 */}
            <div className={styles['serviceOfferingSixAnimation']}>
              <div className={styles['serviceOfferingTitleSix']}>
                <p> ELEVATE YOUR SPACES  </p>
              </div>

              <figure className={styles.figure} ref={figureRef}>
                <img src='./servicesPageImages/interiorpainting_6.jpg' alt="Interior Painting" />
              </figure>

              <div className={styles['serviceOfferingStatementSix']}>
                <p> Elevate your interior space with our professional interior painting services
                  that prioritize clean and precise workmanship. Our team takes utmost care to
                  protect your furnishings and surroundings, ensuring a hassle-free painting experience.
                  From meticulous preparation to flawless execution, we go above and beyond to create a
                  refreshed and vibrant atmosphere in your space.
                </p>
              </div>

              <div className={styles['serviceOfferingListSix']}>
                <ul>
                  <li> Interior Painting  </li>
                  <li> Residential Painting   </li>
                  <li> Office Painting  </li>
                  <li> Commercial Painting </li>
                </ul>
              </div>

            </div>
          </div>
          <div className={styles['carouselNav']}>
            <button
              className={styles['carouselPrevButton']}
              variant='outlined'
              onClick={handlePrevClick}
            >
              Prev
            </button>

            <button
              className={styles['carouselNextButton']}
              variant='outlined'
              onClick={handleNextClick}
            >
              Next
            </button>
          </div>

        </div>
      </div>


      {/*STATS SECTION*/}

      <div className={styles['stats-section-container']}>
        <div className={styles['stats-section-img']}>
          <img src='' alt='' />
        </div>
        <div className={styles['descritption-container']}>
          <div className={styles['title']}>
            <h2>PROVIDING PERSONALIZED AND HIGH QUALITY SERVICE</h2>
          </div>
          <div className={styles['description-text']}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Integer sit amet erat pretium, feugiat magna sit amet, aliquet urna.
              Cras quis metus ut dolor facilisis dapibus porttitor eget risus.
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
              Maecenas eget purus ac arcu egestas molestie.</p>
          </div>
          <div className={styles['data-container']}>
            <div className={styles['number-of-customers']}>
              <div className={styles['stats-customers']}>
                {/* {numberOfCustomers} */}
              </div>
              <h3>Happy Customer</h3>
            </div>

            <div className={styles['projects-completed']}>
              <div className={styles['stats-project-completion']}>
                {/* {numberOfCompletedProjects} */}
              </div>
              <h3>Projects Completed</h3>
            </div>

            <div className={styles['average-rating']}>
              <div className={styles['stats-average-rating']}>
                {/* {averageRating} */}
              </div>
              <h3>Average Rating</h3>
            </div>
          </div>
        </div>
      </div>




  {/*CUSTOMER REVIEWS SECTION*/}

  













    </div >
  )
};
