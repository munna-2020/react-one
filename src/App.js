import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, withRouter} from "react-router-dom";
import HomeOne from "./HomeOne";
import AboutUs from "./Pages/AboutUs";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import PortfolioDetails from "./Pages/PortfolioDetails";
import ServiceDetails from "./Pages/ServiceDetails";
import ContactUs from "./Pages/ContactUs";
import OurTeam from "./Pages/OurTeam";
import ForgetPassword from "./Pages/ForgetPassword";
import Service from "./Pages/Service";
import "./App.css";
import Pricing from "./components/Pricing";
import OurPrice from "./Pages/OurPrice";
import BlogSingleDetails from "./Pages/BlogSingleDetails";
import BlogClassicpage from "./Pages/BlogClassicpage";
import PageNotFound from "./Pages/PageNotFound";
class App extends Component {
    state ={
        loading:true
    }

    componentDidMount() {
        demoAsyncCall().then(() => this.setState({ loading: false }));
    }
    render() {
        const { loading } = this.state;
        if(loading) {
            return (
                <div
                    className="page_loader">
                </div>
            )
        }
        else {
            return (
                <div>
                    <BrowserRouter >
                        <Switch>
                            <Route exact path="/" component={HomeOne}/>
                            <Route exact path={`${process.env.PUBLIC_URL}/portfolio-details`} component={PortfolioDetails}/>
                            <Route exact path={`${process.env.PUBLIC_URL}/about-us`} component={AboutUs}/>
                            <Route exact path={`${process.env.PUBLIC_URL}/services`} component={Service}/>
                            <Route exact path={`${process.env.PUBLIC_URL}/service-details`} component={ServiceDetails}/>
                            <Route exact path={`${process.env.PUBLIC_URL}/gallery`} component={HomeOne}/>
                            <Route exact path={`${process.env.PUBLIC_URL}/contact-us`} component={ContactUs}/>
                            <Route exact path={`${process.env.PUBLIC_URL}/our-team`} component={OurTeam}/>
                            <Route exact path={`${process.env.PUBLIC_URL}/pricing-tables`} component={OurPrice}/>
                            <Route exact path={`${process.env.PUBLIC_URL}/coming-soon`} component={HomeOne}/>
                            <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login}/>
                            <Route exact path={`${process.env.PUBLIC_URL}/register`} component={SignUp}/>
                            <Route exact path={`${process.env.PUBLIC_URL}/forgot-password`} component={ForgetPassword}/>
                            <Route exact path={`${process.env.PUBLIC_URL}/404`} component={PageNotFound}/>
                            <Route exact path={`${process.env.PUBLIC_URL}/our-blog`} component={BlogClassicpage}/>
                            <Route exact path={`${process.env.PUBLIC_URL}/blog-details`} component={BlogSingleDetails}/>
                            <Route exact path={`${process.env.PUBLIC_URL}/shop`} component={HomeOne}/>
                            <Route exact path={`${process.env.PUBLIC_URL}/price`} component={Pricing}/>
                            <Route component={PageNotFound} />
                        </Switch>
                    </BrowserRouter>
                </div>
            );
        }
    }
}
    function demoAsyncCall() {
        return new Promise((resolve) => setTimeout(() => resolve(), 2500));
    }

export default withRouter(App);