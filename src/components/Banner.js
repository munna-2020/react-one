import React from 'react';
import Swiper from 'react-id-swiper';
const Banner = () => {
    const params = {
       
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    }
    return (
        <div className="banner banner-bg"id="particles-banner-wrapper">
            <div id="particles-banner"></div>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <Swiper {...params}>
            <div >
                <div className="carousel-item item-bg active">
                    <div className=" banner-slider-inner d-flex ">
                        <div className="carousel-content container">
                            <div className="text-c">
                                <h1 data-animation="animated fadeInDown delay-05s">Grow Your Business</h1>
                                <p data-animation="animated fadeInUp delay-10s">This is business website template based
                                    on Bootstrap 4 framework.</p>
                                <a data-animation="animated fadeInUp delay-10s" href="#"
                                   className="btn btn-lg btn-round btn-theme">Get Started Now</a>
                                <a data-animation="animated fadeInUp delay-10s" href="#"
                                   className="btn btn-lg btn-round btn-white-lg-outline">Free Download</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div >
                <div className="carousel-item item-bg active">
                    <div className="carousel-caption banner-slider-inner d-flex text-left">
                        <div className="carousel-content container">
                            <div className="text-c">
                                <h1 data-animation="animated fadeInDown delay-05s">Grow Your Business</h1>
                                <p data-animation="animated fadeInUp delay-10s">This is business website template based
                                    on Bootstrap 4 framework.</p>
                                <a data-animation="animated fadeInUp delay-10s" href="#"
                                   className="btn btn-lg btn-round btn-theme">Get Started Now</a>
                                <a data-animation="animated fadeInUp delay-10s" href="#"
                                   className="btn btn-lg btn-round btn-white-lg-outline">Free Download</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div >
                    <div className="carousel-item item-bg active">
                        <div className="carousel-caption banner-slider-inner d-flex text-center">
                            <div className="carousel-content container">
                                <div className="text-c">
                                    <h1 data-animation="animated fadeInDown delay-05s">Grow Your Business</h1>
                                    <p data-animation="animated fadeInUp delay-10s">This is business website template
                                        based
                                        on Bootstrap 4 framework.</p>
                                    <a data-animation="animated fadeInUp delay-10s" href="#"
                                       className="btn btn-lg btn-round btn-theme">Get Started Now</a>
                                    <a data-animation="animated fadeInUp delay-10s" href="#"
                                       className="btn btn-lg btn-round btn-white-lg-outline">Free Download</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div></div>
        </Swiper>
            </div>
        </div>
    )
};

export default Banner;