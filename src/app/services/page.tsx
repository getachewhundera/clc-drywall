
// this section is only on the Home page and on the Services page
import Image from 'next/image'
import React from 'react'
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
   return (
    <>
    <h1>Hello, projects Page!</h1>
      {/* <PageHeader title="Our Services" navTitle="Services" /> */}

      {/* <StatsSection /> */}

      <section className="service-area area-padding">
        <div className="container">
          <div className="area-heading">
            <h3 className="line">What We Provide</h3>
            <p>Together female let signs for for fish fowl may first.</p>
          </div>
          <div className="row">
            <div className="col-md-6 col-xl-3">
              <div className="single-service">
                <div className="service-icon">
                  <Image width={92} height={92} src="/images/i1.png.webp" alt="" />

                </div>
                <div className="service-content">
                  <h5>Architecture Design</h5>
                  <p>
                    You{`'`}re which creepeth were yielding kind, divide sixten
                    po gatherin all first fill Seed wherein life. Years one
                    fifth{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-xl-3">
              <div className="single-service">
                <div className="service-icon">
                  <Image width={83} height={83} src="/images/i2.png.webp" alt="" />
                </div>
                <div className="service-content">
                  <h5>Building Construction</h5>
                  <p>
                    You{`'`}re which creepeth were yielding kind, divide sixten
                    po gatherin all first fill Seed wherein life. Years one
                    fifth{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-xl-3">
              <div className="single-service">
                <div className="service-icon">
                  <Image width={53} height={92} src="/images/i3.png.webp" alt="" />
                </div>
                <div className="service-content">
                  <h5>Building Renovation</h5>
                  <p>
                    You{`'`}re which creepeth were yielding kind, divide sixten
                    po gatherin all first fill Seed wherein life. Years one
                    fifth{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-xl-3">
              <div className="single-service">
                <div className="service-icon">
                  <Image width={82} height={82} src="/images/i4.png.webp" alt="" />
                </div>
                <div className="service-content">
                  <h5>Building Maintenance</h5>
                  <p>
                    You{`'`}re which creepeth were yielding kind, divide sixten
                    po gatherin all first fill Seed wherein life. Years one
                    fifth{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <TestomonialsCarouselSection /> */}
    </>
  )
};
