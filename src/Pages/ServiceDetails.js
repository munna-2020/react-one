import React, {Component} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Link} from "react-router-dom";
import {  MDBCollapse, MDBCard, MDBCardBody, } from "mdbreact";

class ServiceDetails extends Component {
    state={
        collapseID: "collapse3"
    }

    toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));

    render() {
        const { collapseID } = this.state;

        return (
            <div>
                <Header/>
                <div className="sub-banner overview-bgi">
                    <div className="container">
                        <div className="breadcrumb-area">
                            <h1>Services Details</h1>
                            <ul className="breadcrumbs">
                                <li><Link to="/">Home</Link></li>
                                <li className="active">Services Details</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="services-details-section content-area-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-12">
                                <div className="services-details">
                                    <div className="photo">
                                        <img src="assets/img/portfolio/img-4.jpg" alt="services" className="img-fluid"/>
                                    </div>
                                    <div className="detail">
                                        <h3 className="title-2">
                                            Praesent nec nisl iaculis
                                        </h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                            Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                            unknown printer took a galley of type and scrambled it to make a type specimen
                                            book. It has survived not only five centuries.But also the leap into electronic
                                            typesetting,
                                            remaining essentially unchanged. It was popularised in the 1960s with the
                                            release of Letraset sheets containing Lorem Ipsum passages, and more recently
                                            with desktop publishing software like Aldus PageMaker including versions of
                                            Lorem Ipsum.But also the leap into electronic typesetting,</p>

                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                            Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                            unknown printer took a galley of type and scrambled it to make a type specimen
                                            book. It has survived not only five centuries.But also the leap into electronic
                                            typesetting, remaining essentially unchanged.</p>
                                        <br/>

                                        <div className="row">
                                            <div className="col-md-12">
                                                <div id="faq" className="faq-accordion">
                                                    <div className="card m-b-0">
                                                        <div className="card-header">
                                                            <a className="card-title collapsed" onClick={this.toggleCollapse("collapse1")}>
                                                                What do you mean by an End Product?
                                                            </a>
                                                        </div>
                                                        <MDBCollapse id="collapse1"  isOpen={collapseID}>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                                Donec luctus tincidunt aliquam. Aliquam gravida massa at
                                                                sem vulputate interdum et vel eros. Maecenas eros enim,
                                                                tincidunt vel turpis vel, dapibus tempus nulla. Donec
                                                                vel nulla dui. Pellentesque sed ante sed ligula
                                                                hendrerit condimentum. Suspendisse rhoncus fringilla
                                                                ipsum quis porta. Morbi tincidunt viverra pharetra.
                                                                Vestibulum vel mauris et odio lobortis laoreet eget
                                                                eu magna. Proin mauris erat, luctus at nulla ut,
                                                                lobortis mattis magna. Morbi a arcu lacus. Maecenas
                                                                tristique velit vitae nisi consectetur, in mattis diam
                                                                sodales. Mauris sagittis sem mattis justo bibendum, a
                                                                eleifend dolor facilisis. Mauris nec pharetra tortor, ac
                                                                aliquam felis. Nunc pretium erat sed quam consectetur
                                                                fringilla.</p>
                                                            <hr/>
                                                            <span className="answer-helpful">Was this answer helpful?  <a
                                                                href="#" className="yes"><i
                                                                className="fa fa-thumbs-o-up"></i></a>
                                                                    <a href="#" className="no"><i
                                                                        className="fa fa-thumbs-o-down"></i></a></span>
                                                        </MDBCollapse>

                                                        <div className="card-header">
                                                            <a className="card-title collapsed" onClick={this.toggleCollapse("collapse2")}>
                                                                Where do I find my Purchase or License code?
                                                            </a>
                                                        </div>
                                                        <MDBCollapse id="collapse2" isOpen={collapseID}>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                                Donec luctus tincidunt aliquam. Aliquam gravida massa at
                                                                sem vulputate interdum et vel eros. Maecenas eros enim,
                                                                tincidunt vel turpis vel, dapibus tempus nulla. Donec
                                                                vel nulla dui. Pellentesque sed ante sed ligula
                                                                hendrerit condimentum. Suspendisse rhoncus fringilla
                                                                ipsum quis porta. Morbi tincidunt viverra pharetra.
                                                                Vestibulum vel mauris et odio lobortis laoreet eget
                                                                eu magna. Proin mauris erat, luctus at nulla ut,
                                                                lobortis mattis magna. Morbi a arcu lacus. Maecenas
                                                                tristique velit vitae nisi consectetur, in mattis diam
                                                                sodales. Mauris sagittis sem mattis justo bibendum, a
                                                                eleifend dolor facilisis. Mauris nec pharetra tortor, ac
                                                                aliquam felis. Nunc pretium erat sed quam consectetur
                                                                fringilla.</p>
                                                            <hr/>
                                                            <span className="answer-helpful">Was this answer helpful?  <a
                                                                href="#" className="yes"><i
                                                                className="fa fa-thumbs-o-up"></i></a> <a href="#"
                                                                                                          className="no"><i
                                                                className="fa fa-thumbs-o-down"></i></a></span>
                                                        </MDBCollapse>

                                                        <div className="card-header">
                                                            <a className="card-title collapsed" onClick={this.toggleCollapse("collapse3")}>
                                                                Do I need to buy a licence for each site?
                                                            </a>
                                                        </div>
                                                        <MDBCollapse id="collapse3" isOpen={collapseID}>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                                Donec luctus tincidunt aliquam. Aliquam gravida massa at
                                                                sem vulputate interdum et vel eros. Maecenas eros enim,
                                                                tincidunt vel turpis vel, dapibus tempus nulla. Donec
                                                                vel nulla dui. Pellentesque sed ante sed ligula
                                                                hendrerit condimentum. Suspendisse rhoncus fringilla
                                                                ipsum quis porta. Morbi tincidunt viverra pharetra.
                                                                Vestibulum vel mauris et odio lobortis laoreet eget
                                                                eu magna. Proin mauris erat, luctus at nulla ut,
                                                                lobortis mattis magna. Morbi a arcu lacus. Maecenas
                                                                tristique velit vitae nisi consectetur, in mattis diam
                                                                sodales. Mauris sagittis sem mattis justo bibendum, a
                                                                eleifend dolor facilisis. Mauris nec pharetra tortor, ac
                                                                aliquam felis. Nunc pretium erat sed quam consectetur
                                                                fringilla.</p>
                                                            <hr/>
                                                            <span className="answer-helpful">Was this answer helpful?  <a
                                                                href="#" className="yes"><i
                                                                className="fa fa-thumbs-o-up"></i></a> <a href="#"
                                                                                                          className="no"><i
                                                                className="fa fa-thumbs-o-down"></i></a></span>
                                                        </MDBCollapse>

                                                        <div className="card-header">
                                                            <a className="card-title collapsed" onClick={this.toggleCollapse("collapse4")}>
                                                                Is my license transferable?
                                                            </a>
                                                        </div>
                                                        <MDBCollapse id="collapse4" isOpen={collapseID}>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                                Donec luctus tincidunt aliquam. Aliquam gravida massa at
                                                                sem vulputate interdum et vel eros. Maecenas eros enim,
                                                                tincidunt vel turpis vel, dapibus tempus nulla. Donec
                                                                vel nulla dui. Pellentesque sed ante sed ligula
                                                                hendrerit condimentum. Suspendisse rhoncus fringilla
                                                                ipsum quis porta. Morbi tincidunt viverra pharetra.
                                                                Vestibulum vel mauris et odio lobortis laoreet eget
                                                                eu magna. Proin mauris erat, luctus at nulla ut,
                                                                lobortis mattis magna. Morbi a arcu lacus. Maecenas
                                                                tristique velit vitae nisi consectetur, in mattis diam
                                                                sodales. Mauris sagittis sem mattis justo bibendum, a
                                                                eleifend dolor facilisis. Mauris nec pharetra tortor, ac
                                                                aliquam felis. Nunc pretium erat sed quam consectetur
                                                                fringilla.</p>
                                                            <hr/>
                                                            <span className="answer-helpful">Was this answer helpful?  <a
                                                                href="#" className="yes"><i
                                                                className="fa fa-thumbs-o-up"></i></a> <a href="#"
                                                                                                          className="no"><i
                                                                className="fa fa-thumbs-o-down"></i></a></span>
                                                        </MDBCollapse>

                                                        <div className="card-header border-0">
                                                            <a className="card-title collapsed" onClick={this.toggleCollapse("collapse5")}>
                                                                Do I need a separate license each time I use an item in
                                                                a series?
                                                            </a>
                                                        </div>
                                                        <MDBCollapse id="collapse5" isOpen={collapseID}>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                                Donec luctus tincidunt aliquam. Aliquam gravida massa at
                                                                sem vulputate interdum et vel eros. Maecenas eros enim,
                                                                tincidunt vel turpis vel, dapibus tempus nulla. Donec
                                                                vel nulla dui. Pellentesque sed ante sed ligula
                                                                hendrerit condimentum. Suspendisse rhoncus fringilla
                                                                ipsum quis porta. Morbi tincidunt viverra pharetra.
                                                                Vestibulum vel mauris et odio lobortis laoreet eget
                                                                eu magna. Proin mauris erat, luctus at nulla ut,
                                                                lobortis mattis magna. Morbi a arcu lacus. Maecenas
                                                                tristique velit vitae nisi consectetur, in mattis diam
                                                                sodales. Mauris sagittis sem mattis justo bibendum, a
                                                                eleifend dolor facilisis. Mauris nec pharetra tortor, ac
                                                                aliquam felis. Nunc pretium erat sed quam consectetur
                                                                fringilla.</p>
                                                            <hr/>
                                                            <span className="answer-helpful">Was this answer helpful?  <a
                                                                href="#" className="yes"><i
                                                                className="fa fa-thumbs-o-up"></i></a>
                                                                    <a href="#" className="no"><i
                                                                        className="fa fa-thumbs-o-down"></i></a></span>
                                                        </MDBCollapse>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="sidebar mb-30">
                                    <div className="widget search-box">
                                        <h3 className="sidebar-title">Search</h3>
                                        <form className="form-search" method="GET">
                                            <input type="text" className="form-control" placeholder="Search"/>
                                            <button type="submit" className="btn"><i className="fa fa-search"></i>
                                            </button>
                                        </form>
                                    </div>
                                    <div className="widget categories">
                                        <h3 className="sidebar-title">Categories</h3>
                                        <ul>
                                            <li><a href="#">App Development<span>(12)</span></a></li>
                                            <li><a href="#">Graphic Design<span>(8)</span></a></li>
                                            <li><a href="#">Web Design<span>(23)</span></a></li>
                                            <li><a href="#">3D Design<span>(5)</span></a></li>
                                            <li><a href="#">Plugin Development<span>(63)</span></a></li>
                                            <li><a href="#">Expert Review<span>(7)</span></a></li>
                                        </ul>
                                    </div>
                                    <div className="widget w-2 tags clearfix">
                                        <h3 className="sidebar-title">Tags</h3>
                                        <ul className="tags">
                                            <li><a href="#">Development</a></li>
                                            <li><a href="#">Design</a></li>
                                            <li><a href="#">Css</a></li>
                                            <li><a href="#">Photoshop</a></li>
                                            <li><a href="#">Php</a></li>
                                            <li><a href="#">Wordpress</a></li>
                                            <li><a href="#">Graphic</a></li>
                                            <li><a href="#">UI-UX</a></li>
                                            <li><a href="#">Responsive</a></li>
                                            <li><a href="#">Business</a></li>
                                            <li><a href="#">Financial solve</a></li>
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
    }
}

export default ServiceDetails;


