import React from 'react';
import Swiper from 'react-id-swiper';
const Manage = () => {
    const params = {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },

    }
    return (
        <div>
            <div className="managment-area-2 content-area-10">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-5">
                            <div className="managment-info">
                                <h1>
                                    <span>Why</span> Choose Us?
                                </h1>
                                <div className="managment-border-" />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna
                                    <span> aliqua.Ut enim ad minim veniam, quis</span>
                                </p>
                                <ul>
                                    <li>
                                        <i className="flaticon-up-arrow" />
                                        Deep Customization Process
                                    </li>
                                    <li>
                                        <i className="flaticon-building" />
                                        Industry Specialization
                                    </li>
                                    <li>
                                        <i className="flaticon-three" />
                                        Unique Sales Methodoligies
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-7 offset-lg-1">
                            <Swiper {...params}>
                                <div>
                                    <div className="carousel-item active">
                                        <img className="d-block w-100 img-fluid" src="/assets/img/managment-img-1.jpg"
                                             alt="First slide"/>
                                    </div>
                                </div>
                                <div>
                                    <div className="carousel-item active">
                                        <img className="d-block w-100 img-fluid" src="/assets/img/managment-img-2.jpg"
                                             alt="Second slide"/>
                                    </div>
                                </div>
                                <div>
                                    <div className="carousel-item active">
                                        <img className="d-block w-100 img-fluid" src="/assets/img/managment-img-3.jpg"
                                             alt="Third slide"/>
                                    </div>
                                </div>

                            </Swiper>
                        </div>

                    </div>
                </div>
            </div>
        </div>

);
};

export default Manage;
