import React from 'react';
import ScrollUpButton from "react-scroll-up-button"
import {Link} from "react-router-dom";
const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="container footer-inner">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-item">
                                <h4>Contact Us</h4>
                                <ul className="contact-info">
                                    <li>
                                        Address: 140/B , NewYork, U.S.A
                                    </li>
                                    <li>
                                        Email: <a href="">info@xxx.com</a>
                                    </li>
                                    <li>
                                        Phone: <a href="tel: 0000 000 00">+XXXX XXXX XXX</a>
                                    </li>
                                    <li>
                                        Fax: +XXXX XXXX XXX
                                    </li>
                                </ul>
                                <ul className="social-list clearfix">
                                    <li><a href="#" className="facebook"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#" className="twitter"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#" className="google"><i className="fa fa-google-plus"></i></a></li>
                                    <li><a href="#" className="rss"><i className="fa fa-rss"></i></a></li>
                                    <li><a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
                            <div className="footer-item">
                                <h4>Useful Links</h4>
                                <ul className="links">
                                    <li>
                                        <Link to="/about-us"><i className="fa fa-angle-right"></i>About us</Link>
                                    </li>
                                    <li>
                                        <Link to="/services"><i className="fa fa-angle-right"></i>Service</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact-us"><i className="fa fa-angle-right"></i>Contact</Link>
                                    </li>
                                    <li>
                                        <Link to="/our-blog"><i className="fa fa-angle-right"></i>Blog</Link>
                                    </li>
                                    <li>
                                        <Link to="/gallery"><i className="fa fa-angle-right"></i>Gallery</Link>
                                    </li>
                                    <li>
                                        <Link to="/our-team"><i className="fa fa-angle-right"></i>Team</Link>
                                    </li>
                                    <li>
                                        <Link to="/pricing-tables"><i className="fa fa-angle-right"></i>Pricing
                                            Tables</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                            <div className="recent-posts footer-item">
                                <h4>Recent Posts</h4>
                                <div className="media mb-4">
                                    <a className="pr-3" href="/portfolio-details">
                                        <img src="assets/img/recent-portfolio/img-1.jpg" alt="recent-portfolio"/>
                                    </a>
                                    <div className="media-body align-self-center">
                                        <p><a href="portfolio-details">Lectus tristique lacinia non in diam mauris
                                            ultricies rutrum mauris.</a></p>
                                        <p><i className="fa fa-calendar"></i>27 Feb 2018</p>
                                    </div>
                                </div>
                                <div className="media mb-4">
                                    <a className="pr-3" href="/portfolio-details">
                                        <img src="assets/img/recent-portfolio/img-2.jpg" alt="recent-portfolio"/>
                                    </a>
                                    <div className="media-body align-self-center">
                                        <p><a href="/portfolio-details">Lectus tristique lacinia non in diam mauris
                                            ultricies rutrum mauris</a></p>
                                        <p><i className="fa fa-calendar"></i>27 Feb 2018</p>
                                    </div>
                                </div>
                                <div className="media">
                                    <a className="pr-3" href="/portfolio-details">
                                        <img src="assets/img/recent-portfolio/img-3.jpg" alt="recent-portfolio"/>
                                    </a>
                                    <div className="media-body align-self-center">
                                        <p><a href="/portfolio-details">Lectus tristique lacinia non in diam mauris
                                            ultricies rutrum mauris</a></p>
                                        <p><i className="fa fa-calendar"></i>27 Feb 2018</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-item clearfix">
                                <h4>Subscribe</h4>
                                <div className="Subscribe-box">
                                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                        deserunt mollit.</p>
                                    <form action="#" method="GET">
                                        <p>
                                            <input type="text" className="form-contact" name="email"
                                                   placeholder="Enter Address"/>
                                        </p>
                                        <p>
                                            <button type="submit" name="submitNewsletter"
                                                    className="btn btn-block btn-color">
                                                Subscribe
                                            </button>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-12">
                            <p className="copy">&copy;  2020 <a href="" target="_blank">The
                                OneReact</a>. Trademarks and brands are the property of their respective owners.</p>
                        </div>
                    </div>
                </div>
            </footer>
            <ScrollUpButton  style={{ width: "30px",height: "30px",position: "fixed",bottom : "10px", right : "20px", padding : "5px",  textAlign : "center", zIndex : "10000", borderRadius : "3px", backgroundColor : "#b00606" }} />
        </div>
    );
};

export default Footer;
