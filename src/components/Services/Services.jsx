import React, { useState, useEffect, useRef } from "react";
import './Services.css';
import { Button } from "@mui/material";


function Services() {


    //   document.addEventListener('DOMContentLoaded', () => {
    //     const observer = new IntersectionObserver((entries) => {
    //       entries.forEach((entry) => {
    //         if (entry.isIntersecting) {
    //           entry.target.classList.add('active');
    //         } else {
    //           entry.target.classList.remove('active');
    //         }
    //       });
    //     });

    //     document.querySelectorAll('.box').forEach((box) => {
    //       observer.observe(box);
    //     });
    //   });

    // const figureRef = useRef(null);
    // const [currImage, setCurrImage] = useState(0);
    // //declared state variable for 3D carousel images descriptions 
    // // const [serviceImgDescriptionLeft, setServiceImgDescriptionLeft ] = useState(""); 
    // // const [serviceImgDescriptionRight, setServiceImgDescriptionRight ] = useState(""); 


    // useEffect(() => {

    //     const observer = new IntersectionObserver((entries) => {
    //         entries.forEach(entry => {
    //             if (entry.isIntersecting) {
    //                 entry.target.classList.add('activeCarouselItem');
    //             } else {
    //                 entry.target.classList.remove('activeCarouselItem');
    //             }
    //         });
    //     }, { threshold: 0.1 });


    //     const items = document.querySelectorAll('.serviceOfferingOneAnimation, .serviceOfferingTwoAnimation, .serviceOfferingThreeAnimation, .serviceOfferingFourAnimation, .serviceOfferingFiveAnimation, .serviceOfferingSixAnimation');
    //     items.forEach(item => observer.observe(item));

    //     // return () => items.forEach(item => observer.unobserve(item));

    //     // const numImages = figureRef.current ? figureRef.current.children.length : 0;
    //     // const theta = 2 * Math.PI / numImages;
    //     // figureRef.current.style.transform = `rotateY(${currImage * -theta}rad)`;

    //     // // Clear previous active class
    //     // Array.from(figureRef.current.children).forEach(child => {
    //     //     child.classList.remove('activeCarouselItem');
    //     // });

    //     // // Add active class to current item
    //     // if (figureRef.current.children[currImage]) {
    //     //     figureRef.current.children[currImage].classList.add('activeCarouselItem');
    //     // }
    // }, [] ); 

    // // [currImage]


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
        <div>
            <div className="scrollingItemsContainer">
                <div className="horizontalScrollingItems">
                    <div className="horizontal-scrolling-items">
                        <div className="item">Drywall Installation</div>
                        <div className="item">Drywall Finishing</div>
                        <div className="item">Popcorn Removal</div>
                        <div className="item">Drywall Repair</div>
                        <div className="item">Texture Knockdown</div>
                        <div className="item">Interior Painting</div>
                    </div>

                    <div className="horizontal-scrolling-items">
                        <div className="item">Drywall Installation</div>
                        <div className="item">Drywall Finishing</div>
                        <div className="item">Popcorn Removal</div>
                        <div className="item">Drywall Repair</div>
                        <div className="item">Texture Knockdown</div>
                        <div className="item">Interior Painting</div>
                    </div>
                </div>
            </div>

            <div className='servicesdescription'>
                <div className='servicesdescriptioncontainers'>
                    <div className="items">
                        <div className='itemContainer'>
                            <div className="itemTitle">Drywall Installation</div>
                            <div className='itemDescription'>Description for Drywall Installation</div>
                            <div className='itemImg'> <img src='../public/servicesPageImages/drywallinstallation.jpg' alt='Drywall Installation' /> </div>
                        </div>
                        <div className='itemContainer'>
                            <div className="itemTitle">Drywall Finishing</div>
                            <div className='itemDescription'>Description for Drywall Finishing</div>
                            <div className='itemImg'> <img src='../servicesPageImages/drywallmudding.jpg' alt='Drywall Finishing' /> </div>
                        </div>
                        <div className='itemContainer'>
                            <div className="itemTitle">Popcorn Removal</div>
                            <div className='itemDescription'>Description for Popcorn Removal</div>
                            <div className='itemImg'> <img src='../ServicesPageImages/ceiling_popcorn_removal.png' alt='Popcorn Removal' /> </div>
                        </div>
                        <div className='itemContainer'>
                            <div className="itemTitle">Drywall Repair</div>
                            <div className='itemDescription'>Description for Drywall Repair</div>
                            <div className='itemImg'> <img src='../ServicesPageImages/repairproject1.1ac.jpg' alt='Drywall Repair' /> </div>
                        </div>
                        <div className='itemContainer'>
                            <div className="itemTitle">Texture Knockdown</div>
                            <div className='itemDescription'>Description for Texture Knockdown</div>
                            <div className='itemImg'> <img src='../ServicesPageImages/knockdown-texture.jpg' alt='Texture Knockdown' /> </div>
                        </div>
                        <div className='itemContainer'>
                            <div className="itemTitle">Interior Painting</div>
                            <div className='itemDescription'>Description for Interior Painting</div>
                            <div className='itemImg'> <img src='../ServicesPageImages/interiorpainting.jpg' alt="Interior Painting" /> </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* 3-d carousel */}
            {/* 
            serviceOfferingOneAnimation = box  is similar to box class - as it contains both img and descriptions  */}
            {/* ServiceOfferingOne = text - contians all text, but each div/text needs to be formatted differently  */}


            <div className="carouselSection">
                <div className="threeDCarouselContainer" data-gap="80">

                    {/* Service Offering #1 */}
                    <div className="serviceOfferingOneAnimation">

                        <div className="serviceOfferingTitleOne" id="text">
                            <p> DRYWALL INSTALLATION AND REPAIR  </p>
                        </div>

                        <figure ref={figureRef}>
                            <img src='/ServicesPageImages/drywallinstallation_1.jpg' alt='Drywall Installation' />
                        </figure>

                        <div className="serviceOfferingStatementOne" id="text">
                            <p> We offer complete range of drywall services including drywall hanging,
                                drywall installation, drywall taping, drywall sanding, and drywall mudding.
                                Our skilled team is ready to handle every aspect of your drywall
                                project with expertise and precision.
                            </p>
                        </div>

                        <div className="serviceOfferingListOne" id="text">
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

                    <div className="serviceOfferingTwoAnimation">

                        <div className="serviceOfferingTitleTwo">
                            <p> UPGRADE YOUR WALLS  </p>
                        </div>

                        <figure ref={figureRef}>
                            <img src='/ServicesPageImages/drywallmudding_2.jpg' alt='Drywall Finishing' />
                        </figure>

                        <div className="serviceOfferingStatementTwo">
                            <p> Transform your space and say farewell to outdated popcorn ceilings with our
                                range of stylish ceiling upgrades. Experience an upgrade that elevates your
                                space with your choice of modern ceiling textures. Whether you desire a sleek,
                                smooth finish or a textured design, our options offer endless possibilities
                                for enhancing the aesthetics of your home.
                            </p>
                        </div>

                        <div className="serviceOfferingListTwo">
                            <ul>
                                <li> CEILING TEXTURING </li>
                                <li> WALL TEXTURING </li>
                                <li> RESIDENTIAL TEXTURING </li>
                                <li> COMMERCIAL TEXTURING </li>
                            </ul>
                        </div>
                    </div>


                    {/* Service Offering #3 */}

                    <div className="serviceOfferingThreeAnimation">

                        <div className="serviceOfferingTitleThree">
                            <p> ELEVATE YOUR SPACES  </p>
                        </div>

                        <figure ref={figureRef}>
                            <img src='/ServicesPageImages/ceiling_popcorn_removal_3.png' alt='Popcorn Removal' />
                        </figure>

                        <div className="serviceOfferingStatementThree">
                            <p> Elevate your interior space with our professional interior painting services
                                that prioritize clean and precise workmanship. Our team takes utmost care to
                                protect your furnishings and surroundings, ensuring a hassle-free painting experience.
                                From meticulous preparation to flawless execution, we go above and beyond to create a
                                refreshed and vibrant atmosphere in your space.
                            </p>
                        </div>

                        <div className="serviceOfferingListThree">
                            <ul>
                                <li> Interior Painting </li>
                                <li> Residential Painting </li>
                                <li> Office Painting </li>
                                <li> Commercial Painting </li>
                            </ul>
                        </div>
                    </div>


                    {/* Service Offering #4 */}

                    <div className="serviceOfferingFourAnimation">

                        <div className="serviceOfferingTitleFour">
                            <p> ELEVATE YOUR SPACES  </p>
                        </div>

                        <figure ref={figureRef}>
                            <img src='/ServicesPageImages/repairproject1.1ac_4.jpg' alt='Drywall Repair' />
                        </figure>

                        <div className="serviceOfferingStatementFour">
                            <p> Elevate your interior space with our professional interior painting services
                                that prioritize clean and precise workmanship. Our team takes utmost care to
                                protect your furnishings and surroundings, ensuring a hassle-free painting experience.
                                From meticulous preparation to flawless execution, we go above and beyond to create a
                                refreshed and vibrant atmosphere in your space.
                            </p>
                        </div>

                        <div className="serviceOfferingListFour">
                            <ul>
                                <li> Interior Painting  </li>
                                <li> Residential Painting   </li>
                                <li> Office Painting  </li>
                                <li> Commercial Painting </li>
                            </ul>
                        </div>
                    </div>


                    {/* Service Offering #5 */}

                    <div className="serviceOfferingFiveAnimation">

                        <div className="serviceOfferingTitleFive">
                            <p> ELEVATE YOUR SPACES  </p>
                        </div>

                        <figure ref={figureRef}>
                            <img src='/ServicesPageImages/knockdown-texture_5.jpg' alt='Texture Knockdown' />
                        </figure>

                        <div className="serviceOfferingStatementFive">
                            <p> Elevate your interior space with our professional interior painting services
                                that prioritize clean and precise workmanship. Our team takes utmost care to
                                protect your furnishings and surroundings, ensuring a hassle-free painting experience.
                                From meticulous preparation to flawless execution, we go above and beyond to create a
                                refreshed and vibrant atmosphere in your space.
                            </p>
                        </div>

                        <div className="serviceOfferingListFive">
                            <ul>
                                <li> Interior Painting  </li>
                                <li> Residential Painting   </li>
                                <li> Office Painting  </li>
                                <li> Commercial Painting </li>
                            </ul>
                        </div>
                    </div>


                    {/* Service Offering #6 */}

                    <div className="serviceOfferingSixAnimation">
                        <div className="serviceOfferingTitleSix">
                            <p> ELEVATE YOUR SPACES  </p>
                        </div>

                        <figure ref={figureRef}>
                            <img src='/ServicesPageImages/interiorpainting_6.jpg' alt="Interior Painting" />
                        </figure>

                        <div className="serviceOfferingStatementSix">
                            <p> Elevate your interior space with our professional interior painting services
                                that prioritize clean and precise workmanship. Our team takes utmost care to
                                protect your furnishings and surroundings, ensuring a hassle-free painting experience.
                                From meticulous preparation to flawless execution, we go above and beyond to create a
                                refreshed and vibrant atmosphere in your space.
                            </p>
                        </div>

                        <div className="serviceOfferingListSix">
                            <ul>
                                <li> Interior Painting  </li>
                                <li> Residential Painting   </li>
                                <li> Office Painting  </li>
                                <li> Commercial Painting </li>
                            </ul>
                        </div>

                    </div>


                </div>



                <div className='carouselNav'>
                    <Button
                        className="carouselPrevButton"
                        variant='outlined'
                        onClick={handlePrevClick}
                    >
                        Prev
                    </Button>

                    <Button
                        className="carouselNextButton"
                        variant='outlined'
                        onClick={handleNextClick}
                    >
                        Next
                    </Button>
                </div>




            </div>

        </div>
    );
};


