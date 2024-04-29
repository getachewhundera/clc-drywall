'use client'
//Top Navigation items, social media icons
//needs to be on every page


import React from 'react'

type Props = {}

const TopNav = (props: Props) => {
  return (
    <div className="top_menu row m0">
          <div className="container">
            <div className="float-left">
              <a className="dn_btn" href="">
                <i className="ti-mobile"></i>+1 (507) 358-4948
              </a>
              <span className="dn_btn">
                {" "}
                <i className="ti-location-pin"></i>  Rochester, MN
              </span>
            </div>
            <div className="float-right">
              <span className="follow_us">Follow us: </span>
              <ul className="list header_social">
                <li>
                  <a href="#">
                    <i className="ti-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ti-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ti-instagram"></i>
                  </a>
                </li>
                {/* <li>
                  <a href="#">
                    <i className="ti-tiktok"></i>
                  </a>
                </li> */}
                
              </ul>
            </div>
          </div>
        </div>
  )
}

export default TopNav;