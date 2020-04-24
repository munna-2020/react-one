import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import BlogClassic from "../components/BlogClassic";
import {Link} from "react-router-dom";




const BlogClassicpage = () => {
    return (
        <div>
            <Header/>
            <div className="sub-banner overview-bgi">
                <div className="container">
                    <div className="breadcrumb-area">
                        <h1>Blog Classic Sidebar</h1>
                        <ul className="breadcrumbs">
                            <li><Link to="/">Home</Link></li>
                            <li className="active">Blog Classic Sidebar</li>
                        </ul>
                    </div>
                </div>
            </div>
            <BlogClassic/>

            <Footer/>
        </div>
    );
};

export default BlogClassicpage;
