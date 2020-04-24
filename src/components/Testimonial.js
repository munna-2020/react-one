import React, {useState} from 'react';
import Swiper from "react-id-swiper";
import 'swiper/css/swiper.css';


const Testimonial = () => {

    const [swiper, setSwiper] = useState(null);

    const goPrev = () => {
        if(swiper !== null) {
            swiper.slidePrev();
        }
    }

    const goNext = () => {
        if(swiper !== null) {
            swiper.slideNext();
        }
    }

    const params = {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    }
    return (
        <div className="testimonial-1 overview-bgi">
            <div className="container">
                <div className="row">

                        <div className="offset-lg-2 col-lg-8">
                            <div className="testimonial-inner">
                                <header className="testimonia-header">
                                    <h1><span>Our</span> Testimonial</h1>
                                </header>
                                <div id="carouselExampleIndicators7" className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner">
                                        <Swiper {...params} getSwiper={setSwiper}>
                                        <div className="carousel-item active">
                                            <div className="row">
                                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                                    <div className="avatar">
                                                        <img src="assets/img/avatar/avatar-2.jpg" alt="avatar-2"
                                                             className="img-fluid rounded"/>
                                                    </div>
                                                </div>
                                                <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-xs-12">
                                                    <p className="lead">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in
                                                        pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur
                                                        nulla. Nulla posuere sapien vitae.
                                                    </p>
                                                    <div className="author-name">
                                                        Emma Connor
                                                    </div>
                                                    <ul className="rating">
                                                        <li>
                                                            <i className="fa fa-star"></i>
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-star"></i>
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-star"></i>
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-star"></i>
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-star-half-full"></i>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item active">
                                            <div className="row">
                                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                                    <div className="avatar">
                                                        <img src="assets/img/avatar/avatar.jpg" alt="avatar"
                                                             className="img-fluid rounded"/>
                                                    </div>
                                                </div>
                                                <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-xs-12">
                                                    <p className="lead">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in
                                                        pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur
                                                        nulla. Nulla posuere sapien vitae.
                                                    </p>
                                                    <div className="author-name">
                                                        Martin Smith
                                                    </div>
                                                    <ul className="rating">
                                                        <li>
                                                            <i className="fa fa-star"></i>
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-star"></i>
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-star"></i>
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-star"></i>
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-star-half-full"></i>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item active">
                                            <div className="row">
                                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                                    <div className="avatar">
                                                        <img src="assets/img/avatar/avatar-3.jpg" alt="avatar-3"
                                                             className="img-fluid rounded"/>
                                                    </div>
                                                </div>
                                                <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-xs-12">
                                                    <p className="lead">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in
                                                        pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur
                                                        nulla. Nulla posuere sapien vitae.
                                                    </p>
                                                    <div className="author-name">
                                                        John Antony
                                                    </div>
                                                    <ul className="rating">
                                                        <li>
                                                            <i className="fa fa-star"></i>
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-star"></i>
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-star"></i>
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-star"></i>
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-star-half-full"></i>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        </Swiper>
                                    </div>

                                    <div className="carousel-control-prev">
                                        <span onClick={goPrev} className="slider-mover-left">
                                            <i className="fa fa-angle-left"></i>
                                        </span>
                                    </div>
                                    <div className="carousel-control-next">
                                        <span onClick={goNext} className="slider-mover-right">
                                            <i className="fa fa-angle-right"></i>
                                        </span>
                                    </div>
                                </div>

                            </div>
                        </div>

                </div>
            </div>
        </div>
    );
};

export default Testimonial;
