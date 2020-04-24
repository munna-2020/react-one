import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Link} from "react-router-dom";
import Swiper from 'react-id-swiper';

const PortfolioDetails = () => {
    const params = {
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    }
    return (
        <div>
            <Header/>
            <div className="sub-banner overview-bgi">
                <div className="container">
                    <div className="breadcrumb-area">
                        <h1>Portfolio Details</h1>
                        <ul className="breadcrumbs">
                            <li><Link to="/">Home</Link></li>
                            <li className="active">Portfolio Details</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="project-details-page content-area-16">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div id="ProjectDetailsSlider" className="carousel Project-details-sliders slide mb-40">

                                    <div className="carousel-inner">
                                        <Swiper {...params}>
                                        <div className="active item carousel-item" data-slide-number="0">
                                            <img src="/assets/img/portfolio/img-1.jpg" className="img-fluid" alt="portfolio"/>
                                        </div>
                                        <div className="active item carousel-item" data-slide-number="1">
                                            <img src="/assets/img/portfolio/img-2.jpg" className="img-fluid" alt="portfolio"/>
                                        </div>
                                        <div className="active item carousel-item" data-slide-number="2">
                                            <img src="/assets/img/portfolio/img-3.jpg" className="img-fluid" alt="portfolio"/>
                                        </div>
                                        <div className="active item carousel-item" data-slide-number="4">
                                            <img src="/assets/img/portfolio/img-4.jpg" className="img-fluid" alt="portfolio"/>
                                        </div>
                                        <div className="active item carousel-item" data-slide-number="5">
                                            <img src="/assets/img/portfolio/img-5.jpg" className="img-fluid" alt="portfolio"/>
                                        </div>

                                        </Swiper>
                                    </div>
                                    <ul className="carousel-indicators smail-properties list-inline nav nav-justified">
                                        <li className="list-inline-item active">
                                            <a id="carousel-selector-0" className="selected" data-slide-to="0"
                                               data-target="#ProjectDetailsSlider">
                                                <img src="/assets/img/portfolio/img-1.jpg" className="img-fluid"
                                                     alt="sub-portfolio"/>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a id="carousel-selector-1" data-slide-to="1"
                                               data-target="#ProjectDetailsSlider">
                                                <img src="/assets/img/portfolio/img-2.jpg" className="img-fluid"
                                                     alt="sub-portfolio"/>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a id="carousel-selector-2" data-slide-to="2"
                                               data-target="#ProjectDetailsSlider">
                                                <img src="/assets/img/portfolio/img-3.jpg" className="img-fluid"
                                                     alt="sub-portfolio"/>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a id="carousel-selector-3" data-slide-to="3"
                                               data-target="#ProjectDetailsSlider">
                                                <img src="/assets/img/portfolio/img-4.jpg" className="img-fluid"
                                                     alt="sub-portfolio"/>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a id="carousel-selector-4" data-slide-to="4"
                                               data-target="#ProjectDetailsSlider">
                                                <img src="/assets/img/portfolio/img-5.jpg" className="img-fluid"
                                                     alt="sub-portfolio"/>
                                            </a>
                                        </li>
                                    </ul>

                            </div>

                            <div className="project-specification-2 widget d-lg-none d-xl-none">
                                <h3 className="title-2">Project Info</h3>
                                <ul>
                                    <li>
                                        <strong>Category :</strong> Investment
                                    </li>
                                    <li>
                                        <strong>Date :</strong> 01 February , 2020
                                    </li>
                                    <li>
                                        <strong>Status :</strong> In Progress
                                    </li>
                                    <li>
                                        <strong>Ranking :</strong> 5
                                    </li>
                                    <li>
                                        <strong>Location:</strong> New York
                                    </li>
                                    <li>
                                        <strong>Website:</strong> <a
                                        href="#">www.info@theme.com</a>
                                    </li>
                                </ul>
                                <p>Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed
                                    to using 'Content here, content here', making it look like readable English. Many
                                    desktop publishing packages and web page editors now use Lorem Ipsum as their
                                    default model text, and a search for 'lorem ipsum' will uncover many web sites.</p>
                            </div>

                            <div className="product-description mb-60">
                                <h3 className="title-2">Product Description</h3>
                                <p>Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed
                                    to using 'Content here, content here', making it look like readable English. Many
                                    desktop publishing packages and web page editors now use Lorem Ipsum as their
                                    default model text, and a search for 'lorem ipsum' will uncover many web sites still
                                    in their infancy. Various versions have evolved over the years, sometimes by
                                    accident, sometimes on purpose (injected humour and the like).</p>
                                <p>the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure
                                    itself, because it is pleasure, but because those who do not know how to pursue
                                    pleasure rationally encounter consequences that are extremely painful. Nor again is
                                    there anyone who loves or pursues or desires to obtain pain of itself, because it is
                                    pain, quis varius est elementum a. Aenean congue rhoncus mi, ut bibendum risus
                                    suscipit eu. Curabitur non interdum ligula. Nulla facilisi.</p>
                                <p>Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed
                                    to using 'Content here, content here', making it look like readable English. Many
                                    desktop publishing packages and web page editors now use Lorem Ipsum as their
                                    default model text, and a search for 'lorem ipsum' will uncover many web sites still
                                    in their infancy. Various versions have evolved over the years, sometimes by
                                    accident</p>
                            </div>

                            <div className="comments-section mb-60">
                                <h3 className="title-2">Comments Section</h3>
                                <ul className="comments">
                                    <li>
                                        <div className="comment">
                                            <div className="comment-author">
                                                <a href="#">
                                                    <img src="assets/img/avatar/avatar-13.jpg"
                                                         className="rounded-circle" alt="avatar-13"/>
                                                </a>
                                            </div>
                                            <div className="comment-content">
                                                <div className="comment-meta">
                                                    <div className="comment-meta-author">
                                                        Jane Doe
                                                    </div>
                                                    <div className="comment-meta-reply">
                                                        <a href="#">Reply</a>
                                                    </div>
                                                    <div className="comment-meta-date">
                                                        <span>8:42 PM 10/01/2020</span>
                                                    </div>
                                                </div>
                                                <div className="clearfix"></div>
                                                <div className="comment-body">
                                                    <div className="comment-rating">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star-o"></i>
                                                    </div>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                                                        luctus tincidunt aliquam. Aliquam gravida massa at sem vulputate
                                                        interdum et vel eros. Maecenas eros enim, tincidunt vel turpis
                                                        vel, dapibus tempus nulla. Donec vel nulla dui.
                                                        Pellentesque.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <ul>
                                            <li>
                                                <div className="comment">
                                                    <div className="comment-author">
                                                        <a href="#">
                                                            <img src="assets/img/avatar/avatar-13.jpg"
                                                                 className="rounded-circle" alt="avatar-13"/>
                                                        </a>
                                                    </div>

                                                    <div className="comment-content">
                                                        <div className="comment-meta">
                                                            <div className="comment-meta-author">
                                                                Jane Doe
                                                            </div>

                                                            <div className="comment-meta-reply">
                                                                <a href="#">Reply</a>
                                                            </div>

                                                            <div className="comment-meta-date">
                                                                <span>8:42 PM 10/3/2018</span>
                                                            </div>
                                                        </div>
                                                        <div className="clearfix"></div>
                                                        <div className="comment-body">
                                                            <div className="comment-rating">
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star-half-o"></i>
                                                                <i className="fa fa-star-o"></i>
                                                            </div>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                                Donec luctus tincidunt aliquam. Aliquam gravida massa at
                                                                sem vulputate interdum et vel eros. Maecenas eros enim,
                                                                tincidunt vel turpis vel, dapibus tempus nulla. Donec
                                                                vel nulla dui.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <div className="comment">
                                            <div className="comment-author">
                                                <a href="#">
                                                    <img src="assets/img/avatar/avatar-13.jpg"
                                                         className="rounded-circle" alt="avatar-13"/>
                                                </a>
                                            </div>
                                            <div className="comment-content mrg-bdr">
                                                <div className="comment-meta">
                                                    <div className="comment-meta-author">
                                                        Jane Doe
                                                    </div>
                                                    <div className="comment-meta-reply">
                                                        <a href="#">Reply</a>
                                                    </div>
                                                    <div className="comment-meta-date">
                                                        <span>8:42 PM 10/01/2020</span>
                                                    </div>
                                                </div>
                                                <div className="clearfix"></div>
                                                <div className="comment-body">
                                                    <div className="comment-rating">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star-o"></i>
                                                    </div>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                                                        luctus tincidunt aliquam. Aliquam gravida massa at sem vulputate
                                                        interdum et vel eros. Maecenas eros enim, tincidunt vel turpis
                                                        vel, dapibus tempus nulla.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="contact-1 mb-30">
                                <h3 className="title-2">Contact Form</h3>
                                <div className="container">
                                    <div className="row">
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
                        <div className="col-lg-4 col-md-12 d-none d-xl-block d-lg-block">
                            <div className="sidebar">
                                <div className="project-specification-2 widget">
                                    <h3 className="title-2">Project Info</h3>
                                    <ul>
                                        <li>
                                            <strong>Category :</strong> Investment
                                        </li>
                                        <li>
                                            <strong>Date :</strong> 14 February , 2018
                                        </li>
                                        <li>
                                            <strong>Status :</strong> In Progress
                                        </li>
                                        <li>
                                            <strong>Ranking :</strong> 5
                                        </li>
                                        <li>
                                            <strong>Location:</strong> Dhaka Green Road
                                        </li>
                                        <li>
                                            <strong>Website:</strong> <a
                                            href="">www.info@theme.com</a>
                                        </li>
                                    </ul>
                                    <p>Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
                                        opposed to using 'Content here, content here', making it look like readable
                                        English. Many desktop publishing packages and web page editors now use Lorem
                                        Ipsum as their default model text, and a search for 'lorem ipsum' will uncover
                                        many web sites.</p>
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

export default PortfolioDetails;
