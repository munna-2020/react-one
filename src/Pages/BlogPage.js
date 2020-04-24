import React from 'react';
import Header from "../components/Header";
import {Link} from "react-router-dom";
import Footer from "../components/Footer";
import Blog from "../components/Blog";

const MyComponent = () => {
    return (
        <div>
            <Header />
            <div className="sub-banner overview-bgi">
                <div className="container">
                    <div className="breadcrumb-area">
                        <h1>Our Blog </h1>
                        <ul className="breadcrumbs">
                            <li><Link to="/">Home</Link></li>
                            <li className="active">Blog </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Blog   />

            <Footer />
        </div>
    );
};

export default MyComponent;
