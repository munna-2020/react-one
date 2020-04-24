import React from 'react';
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <div className="contact-section overview-bgi">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-content-box">
                            <div className="details">
                                <Link to="/">
                                    <img src="assets/img/logos/black-logo.png" alt="logo"/>
                                </Link>
                                <h3>Sign into your account</h3>
                                <form
                                    action="/"
                                    method="GET">
                                    <div className="form-group">
                                        <input type="email" name="email" className="input-text"
                                               placeholder="Email Address"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" name="Password" className="input-text"
                                               placeholder="Password"/>
                                    </div>
                                    <div className="checkbox">
                                        <div className="ez-checkbox pull-left">
                                            <label>
                                                <input type="checkbox" className="ez-hide"/>
                                                    Remember me
                                            </label>
                                        </div>
                                        <Link to="/forgot-password" className="link-not-important pull-right">Forgot
                                            Password</Link>
                                        <div className="clearfix"></div>
                                    </div>
                                    <div className="form-group mb-0">
                                        <button type="submit" className="btn-md btn-block btn btn-color">login</button>
                                    </div>
                                </form>

                                <ul className="social-list clearfix">
                                    <li><a href="#" className="facebook-bg"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#" className="twitter-bg"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#" className="google-bg"><i className="fa fa-google-plus"></i></a></li>
                                    <li><a href="#" className="linkedin-bg"><i className="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>

                            <div className="footer">
                                <span>Don't have an account? <Link to="/register">Register here</Link></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
