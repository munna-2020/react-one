import React, {Component} from 'react';
import Banner from "./components/Banner";
import Manage from "./components/Manage";
import OurService from "./components/OurService";
import Portfolio from "./components/Portfolio";
import Team from "./components/Team";
import Counter from "./components/Counter";
import Pricing from "./components/Pricing";
import Testimonial from "./components/Testimonial";
import Blog from "./components/Blog";
import Intro from "./components/Intro";
import Footer from "./components/Footer";
import Header from "./components/Header";
import BrandLogoSlider from "./components/BrandLogoSlider";

class HomeOne extends Component {
    render() {
        return (
            <div>
                <Header />
                <Banner />
                <Manage />
                <OurService />
                <Portfolio />
                <Team />
                <Counter />
                <Pricing />
                <Testimonial />
                <Blog />
                <BrandLogoSlider />
                <Intro />
                <Footer />
            </div>
        );
    }
}

export default HomeOne;