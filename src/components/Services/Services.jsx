import './Services.css';
import React from "react";
import { Button } from "@mui/material"


function Services() {

    const n = 6; //six images 
    const theta = 2; // rotation of angle in radians 

    // for loop to go through images and rotate it on the y-axis.  
        for (let i = 2; i <= n; i++) {
        const angle = (i - 1) * theta;
        const imageElement = document.querySelector(`.threeDCarouselContainer figure img:nth-child(${i})`);
        if (imageElement) {
            imageElement.style.transform = `rotateY(${angle}rad)`;
        }
    };


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
                            <div className='itemImg'> <img src='../ServicesPageImages/drywallinstallation.jpg' alt='Drywall Installation' /> </div>
                        </div>
                        <div className='itemContainer'>
                            <div className="itemTitle">Drywall Finishing</div>
                            <div className='itemDescription'>Description for Drywall Finishing</div>
                            <div className='itemImg'> <img src='../ServicesPageImages/drywallmudding.jpg' alt='Drywall Finishing' /> </div>
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

            <div className="servicestitle">
                <p id='servicesMaintitle'> Our services
                </p>
            </div>

            <div className='servicesStatement'>
                <p>
                    We count on 20 years of experience in the field,
                    and our goal is to serve our clients with responsibility
                    and high-quality work. Because our client's satisfaction is our priority.
                </p>
            </div>


            <div className="carouselSection">
                <div className="threeDCarouselContainer" data-gap="80">
                    <figure>
                        <img src='/ServicesPageImages/drywallinstallation_1.jpg' alt='Drywall Installation' />
                        <img src='/ServicesPageImages/drywallmudding_2.jpg' alt='Drywall Finishing' />
                        <img src='/ServicesPageImages/ceiling_popcorn_removal_3.png' alt='Popcorn Removal' />
                        <img src='/ServicesPageImages/repairproject1.1ac_4.jpg' alt='Drywall Repair' />
                        <img src='/ServicesPageImages/knockdown-texture_5.jpg' alt='Texture Knockdown' />
                        <img src='/ServicesPageImages/interiorpainting_6.jpg' alt="Interior Painting" />
                    </figure>
                </div>
            </div>

            <Button className="carouselPrevButton"
            > Prev </Button>

            <Button className="carouselNextButton"
            > Next </Button>

        </div>
    )
};

export default Services;