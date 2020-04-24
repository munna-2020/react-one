import React from 'react';
import {Link} from "react-router-dom";

const Intro = () => {
    return (
        <div className="intro-section">
            <div className="container">
                <div className="row">
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
                        <img src="assets/img/logos/logo-white.png" alt="loo"/>
                    </div>
                    <div className="col-xl-8 col-lg-7 col-md-7 col-sm-12">
                        <div className="intro-text">
                            <h3>have any queries? call us anytime</h3>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-3 col-sm-12">
                        <Link to={`${process.env.PUBLIC_URL}/contact-us`} className="btn btn-md">Contact Us</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;
