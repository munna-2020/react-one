import React from 'react';
import {Link} from "react-router-dom";

const Blog = () => {
    return (
        <div className="blog content-area-2">
            <div className="container">
                <div className="main-title">
                    <h1><span>Our</span> Blog</h1>
                    <p>Check out some recent news posts.</p>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="blog-1">
                            <div className="blog-photo">
                                <img src="/assets/img/blog/blog-3.jpg" alt="blog" className="img-fluid"/>
                                    <div className="profile-user">
                                        <img src="/assets/img/avatar/avatar-3.jpg" alt="user"/>
                                    </div>
                            </div>
                            <div className="detail">
                                <div className="date-box">
                                    <span>27</span>Feb
                                </div>
                                <div className="post-meta clearfix">
                                    <ul>
                                        <li>
                                            <strong><a href="#">Antony Toms</a></strong>
                                        </li>
                                        <li className="float-right mr-0"><a href="#"><i
                                            className="fa fa-commenting-o"></i></a>15
                                        </li>
                                        <li className="float-right"><a href="#"><i className="flaticon-time"></i></a>5k
                                        </li>
                                    </ul>
                                </div>
                                <h3>
                                    <Link to="/">Mattis magna neque finibus maximus.</Link>
                                </h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 d-none d-xl-block d-lg-block">
                        <div className="blog-1">
                            <div className="blog-photo">
                                <img src="assets/img/blog/blog-2.jpg" alt="blog" className="img-fluid"/>
                                    <div className="profile-user">
                                        <img src="assets/img/avatar/avatar-2.jpg" alt="user"/>
                                    </div>
                            </div>
                            <div className="detail">
                                <div className="date-box">
                                    <span>27</span>Feb
                                </div>
                                <div className="post-meta clearfix">
                                    <ul>
                                        <li>
                                            <strong><a href="#">Teseira Jeklin</a></strong>
                                        </li>
                                        <li className="float-right mr-0"><a href="#"><i
                                            className="fa fa-commenting-o"></i></a>15
                                        </li>
                                        <li className="float-right"><a href="#"><i className="flaticon-time"></i></a>5k
                                        </li>
                                    </ul>
                                </div>
                                <h3>
                                    <Link to="/">Attis magna ac neque finibus maximus.</Link>
                                </h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="blog-1">
                            <div className="blog-photo">
                                <img src="assets/img/blog/blog.jpg" alt="blog" className="img-fluid"/>
                                    <div className="profile-user">
                                        <img src="assets/img/avatar/avatar.jpg" alt="user"/>
                                    </div>
                            </div>
                            <div className="detail">
                                <div className="date-box">
                                    <span>27</span>Feb
                                </div>
                                <div className="post-meta clearfix">
                                    <ul>
                                        <li>
                                            <strong><a href="#">Teseira Jeklin</a></strong>
                                        </li>
                                        <li className="float-right mr-0"><a href="#"><i
                                            className="fa fa-commenting-o"></i></a>15
                                        </li>
                                        <li className="float-right"><a href="#"><i className="flaticon-time"></i></a>5k
                                        </li>
                                    </ul>
                                </div>
                                <h3>
                                    <Link to="/">Sapien eu sem consectetur amet
                                        scelerisque.</Link>
                                </h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
