import './Body.css'




function BodyAboutUs() {


    return (
        <div id='AboutUsContainers'>
            <div className='container1'  id='AboutUsImgContainer'>
                <img src='./LandingPageAboutUsImages/logo.jpg' alt="CLC About Us" />
            </div>

            <div className='container2' id='AboutUsStatementContainer'>
                <h1> About Us </h1>
                <h2>
                    At the heart of Rochester, MN, CLC DRYWALL is more than just a drywall service—it's
                    a promise of craftsmanship, integrity, and dedication. Our team thrives on clear communication, ensuring
                    every detail aligns with your expectations. Choose CLC DRYWALL and experience a seamless blend of
                    quality and commitment, transforming spaces into masterpieces.

                </h2>

                <a href="AboutUs">
                    <button type="button" id="mainPageAboutUsButton"> About Us</button>
                </a>
            </div>
        </div>
    );
};

export default BodyAboutUs;





