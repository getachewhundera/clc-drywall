import './Services.css';
import React from "react";


function Services() {
    window.addEventListener('load', () => {
        var
            carousels = document.querySelectorAll('.carousel')
        ;
    
        for (var i = 0; i < carousels.length; i++) {
            carousel(carousels[i]);
        }
    });
    
    function carousel(root) {
        var
            figure = root.querySelector('figure'),
            nav = root.querySelector('nav'),
            images = figure.children,
            n = images.length,
            gap = root.dataset.gap || 0,
            bfc = 'bfc' in root.dataset,
            
            theta =  2 * Math.PI / n,
            currImage = 0
        ;
        
        setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
        window.addEventListener('resize', () => { 
            setupCarousel(n, parseFloat(getComputedStyle(images[0]).width)) 
        });
    
        setupNavigation();
    
        function setupCarousel(n, s) {
            var	
                apothem = s / (2 * Math.tan(Math.PI / n))
            ;
            
            figure.style.transformOrigin = `50% 50% ${- apothem}px`;
    
            for (var i = 0; i < n; i++)
                images[i].style.padding = `${gap}px`;
            for (i = 1; i < n; i++) {
                images[i].style.transformOrigin = `50% 50% ${- apothem}px`;
                images[i].style.transform = `rotateY(${i * theta}rad)`;
            }
            if (bfc)
                for (i = 0; i < n; i++)
                     images[i].style.backfaceVisibility = 'hidden';
            
            rotateCarousel(currImage);
        }
    
        function setupNavigation() {
            nav.addEventListener('click', onClick, true);
            
            function onClick(e) {
                e.stopPropagation();
                
                var t = e.target;
                if (t.tagName.toUpperCase() != 'BUTTON')
                    return;
                
                if (t.classList.contains('next')) {
                    currImage++;
                }
                else {
                    currImage--;
                }
                
                rotateCarousel(currImage);
            }
                
        }
    
        function rotateCarousel(imageIndex) {
            figure.style.transform = `rotateY(${imageIndex * -theta}rad)`;
        }
        
    }





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


            <div className="_3dcarouselcontainer" data-gap="80">
                <figure>
                    <img src='/ServicesPageImages/drywallinstallation_1.jpg' alt='Drywall Installation' />
                    <img src='/ServicesPageImages/drywallmudding_2.jpg' alt='Drywall Finishing' />
                    <img src='/ServicesPageImages/ceiling_popcorn_removal_3.png' alt='Popcorn Removal' />
                    <img src='/ServicesPageImages/repairproject1.1ac_4.jpg' alt='Drywall Repair' />
                    <img src='/ServicesPageImages/knockdown-texture_5.jpg' alt='Texture Knockdown' />
                    <img src='/ServicesPageImages/interiorpainting_6.jpg' alt="Interior Painting" />
                </figure>
            </div>

            <Button className="carouselPrevButton" 
            onClick={handleInputCarousel}> Prev </Button>

<Button className="carouselNextButton" 
            onClick={handleInputNext}> Next </Button>




        </div>



    )
};

export default Services;