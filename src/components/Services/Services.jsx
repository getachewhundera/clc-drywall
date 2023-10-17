import './Services.css';
import React from "react";


function Services() {
    return (
        <>
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
                        <div className='item1container'>
                            <div className="item1">Drywall Installation</div>
                            <div className='item1description'> </div>
                            <div className='item1img'> <img src='./drywallinstallation.jpg' alt='Drywall Installation Image'/> </div>
                        </div>
                        <div className='item2container'>
                            <div className="item2">Drywall Finishing</div>
                            <div className='item2description'> </div>
                            <div className='item2img'> <img src='./drywallmudding.jpg' alt='Drywall Mudding Image'/> </div>
                        </div>
                        <div className='item3container'>
                            <div className="item3">Popcorn Removal</div>
                            <div className='item3description'> </div>
                            <div className='item3img'> <img src='./project1.1bc.jpg' alt='Popcorn Removal'/> </div>
                        </div>
                        <div className='item4container'>
                            <div className="item4">Drywall Repair</div>
                            <div className='item4description'> </div>
                            <div className='item4img'> <img src='./repairproject1.1ac.jpg' alt='Drywall Repair Image'/> </div>
                        </div>
                        <div className='item5container'>
                            <div className="item5">Texture Knockdown</div>
                            <div className='item5description'> </div>
                            <div className='item5img'>  <img src='./knockdown-texture-paint-zoomed-768x512.jpg' alt='Texture knockdown Image'/> </div>
                        </div>
                        <div className='item6container'>
                            <div className="item6">Interior Painting</div>
                            <div className='item6description'> </div>
                            <div className='item6img'> <img src='./interiorpaintingjpg.jpg' alt='Interior Painting Image'/>  </div>
                        </div>
                    </div>
                </div>
            </div>


        </>



    )
};

export default Services; 