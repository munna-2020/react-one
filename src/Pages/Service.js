import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import OurService from "../components/OurService";
import Counter from "../components/Counter";
import {Link} from "react-router-dom";

const Service = () => {
    return (
        <div>
            <Header/>
            <div className="sub-banner overview-bgi">
                <div className="container">
                    <div className="breadcrumb-area">
                        <h1>Service</h1>
                        <ul className="breadcrumbs">
                            <li><Link to="/">Home</Link></li>
                            <li className="active">Service</li>
                        </ul>
                    </div>
                </div>
            </div>
            <OurService/>
            <Counter/>
            <Footer/>
        </div>
    );
};

export default Service;
