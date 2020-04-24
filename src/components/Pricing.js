import React from 'react';

const Pricing = () => {
    return (
        <div className="pricing-tables content-area-2">
            <div className="container">
                <div className="main-title">
                    <h1><span>Our</span> Pricing</h1>
                    <p>Finding your perfect plan for your business.</p>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-12">
                        <div className="pricing-2">
                            <div className="title">Basic Plan</div>
                            <div className="price-for-user">
                                <div className="price"><sup>$</sup><span className="dolar">54</span>
                                    <small className="month">per month</small>
                                </div>
                            </div>
                            <div className="content">
                                <ul>
                                    <li>20 Projects</li>
                                    <li>32GB Storage</li>
                                    <li>50 Email Accounts</li>
                                    <li>12GB Bandwidth</li>
                                    <li>32GB Storage</li>
                                </ul>
                            </div>
                            <div className="button"><a href="#" className="btn btn-border btn-sm">Get started</a></div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12 ">
                        <div className="pricing-2">
                            <div className="title">Professional</div>
                            <div className="price-for-user">
                                <div className="price"><sup>$</sup><span className="dolar">35</span>
                                    <small className="month">per month</small>
                                </div>
                            </div>
                            <div className="content">
                                <ul>
                                    <li>20 Projects</li>
                                    <li>32GB Storage</li>
                                    <li>50 Email Accounts</li>
                                    <li>12GB Bandwidth</li>
                                    <li>32GB Storage</li>
                                </ul>
                            </div>
                            <div className="button"><a href="#" className="btn btn-sm btn-color">Get started</a></div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12">
                        <div className="pricing-2">
                            <div className="title">Exclusive</div>
                            <div className="price-for-user">
                                <div className="price"><sup>$</sup><span className="dolar">38</span>
                                    <small className="month">per month</small>
                                </div>
                            </div>
                            <div className="content">
                                <ul>
                                    <li>20 Projects</li>
                                    <li>32GB Storage</li>
                                    <li>50 Email Accounts</li>
                                    <li>12GB Bandwidth</li>
                                    <li>32GB Storage</li>
                                </ul>
                            </div>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <div className="button"><a href="#" className="btn btn-border btn-sm">Get started</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
