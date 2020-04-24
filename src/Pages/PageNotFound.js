import React, {Component} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Link} from "react-router-dom";

class PageNotFound extends Component {
    render() {
        return (
            <div>
                <Header />

                <div className="pages-404 content-area-7">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="pages-404-inner">
                                    <h1>404</h1>
                                    <div className="e404">
                                        <h3>page Not Found</h3>
                                        <Link className="btn btn-border btn-sm" to="/" role="button">home
                                            page</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="full-page-search">
                    <button type="button" className="close">×</button>
                    <form action="#">
                        <input type="search" value="" placeholder="type keyword(s) here"/>
                        <button type="button" className="btn btn-sm btn-color">Search</button>
                    </form>
                </div>

                <Footer />
            </div>
        );
    }
}

export default PageNotFound;