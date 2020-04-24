import React, {Component} from 'react';
import AUX from "../hoc/Aux_";
import {Link} from "react-router-dom";

class Header extends Component {

    constructor(){
        super()
        this.state = {
            sticky: false,

        };
    }
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);

    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {

        if (window.scrollY > 70) {
            this.setState({
                sticky: true
            });
        } else if (window.scrollY < 70) {
            this.setState({
                sticky: false
            });
        }

    }

    handleToggle = () => {
        this.setState({
            mobileToggle: !this.state.mobileToggle
        })
    }


    render() {
        return (
            <AUX>
                <header className={`main-header sticky-header ${this.state.sticky ? 'header-shrink' : ''}`} id="main-header-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <nav className="navbar navbar-expand-lg navbar-light rounded">
                                    <Link
                                        className="navbar-brand logo navbar-brand d-flex mr-auto"
                                        to="/"
                                    >
                                        <img src="../assets/img/logos/black-logo.png" alt="logo" />
                                    </Link>
                                    <button onClick={this.handleToggle}
                                        className="navbar-toggler"
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#navbar"
                                        aria-controls="navbar"
                                        aria-expanded="false"
                                        aria-label="Toggle navigation"
                                    >
                                        <span className="fa fa-bars" />
                                    </button>
                                    <div className={`navbar-collapse collapse w-100 ${this.state.mobileToggle ? 'show' : ''}`} id="navbar">
                                        <ul className="navbar-nav ml-auto">
                                            <li className="nav-item dropdown active">
                                                <Link
                                                    className="nav-link dropdown-toggle"
                                                    to="/"

                                                >
                                                    Home
                                                </Link>
                                                <ul
                                                    className="dropdown-menu"
                                                    aria-labelledby={`navbarDropdownMenuLink ${this.state.mobileToggle ? 'show' : ''}`}
                                                >
                                                    <li>
                                                        <Link className="dropdown-item" to="/">
                                                            Home 1
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <Link
                                                    className="nav-link dropdown-toggle"
                                                    to="/"

                                                >
                                                    Portfolio
                                                </Link>
                                                <div
                                                    className="dropdown-menu"
                                                    aria-labelledby="navbarDropdown9"
                                                >
                                                    <Link className="dropdown-item" to={`${process.env.PUBLIC_URL}/portfolio-details`}>
                                                        Portfolio Details
                                                    </Link>
                                                </div>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <Link
                                                    className="nav-link dropdown-toggle"
                                                    to="/"

                                                >
                                                    Pages
                                                </Link>
                                                <ul
                                                    className="dropdown-menu"
                                                    aria-labelledby="navbarDropdownMenuLink"
                                                >
                                                    <li>
                                                        <Link className="dropdown-item" to={`${process.env.PUBLIC_URL}/about-us`}>
                                                            About Us
                                                        </Link>
                                                    </li>
                                                    <li className="dropdown-submenu">
                                                        <Link className="dropdown-item dropdown-toggle" to="#">
                                                            Services
                                                        </Link>
                                                        <ul className="dropdown-menu">

                                                            <li>
                                                                <Link
                                                                    className="dropdown-item"
                                                                    to={`${process.env.PUBLIC_URL}/service-details`}
                                                                >
                                                                    Services Details
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </li>

                                                    <li>
                                                        <Link className="dropdown-item" to={`${process.env.PUBLIC_URL}/contact-us`}>
                                                            Contact Us
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link className="dropdown-item" to={`${process.env.PUBLIC_URL}/our-team`}>
                                                            Team
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link className="dropdown-item" to={`${process.env.PUBLIC_URL}/pricing-tables`}>
                                                            Pricing Tables
                                                        </Link>
                                                    </li>

                                                    <li>
                                                        <Link className="dropdown-item" to={`${process.env.PUBLIC_URL}/coming-soon`}>
                                                            Coming Soon
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link className="dropdown-item" to={`${process.env.PUBLIC_URL}/login`}>
                                                            Login
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link className="dropdown-item" to={`${process.env.PUBLIC_URL}/register`}>
                                                            Register
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link className="dropdown-item" to={`${process.env.PUBLIC_URL}/forgot-password`}>
                                                            Forgot Password
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link className="dropdown-item" to="/page-not-found">
                                                            404 Page
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <Link
                                                    className="nav-link dropdown-toggle"
                                                    to="/"
                                                >
                                                    Blog
                                                </Link>
                                                <ul
                                                    className="dropdown-menu"
                                                    aria-labelledby="navbarDropdownMenuLink"
                                                >
                                                    <li className="dropdown-submenu">
                                                        <Link className="dropdown-item " to={`${process.env.PUBLIC_URL}/our-blog`}>
                                                            Classic
                                                        </Link>
                                                    </li>

                                                    <li className="dropdown-submenu">
                                                        <Link className="dropdown-item " to={`${process.env.PUBLIC_URL}/blog-details`}>
                                                            Blog Details
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <Link
                                                    className="nav-link dropdown-toggle"
                                                    to={`${process.env.PUBLIC_URL}/shop`}
                                                >
                                                    Shop
                                                </Link>
                                            </li>
                                            <li className="nav-item dropdown mtbl">
                                                <Link
                                                    className="btn btn-sm btn-white-sm-outline btn-round signup-link"
                                                    to={`${process.env.PUBLIC_URL}/login`}
                                                >
                                                    Login
                                                </Link>
                                                <Link
                                                    className="btn btn-sm btn-theme btn-round signup-link"
                                                    to={`${process.env.PUBLIC_URL}/register`}
                                                >
                                                    Signup
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>
            </AUX>
        );
    }
}

export default Header;