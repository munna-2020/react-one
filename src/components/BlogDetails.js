import React, {Component} from 'react';
import {Link} from "react-router-dom";

class BlogDetails extends Component {
    render() {
        return (
            <div className="blog-section content-area-7">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="blog-1 blog-2 mb-40">
                                <div className="blog-photo">
                                    <img src="/assets/img/blog/blog-3.jpg" alt="blog" className="img-fluid"/>
                                        <div className="profile-user">
                                            <img src="/assets/img/avatar/avatar-3.jpg" alt="user"/>
                                        </div>
                                </div>
                                <div className="detail">
                                    <div className="date-box">
                                        <span>27</span>Feb
                                    </div>
                                    <div className="post-meta clearfix">
                                        <ul>
                                            <li>
                                                <strong><a href="#">Antony Toms</a></strong>
                                            </li>
                                            <li className="float-right mr-0"><a href="#"><i
                                                className="fa fa-commenting-o"></i></a>15
                                            </li>
                                            <li className="float-right"><a href="#"><i
                                                className="flaticon-time"></i></a>5k
                                            </li>
                                        </ul>
                                    </div>
                                    <h3 className="title-2">
                                        <Link to="/blog-details">Mattis magna neque finibus maximus.</Link>
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
                                    <p>Fusce non ante sed lorem rutrum feugiat. Vestibulum pellentesque, purus ut
                                        dignissim consectetur, nulla erat ultrices purus, ut consequat sem elit non sem.
                                        Morbi lacus massa, euismod ut turpis molestie, tristique sodales est. Integer
                                        sit amet mi id sapien tempor molestie in nec massa. Fusce non ante sed lorem
                                        rutrum feugiat.</p>
                                    <br/>
                                        <blockquote className="blockquote">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry. Lorem Ipsum has been the industry's standard dummy text ever
                                                since the 1500s, when an unknown printer took a galley of type and
                                                scrambled it to make a type specimen book. </p>
                                            <footer>
                                                Someone famous in
                                                <cite>
                                                    Source Title
                                                </cite>
                                            </footer>
                                        </blockquote>
                                        <p>Fusce non ante sed lorem rutrum feugiat. Vestibulum pellentesque, purus ut
                                            dignissim consectetur, nulla erat ultrices purus, ut consequat sem elit non
                                            sem. Morbi lacus massa, euismod ut turpis molestie, tristique sodales est.
                                            Integer sit amet mi id sapien tempor molestie in nec massa. Fusce non ante
                                            sed lorem rutrum feugiat.</p>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the
                                            1500s, when an unknown printer took a galley of type and scrambled it to
                                            make a type specimen book. It has survived not only five centuries.But also
                                            the leap into electronic typesetting,
                                            remaining essentially unchanged. It was popularised in the 1960s with the
                                            release of Letraset sheets containing Lorem Ipsum passages, and more
                                            recently with desktop publishing software like Aldus PageMaker including
                                            versions of Lorem Ipsum.But also the leap into electronic typesetting,</p>
                                             <br/>
                                            <div className="row clearfix tags-socal-box">
                                                <div className="col-lg-7 col-md-7 col-sm-7">
                                                    <div className="tags">
                                                        <h3 className="title-2">Tags</h3>
                                                        <ul>
                                                            <li><a href="#">Design</a></li>
                                                            <li><a href="#">Css</a></li>
                                                            <li><a href="#">Graphic</a></li>
                                                            <li><a href="#">News</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-lg-5 col-md-5 col-sm-5">
                                                    <div className="social-list">
                                                        <h3 className="title-2">Share</h3>
                                                        <ul>
                                                            <li>
                                                                <a href="#" className="facebook">
                                                                    <i className="fa fa-facebook"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="twitter">
                                                                    <i className="fa fa-twitter"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="google">
                                                                    <i className="fa fa-google"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="linkedin">
                                                                    <i className="fa fa-linkedin"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="rss">
                                                                    <i className="fa fa-rss"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                     </div>
                               </div>

                            <div className="comments-section mb-60">
                                <h3 className="title-2">Comments Section</h3>
                                <ul className="comments">
                                    <li>
                                        <div className="comment">
                                            <div className="comment-author">
                                                <a href="#">
                                                    <img src="/assets/img/avatar/avatar-13.jpg"
                                                         className="rounded-circle" alt="avatar-13"/>
                                                </a>
                                            </div>
                                            <div className="comment-content">
                                                <div className="comment-meta">
                                                    <div className="comment-meta-author">
                                                        Jane Doe
                                                    </div>
                                                    <div className="comment-meta-reply">
                                                        <a href="#">Reply</a>
                                                    </div>
                                                    <div className="comment-meta-date">
                                                        <span>8:42 PM 10/3/2018</span>
                                                    </div>
                                                </div>
                                                <div className="clearfix"></div>
                                                <div className="comment-body">
                                                    <div className="comment-rating">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star-o"></i>
                                                    </div>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                                                        luctus tincidunt aliquam. Aliquam gravida massa at sem vulputate
                                                        interdum et vel eros. Maecenas eros enim, tincidunt vel turpis
                                                        vel, dapibus tempus nulla. Donec vel nulla dui. Pellentesque sed
                                                        ante sed ligula hendrerit condimentum. Suspendisse rhoncus
                                                        fringilla ipsum quis porta.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <ul>
                                            <li>
                                                <div className="comment">
                                                    <div className="comment-author">
                                                        <a href="#">
                                                            <img src="/assets/img/avatar/avatar-13.jpg"
                                                                 className="rounded-circle" alt="avatar-13"/>
                                                        </a>
                                                    </div>

                                                    <div className="comment-content">
                                                        <div className="comment-meta">
                                                            <div className="comment-meta-author">
                                                                Jane Doe
                                                            </div>

                                                            <div className="comment-meta-reply">
                                                                <a href="#">Reply</a>
                                                            </div>

                                                            <div className="comment-meta-date">
                                                                <span>8:42 PM 10/3/2018</span>
                                                            </div>
                                                        </div>
                                                        <div className="clearfix"></div>
                                                        <div className="comment-body">
                                                            <div className="comment-rating">
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star-half-o"></i>
                                                                <i className="fa fa-star-o"></i>
                                                            </div>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                                Donec luctus tincidunt aliquam. Aliquam gravida massa at
                                                                sem vulputate interdum et vel eros. Maecenas eros enim,
                                                                tincidunt vel turpis vel, dapibus tempus nulla. Donec
                                                                vel nulla dui.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <div className="comment">
                                            <div className="comment-author">
                                                <a href="#">
                                                    <img src="assets/img/avatar/avatar-13.jpg"
                                                         className="rounded-circle" alt="avatar-13"/>
                                                </a>
                                            </div>
                                            <div className="comment-content">
                                                <div className="comment-meta">
                                                    <div className="comment-meta-author">
                                                        Jane Doe
                                                    </div>
                                                    <div className="comment-meta-reply">
                                                        <a href="#">Reply</a>
                                                    </div>
                                                    <div className="comment-meta-date">
                                                        <span>8:42 PM 10/3/2018</span>
                                                    </div>
                                                </div>
                                                <div className="clearfix"></div>
                                                <div className="comment-body">
                                                    <div className="comment-rating">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star-o"></i>
                                                    </div>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                                                        luctus tincidunt aliquam. Aliquam gravida massa at sem vulputate
                                                        interdum et vel eros. Maecenas eros enim, tincidunt vel turpis
                                                        vel, dapibus tempus nulla. Donec vel nulla dui. Pellentesque sed
                                                        ante sed ligula hendrerit condimentum. Suspendisse rhoncus
                                                        fringilla ipsum quis porta.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <ul>
                                            <li>
                                                <div className="comment">
                                                    <div className="comment-author">
                                                        <a href="#">
                                                            <img src="/assets/img/avatar/avatar-13.jpg"
                                                                 className="rounded-circle" alt="avatar-13"/>
                                                        </a>
                                                    </div>

                                                    <div className="comment-content mrg-bdr">
                                                        <div className="comment-meta">
                                                            <div className="comment-meta-author">
                                                                Jane Doe
                                                            </div>

                                                            <div className="comment-meta-reply">
                                                                <a href="#">Reply</a>
                                                            </div>

                                                            <div className="comment-meta-date">
                                                                <span>8:42 PM 10/3/2018</span>
                                                            </div>
                                                        </div>
                                                        <div className="clearfix"></div>
                                                        <div className="comment-body">
                                                            <div className="comment-rating">
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star-half-o"></i>
                                                                <i className="fa fa-star-o"></i>
                                                            </div>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                                Donec luctus tincidunt aliquam. Aliquam gravida massa at
                                                                sem vulputate interdum et vel eros. Maecenas eros enim,
                                                                tincidunt vel turpis vel, dapibus tempus nulla. Donec
                                                                vel nulla dui.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>

                            <div className="contact-1">
                                <h3 className="title-2">Contact Form</h3>
                                <div className="container">
                                    <div className="row">
                                        <form action="#" method="GET" encType="multipart/form-data">
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                    <div className="form-group name">
                                                        <input type="text" name="name" className="form-control"
                                                               placeholder="Name"/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                    <div className="form-group email">
                                                        <input type="email" name="email" className="form-control"
                                                               placeholder="Email"/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                    <div className="form-group subject">
                                                        <input type="text" name="subject" className="form-control"
                                                               placeholder="Subject"/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                    <div className="form-group number">
                                                        <input type="text" name="phone" className="form-control"
                                                               placeholder="Number"/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <div className="form-group message">
                                                        <textarea className="form-control" name="message"
                                                                  placeholder="Write message"></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                                    <div className="send-btn">
                                                        <button type="submit"
                                                                className="btn btn-color btn-md btn-message">Send
                                                            Message
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BlogDetails;