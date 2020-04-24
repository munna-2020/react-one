import React, {Component} from 'react';
import {Link} from "react-router-dom";
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";
class Portfolio extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentDiv: "all"
        }

    }
    render() {
        return (
            <div>
                <LightgalleryProvider>
                    <div className="portfolio-area content-area-8">
                    <div className="container-fluid">
                        <div className="main-title">
                            <h1><span>Our</span> portfolio</h1>
                            <ul className="list-inline-listing filters filteriz-navigation" id="filter">
                                <li className="active btn filtr-button "><a onClick={() => this.setState({ currentDiv: "all" })}  className={this.state.currentDiv === "all" ? "categories " : "categories" }>All</a></li>
                                <li className=" btn btn-inline filtr-button "><a onClick={() => this.setState({ currentDiv: "web" })} className={this.state.currentDiv === "web" ? "categories " : "categories" } >Web</a></li>
                                <li className=" btn btn-inline filtr-button "><a onClick={() => this.setState({ currentDiv: "designing" })} className={this.state.currentDiv === "designing "  ? "categories " : "categories" } >Designing</a></li>
                                <li className=" btn btn-inline filtr-button "><a onClick={() => this.setState({ currentDiv: "word-press" })} className={this.state.currentDiv === "word-press" ? "categories " : "categories" } >Word Press</a></li>
                            </ul>
                        </div>
                        <div className="row filter-portfolio">

                                <div className="col-lg-3 col-md-4 col-sm-6 col-pad filter-item " >
                                    <div className="property-box">
                                            {this.state.currentDiv === "web" || this.state.currentDiv ===  "designing" || this.state.currentDiv ===  "word-press" || this.state.currentDiv ===  "all" ?
                                                <div className="property-thumbnail">
                                                    <Link to={`${process.env.PUBLIC_URL}/portfolio-details`} className="property-img">
                                                        <img src="assets/img/portfolio/img-1.jpg" alt="portfolio" className="img-fluid"/>
                                                    </Link>
                                                    <div className="property-overlay">
                                                        <Link to={`${process.env.PUBLIC_URL}/portfolio-details`} className="overlay-link">
                                                            <i className="fa fa-link"></i>
                                                        </Link>
                                                        <div className="property-magnify-gallery">
                                                            <a href="assets/img/portfolio/img-1.jpg" className="overlay-link">
                                                                <i className="fa fa-search-plus"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            : null}
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-pad filter-item ">
                                    <div className="property-box">
                                        {this.state.currentDiv === "development" || this.state.currentDiv ===  "web" || this.state.currentDiv ===  "all" ?
                                            <div className="property-thumbnail">
                                                <Link to={`${process.env.PUBLIC_URL}/portfolio-details`} className="property-img">
                                                    <img src="/assets/img/portfolio/img-2.jpg" alt="portfolio" className="img-fluid"/>
                                                </Link>
                                                <div className="property-overlay">
                                                    <Link to={`${process.env.PUBLIC_URL}/portfolio-details`} className="overlay-link">
                                                        <i className="fa fa-link"></i>
                                                    </Link>
                                                    <div className="property-magnify-gallery">
                                                        <a href="assets/img/portfolio/img-2.jpg" className="overlay-link">
                                                            <i className="fa fa-search-plus"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            : null}
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-4 col-sm-6 col-pad filter-item ">
                                    <div className="property-box">
                                        {this.state.currentDiv === "designing" || this.state.currentDiv ===  "web" || this.state.currentDiv ===  "all" ?
                                        <div className="property-thumbnail">
                                            <Link to={`${process.env.PUBLIC_URL}/portfolio-details`} className="property-img">
                                                <img src="/assets/img/portfolio/img-3.jpg" alt="portfolio" className="img-fluid"/>
                                            </Link>
                                            <div className="property-overlay">
                                                <Link to={`${process.env.PUBLIC_URL}/portfolio-details`} className="overlay-link">
                                                    <i className="fa fa-link"></i>
                                                </Link>
                                                <div className="property-magnify-gallery">
                                                    <a href="/assets/img/portfolio/img-3.jpg" className="overlay-link">
                                                        <i className="fa fa-search-plus"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                            : null}
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-4 col-sm-6 col-pad filter-item " >
                                    <div className="property-box">
                                            {this.state.currentDiv === "designing" || this.state.currentDiv ===  "word-press" || this.state.currentDiv ===  "all" ?
                                                <div className="property-thumbnail">
                                                    <Link to={`${process.env.PUBLIC_URL}/portfolio-details`} className="property-img">
                                                        <img src="/assets/img/portfolio/img-4.jpg" alt="portfolio" className="img-fluid"/>
                                                    </Link>
                                                    <div className="property-overlay">
                                                        <Link to={`${process.env.PUBLIC_URL}/portfolio-details`} className="overlay-link">
                                                            <i className="fa fa-link"></i>
                                                        </Link>
                                                        <div className="property-magnify-gallery">
                                                            <a href="/assets/img/portfolio/img-4.jpg" className="overlay-link">
                                                                <i className="fa fa-search-plus"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            : null}
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-4 col-sm-6 col-pad filter-item " >
                                    <div className="property-box">
                                        {this.state.currentDiv === "designing" || this.state.currentDiv ===  "word-press" || this.state.currentDiv ===  "all" ?
                                        <div className="property-thumbnail">
                                            <Link to={`${process.env.PUBLIC_URL}/portfolio-details`} className="property-img">
                                                <img src="assets/img/portfolio/img-5.jpg" alt="portfolio" className="img-fluid"/>
                                            </Link>
                                            <div className="property-overlay">
                                                <Link to={`${process.env.PUBLIC_URL}/portfolio-details`} className="overlay-link">
                                                    <i className="fa fa-link"></i>
                                                </Link>
                                                <div className="property-magnify-gallery">
                                                    <a href="assets/img/portfolio/img-5.jpg" className="overlay-link">
                                                        <i className="fa fa-search-plus"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                            : null}
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-4 col-sm-6 col-pad filter-item " >
                                    <div className="property-box">
                                        {this.state.currentDiv === "designing" || this.state.currentDiv ===  "web" || this.state.currentDiv ===  "all" ?
                                        <div className="property-thumbnail">
                                            <Link to={`${process.env.PUBLIC_URL}/portfolio-details`} className="property-img">
                                                <img src="assets/img/portfolio/img-6.jpg" alt="portfolio" className="img-fluid"/>
                                            </Link>
                                            <div className="property-overlay">
                                                <Link to={`${process.env.PUBLIC_URL}/portfolio-details`} className="overlay-link">
                                                    <i className="fa fa-link"></i>
                                                </Link>
                                                <div className="property-magnify-gallery">
                                                    <a href="assets/img/portfolio/img-6.jpg" className="overlay-link">
                                                        <i className="fa fa-search-plus"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                            : null}
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-4 col-sm-6 col-pad filter-item " >
                                    <div className="property-box">
                                        {this.state.currentDiv === "designing" || this.state.currentDiv ===  "web" || this.state.currentDiv ===  "all" ?
                                        <div className="property-thumbnail">
                                            <Link to={`${process.env.PUBLIC_URL}/portfolio-details`} className="property-img">
                                                <img src="assets/img/portfolio/img-7.jpg" alt="portfolio" className="img-fluid"/>
                                            </Link>
                                            <div className="property-overlay">
                                                <Link to={`${process.env.PUBLIC_URL}/portfolio-details`} className="overlay-link">
                                                    <i className="fa fa-link"></i>
                                                </Link>
                                                <div className="property-magnify-gallery">
                                                    <a href="assets/img/portfolio/img-7.jpg" className="overlay-link">
                                                        <i className="fa fa-search-plus"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                            : null}
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-pad filter-item " >
                                    <div className="property-box">
                                        {this.state.currentDiv === "designing" || this.state.currentDiv ===  "web" || this.state.currentDiv ===  "all" ?
                                        <div className="property-thumbnail">
                                            <div  className="property-img">
                                                <img src="assets/img/portfolio/img-8.jpg" alt="portfolio" className="img-fluid"/>
                                            </div>
                                            <div className="property-overlay">
                                                <Link to={`${process.env.PUBLIC_URL}/portfolio-details`} className="overlay-link">
                                                    <i className="fa fa-link"></i>
                                                </Link>
                                                <div className="property-magnify-gallery">
                                                    <a href="assets/img/portfolio/img-8.jpg" className="overlay-link">
                                                        <i className="fa fa-search-plus"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                            : null}
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
                </LightgalleryProvider>
            </div>
        );
    }
}

export default Portfolio;