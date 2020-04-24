import React, {Component} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Link} from "react-router-dom";
import BlogDetails from "../components/BlogDetails";

class BlogSingleDetails extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="sub-banner overview-bgi">
                    <div className="container">
                        <div className="breadcrumb-area">
                            <h1>Blog Details Fullwidth</h1>
                            <ul className="breadcrumbs">
                                <li><Link to="/">Home</Link></li>
                                <li className="active">Blog Details Fullwidth</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <BlogDetails />
                <Footer />
            </div>
        );
    }
}

export default BlogSingleDetails;