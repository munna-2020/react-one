import React from 'react';
import Header from "../components/Header";
import Manage from "../components/Manage";
import OurService from "../components/OurService";
import Footer from "../components/Footer";
import {Link} from "react-router-dom";

const AboutUs = () => {
    return (
        <div>
            <Header/>
            <div className="sub-banner overview-bgi">
                <div className="container">
                    <div className="breadcrumb-area">
                        <h1>About Us</h1>
                        <ul className="breadcrumbs">
                            <li><Link to="/">Home</Link></li>
                            <li className="active">About Us</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Manage/>
            <OurService/>
            <Footer/>
        </div>
    );
};

export default AboutUs;
