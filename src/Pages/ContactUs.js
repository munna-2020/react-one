import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Link} from "react-router-dom";

const ContactUs = () => {
    return (
        <div>
            <Header/>
            <div className="sub-banner overview-bgi">
                <div className="container">
                    <div className="breadcrumb-area">
                        <h1>Contact Us</h1>
                        <ul className="breadcrumbs">
                            <li><Link to="/">Home</Link></li>
                            <li className="active">Contact Us</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="page-wrapper section-space--inner--120">
                <div className="container">
                    <div className="row section-space--bottom--50">
                        <div className="col">
                            <div className="contact-map">
                                <iframe title="google-map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d392436.93004030554!2d-105.13838587646829!3d39.7265847007123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1558429398879!5m2!1sen!2sbd" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-12">
                            <div className="contact-information">
                                <h3>Contact Information</h3>
                                <ul>
                                    <li>
                                        <span className="icon"><i className="fa fa-map-marker"></i></span>
                                        <span className="text"><span>Stock Building, 125 Main Street 1st Lane, San Francisco, USA</span></span>
                                    </li>
                                    <li>
                                        <span className="icon"><i className="fa fa-phone" /></span>
                                        <span className="text"><a href="tel:1234567890">(001) 24568 365 987</a><a href="tel:1234567890">(001) 65897 569 784</a></span>
                                    </li>
                                    <li>
                                        <span className="icon"><i className="fa fa-envelope-o" /></span>
                                        <span className="text"><a href="mailto:info@example.com">info@example.com</a><a href="mailto:info@example.com">info@example.com</a></span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-8 col-12">
                            <div className="contact-form">
                                <h3>Leave Your Message</h3>
                                <div className="comment-form">
                                    <form action="#" method="GET" encType="multipart/form-data">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="form-group name">
                                                    <input type="text" name="name" className="form-control"
                                                           placeholder="Name"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="form-group email">
                                                    <input type="email" name="email" className="form-control"
                                                           placeholder="Email"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="form-group subject">
                                                    <input type="text" name="subject" className="form-control"
                                                           placeholder="Subject"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="form-group number">
                                                    <input type="text" name="phone" className="form-control"
                                                           placeholder="Number"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <div className="form-group message">
                                                        <textarea className="form-control" name="message"
                                                                  placeholder="Write message"></textarea>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                                <div className="send-btn">
                                                    <button type="submit"
                                                            className="btn btn-color btn-md btn-message">Send
                                                        Message
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default ContactUs;