export default Services;








{/*Services heading title and Statement */ }
{/* <div className="servicestitle">
                <p id='servicesMaintitle'> Services
                </p>
            </div>

            <div className='servicesStatement'>
                <p>
                    We count on 20 years of experience in the field,
                    and our goal is to serve our clients with responsibility
                    and high-quality work. Because our client's satisfaction is our priority.
                </p>
            </div>

            <div className="serviceDescriptions">
                <div className="serviceDescriptionOne">
                    <p> DRYWALL INSTALLATION AND REPAIR  </p>
                    <p> We offer complete range of drywall services including drywall hanging,
                        drywall installation, drywall taping, drywall sanding, and drywall mudding.
                        Our skilled team is ready to handle every aspect of your drywall
                        project with expertise and precision.
                    </p>
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

                <div className="serviceDescriptionTwo">
                    <p> UPGRADE YOUR WALLS  </p>
                    <p> Transform your space and say farewell to outdated popcorn ceilings with our
                        range of stylish ceiling upgrades. Experience an upgrade that elevates your
                        space with your choice of modern ceiling textures. Whether you desire a sleek,
                        smooth finish or a textured design, our options offer endless possibilities
                        for enhancing the aesthetics of your home.
                    </p>
                    <ul>
                        <li> CEILING TEXTURING </li>
                        <li> WALL TEXTURING </li>
                        <li> RESIDENTIAL TEXTURING </li>
                        <li> COMMERCIAL TEXTURING </li>
                    </ul>
                </div>

                <div className="serviceDescriptionThree">
                    <p> ELEVATE YOUR SPACES  </p>
                    <p> Elevate your interior space with our professional interior painting services
                        that prioritize clean and precise workmanship. Our team takes utmost care to
                        protect your furnishings and surroundings, ensuring a hassle-free painting experience.
                        From meticulous preparation to flawless execution, we go above and beyond to create a
                        refreshed and vibrant atmosphere in your space.
                    </p>
                    <ul>
                        <li> Interior Painting  </li>
                        <li> Residential Painting   </li>
                        <li> Office Painting  </li>
                        <li> Commercial Painting </li>
                    </ul>
                </div>

                <div className="serviceDescriptionFour">
                    <p> ELEVATE YOUR SPACES  </p>
                    <p> Elevate your interior space with our professional interior painting services
                        that prioritize clean and precise workmanship. Our team takes utmost care to
                        protect your furnishings and surroundings, ensuring a hassle-free painting experience.
                        From meticulous preparation to flawless execution, we go above and beyond to create a
                        refreshed and vibrant atmosphere in your space.
                    </p>
                    <ul>
                        <li> Interior Painting  </li>
                        <li> Residential Painting   </li>
                        <li> Office Painting  </li>
                        <li> Commercial Painting </li>
                    </ul>
                </div>


                <div className="serviceDescriptionFive">
                    <p> ELEVATE YOUR SPACES  </p>
                    <p> Elevate your interior space with our professional interior painting services
                        that prioritize clean and precise workmanship. Our team takes utmost care to
                        protect your furnishings and surroundings, ensuring a hassle-free painting experience.
                        From meticulous preparation to flawless execution, we go above and beyond to create a
                        refreshed and vibrant atmosphere in your space.
                    </p>
                    <ul>
                        <li> Interior Painting  </li>
                        <li> Residential Painting   </li>
                        <li> Office Painting  </li>
                        <li> Commercial Painting </li>
                    </ul>
                </div>

                <div className="serviceDescriptionSix">
                    <p> ELEVATE YOUR SPACES  </p>
                    <p> Elevate your interior space with our professional interior painting services
                        that prioritize clean and precise workmanship. Our team takes utmost care to
                        protect your furnishings and surroundings, ensuring a hassle-free painting experience.
                        From meticulous preparation to flawless execution, we go above and beyond to create a
                        refreshed and vibrant atmosphere in your space.
                    </p>
                    <ul>
                        <li> Interior Painting  </li>
                        <li> Residential Painting   </li>
                        <li> Office Painting  </li>
                        <li> Commercial Painting </li>
                    </ul>
                </div>

            </div> */}



