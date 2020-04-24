import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Pricing from "../components/Pricing";
import {Link} from "react-router-dom";

const OurPrice = () => {
    return (
        <div>
            <Header/>
            <div className="sub-banner overview-bgi">
                <div className="container">
                    <div className="breadcrumb-area">
                        <h1>Our Price</h1>
                        <ul className="breadcrumbs">
                            <li><Link to="/">Home</Link></li>
                            <li className="active">Price</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Pricing/>
            <Footer/>
        </div>
    );
};

export default OurPrice;