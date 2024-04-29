// `app/page.tsx` is the UI for the `/` URL
import React from "react";

type Props = {};

export default function Page(props: Props) {
    return (
        <div>
            <section className="home_banner_area">
                
                    <div className="container">
                        <div className="banner_content text-center">
                            <span>Future construction</span>
                            <h3>
                                Make your dream home
                                <br />
                                with sintac
                            </h3>
                            <a className="main_btn" href="#">
                                get a quote
                            </a>
                        </div>
                    </div>

            </section>
            <h1>Home Page</h1>

        </div>
    );
};