{/* 3-d carousel */ }
{/* 
            serviceOfferingOneAnimation = box  is similar to box class - as it contains both img and descriptions  */}
{/* ServiceOfferingOne = text - contians all text, but each div/text needs to be formatted differently  */ }








// 3-d carousel

// <div className="carouselSection">
//     <div className="threeDCarouselContainer" data-gap="80">
//         <figure ref={figureRef}>
//             <img src='/ServicesPageImages/drywallinstallation_1.jpg' alt='Drywall Installation' />
//             <img src='/ServicesPageImages/drywallmudding_2.jpg' alt='Drywall Finishing' />
//             <img src='/ServicesPageImages/ceiling_popcorn_removal_3.png' alt='Popcorn Removal' />
//             <img src='/ServicesPageImages/repairproject1.1ac_4.jpg' alt='Drywall Repair' />
//             <img src='/ServicesPageImages/knockdown-texture_5.jpg' alt='Texture Knockdown' />
//             <img src='/ServicesPageImages/interiorpainting_6.jpg' alt="Interior Painting" />
//         </figure>
//     </div>

//     <div className='carouselNav'>
//         <Button
//             className="carouselPrevButton"
//             variant='outlined'
//             onClick={handlePrevClick}
//         >
//             Prev
//         </Button>

//         <Button
//             className="carouselNextButton"
//             variant='outlined'
//             onClick={handleNextClick}
//         >
//             Next
//         </Button>
//     </div>

// </div>