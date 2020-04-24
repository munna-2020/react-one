import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class MobileMenu extends Component{

    state = {
        active : false
    }

    toggleMobileMenu = () => {
        this.setState({
            active: !this.state.active
        })
    }


    render(){
        return(
            <div>
                <div className= {`main-header sticky-header ${this.state.active ? 'active': ''} `} id="main-header-2">
                    <a href="#/" className="offcanvas-menu-close" id="mobile-menu-close-trigger" onClick={this.toggleMobileMenu}>
                        <i className="ion-android-close" />
                    </a>
                    <div className="navbar-collapse collapse w-100 " id="navbar">
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
                                    aria-labelledby="navbarDropdownMenuLink "
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
                                    <Link className="dropdown-item" to="/portfolio-details">
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
                                        <Link className="dropdown-item" to="/about-us">
                                            About Us
                                        </Link>
                                    </li>
                                    <li className="dropdown-submenu">
                                        <Link className="dropdown-item dropdown-toggle" to="/">
                                            Services
                                        </Link>
                                        <ul className="dropdown-menu">

                                            <li>
                                                <Link
                                                    className="dropdown-item"
                                                    to="/service-details"
                                                >
                                                    Services Details
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li>
                                        <Link className="dropdown-item" to="/contact-us">
                                            Contact Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/our-team">
                                            Team
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/pricing-tables">
                                            Pricing Tables
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className="dropdown-item" to="/coming-soon">
                                            Coming Soon
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/login">
                                            Login
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/register">
                                            Register
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/forgot-password">
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
                                        <Link className="dropdown-item " to="/our-blog">
                                            Classic
                                        </Link>
                                    </li>

                                    <li className="dropdown-submenu">
                                        <Link className="dropdown-item " to="/blog-details">
                                            Blog Details
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link
                                    className="nav-link dropdown-toggle"
                                    to="/shop"

                                >
                                    Shop
                                </Link>
                            </li>
                            <li className="nav-item dropdown mtbl">
                                <Link
                                    className="btn btn-sm btn-white-sm-outline btn-round signup-link"
                                    to="/login"
                                >
                                    Login
                                </Link>
                                <Link
                                    className="btn btn-sm btn-theme btn-round signup-link"
                                    to="/signup"
                                >
                                    Signup
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                {/*=======  End of offcanvas mobile menu  =======*/}

            </div>
        )
    }
}

export default MobileMenu;