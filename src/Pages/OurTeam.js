import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Link} from "react-router-dom";

const OurTeam = () => {
    return (
        <div>
            <Header/>
            <div className="sub-banner overview-bgi">
                <div className="container">
                    <div className="breadcrumb-area">
                        <h1>Team</h1>
                        <ul className="breadcrumbs">
                            <li><Link to="/">Home</Link></li>
                            <li className="active">Team</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="agent content-area-2">
                <div className="container">
                    <div className="main-title">
                        <h1><span>Our</span> Team</h1>
                        <p>Meet out small team that make those great products.</p>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="agent-2">
                                <div className="agent-photo">
                                    <Link to="/team">
                                        <img src="assets/img/avatar/avatar-5.jpg" alt="avatar" className="img-fluid"/>
                                    </Link>
                                </div>
                                <div className="agent-details">
                                    <h5><Link to="/team">Martin Smith</Link></h5>
                                    <p>Web Developer</p>
                                    <ul className="social-list clearfix">
                                        <li><a href="#" className="facebook"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="#" className="twitter"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="#" className="instagram"><i className="fa fa-instagram"></i></a>
                                        </li>
                                        <li><a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="agent-2">
                                <div className="agent-photo">
                                    <Link to="/team">
                                        <img src="assets/img/avatar/avatar-6.jpg" alt="avatar" className="img-fluid"/>
                                    </Link>
                                </div>
                                <div className="agent-details">
                                    <h5><Link to="/team">John Pitarshon</Link></h5>
                                    <p>Creative Director</p>
                                    <ul className="social-list clearfix">
                                        <li><a href="#" className="facebook"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="#" className="twitter"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="#" className="instagram"><i className="fa fa-instagram"></i></a>
                                        </li>
                                        <li><a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="agent-2">
                                <div className="agent-photo">
                                    <Link to="/team">
                                        <img src="assets/img/avatar/avatar-7.jpg" alt="avatar" className="img-fluid"/>
                                    </Link>
                                </div>
                                <div className="agent-details">
                                    <h5><Link to="/team">Maria Blank</Link></h5>
                                    <p>Office Manager</p>
                                    <ul className="social-list clearfix">
                                        <li><a href="#" className="facebook"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="#" className="twitter"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="#" className="instagram"><i className="fa fa-instagram"></i></a>
                                        </li>
                                        <li><a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="agent-2">
                                <div className="agent-photo">
                                    <Link to="team.html">
                                        <img src="assets/img/avatar/avatar-8.jpg" alt="avatar" className="img-fluid"/>
                                    </Link>
                                </div>
                                <div className="agent-details">
                                    <h5><Link to="/team">Karen Paran</Link></h5>
                                    <p>Support Manager</p>
                                    <ul className="social-list clearfix">
                                        <li><a href="#" className="facebook"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="#" className="twitter"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="#" className="instagram"><i className="fa fa-instagram"></i></a>
                                        </li>
                                        <li><a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="agent-2">
                                <div className="agent-photo">
                                    <Link to="/team">
                                        <img src="assets/img/avatar/avatar-6.jpg" alt="avatar" className="img-fluid"/>
                                    </Link>
                                </div>
                                <div className="agent-details">
                                    <h5><Link to="/team">John Pitarshon</Link></h5>
                                    <p>Creative Director</p>
                                    <ul className="social-list clearfix">
                                        <li><a href="#" className="facebook"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="#" className="twitter"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="#" className="instagram"><i className="fa fa-instagram"></i></a>
                                        </li>
                                        <li><a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="agent-2">
                                <div className="agent-photo">
                                    <Link to="/team">
                                        <img src="assets/img/avatar/avatar-7.jpg" alt="avatar" className="img-fluid"/>
                                    </Link>
                                </div>
                                <div className="agent-details">
                                    <h5><Link to="/team">Maria Blank</Link></h5>
                                    <p>Office Manager</p>
                                    <ul className="social-list clearfix">
                                        <li><a href="#" className="facebook"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="#" className="twitter"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="#" className="instagram"><i className="fa fa-instagram"></i></a>
                                        </li>
                                        <li><a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="agent-2">
                                <div className="agent-photo">
                                    <Link to="/team">
                                        <img src="assets/img/avatar/avatar-8.jpg" alt="avatar" className="img-fluid"/>
                                    </Link>
                                </div>
                                <div className="agent-details">
                                    <h5><Link to="/team">Karen Paran</Link></h5>
                                    <p>Support Manager</p>
                                    <ul className="social-list clearfix">
                                        <li><a href="#" className="facebook"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="#" className="twitter"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="#" className="instagram"><i className="fa fa-instagram"></i></a>
                                        </li>
                                        <li><a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="agent-2">
                                <div className="agent-photo">
                                    <Link to="/team">
                                        <img src="assets/img/avatar/avatar-5.jpg" alt="avatar" className="img-fluid"/>
                                    </Link>
                                </div>
                                <div className="agent-details">
                                    <h5><Link to="/team">Martin Smith</Link></h5>
                                    <p>Web Developer</p>
                                    <ul className="social-list clearfix">
                                        <li><a href="#" className="facebook"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="#" className="twitter"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="#" className="instagram"><i className="fa fa-instagram"></i></a>
                                        </li>
                                        <li><a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a></li>
                                    </ul>
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

export default OurTeam;
