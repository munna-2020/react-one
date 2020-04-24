import React, {Component} from 'react';
import {Link} from 'react-router-dom'
class BlogClassic extends Component {
    render() {
        return (
            <div>
                <div className="blog-section content-area-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-12">
                                <div className="sidebar mb-50">
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
                                    <div className="widget recent-posts">
                                        <h3 className="sidebar-title">Recent Posts</h3>
                                        <div className="media mb-4">
                                            <Link className="pr-3" to="/portfolio-details">
                                                <img src="/assets/img/recent-portfolio/img-1.jpg" alt="recent-portfolio"/>
                                            </Link>
                                            <div className="media-body align-self-center">
                                                <Link to="blog-details"><p>Lectus tristique lacinia non
                                                    in diam mauris ultricies.</p></Link>
                                                <p><i className="fa fa-calendar"></i>27 Feb 2018</p>
                                            </div>
                                        </div>
                                        <div className="media mb-4">
                                            <Link className="pr-3" to="/portfolio-details">
                                                <img src="/assets/img/recent-portfolio/img-2.jpg" alt="recent-portfolio"/>
                                            </Link>
                                            <div className="media-body align-self-center">
                                                <Link to="blog-details"><p>Lectus tristique lacinia non
                                                    in diam mauris ultricies.</p></Link>
                                                <p><i className="fa fa-calendar"></i>27 Feb 2018</p>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <Link className="pr-3" to="/portfolio-details">
                                                <img src="/assets/img/recent-portfolio/img-3.jpg" alt="recent-portfolio"/>
                                            </Link>
                                            <div className="media-body align-self-center">
                                                <Link to="blog-details"><p>Lectus tristique lacinia non
                                                    in diam mauris ultricies.</p></Link>
                                                <p><i className="fa fa-calendar"></i>27 Feb 2018</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget tags clearfix">
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
                                    <div className="widget w-2 latest-tweet">
                                        <h3 className="sidebar-title">Latest Tweet</h3>
                                        <p><a href="#">Lorem Ipsum is simply</a> dummy text of the printing and
                                            typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                            text,</p>
                                        <p>@Lorem ipsum dolor<a href="#">sit amet, consectetur</a> adipiscing elit.
                                            Aenean id dignissim justo. Maecenas urna lacus,</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-12">
                                <div className="blog-1">
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
                                                <li className="float-right mr-0"><a href="#">
                                                    <i className="fa fa-commenting-o"/></a>15
                                                </li>
                                                <li className="float-right"><a href="#">
                                                    <i className="flaticon-time"/></a>5k
                                                </li>
                                            </ul>
                                        </div>
                                        <h3>
                                            <Link to="/blog-details">Mattis magna neque finibus
                                                maximus.</Link>
                                        </h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the
                                            1500s, when an unknown printer took a galley of type and scrambled it to
                                            make a type specimen book. It has survived not only five centuries.But also
                                            the leap into electronic typesetting, remaining essentially unchanged. It
                                            was popularised in the 1960s with the release of Letraset sheets containing
                                            Lorem Ipsum passages, and more recently with desktop publishing software
                                            like Aldus PageMaker including versions of Lorem Ipsum.But also the leap
                                            into</p>
                                        <Link to="/blog-details" className="read-more">Read more</Link>
                                    </div>
                                </div>
                                <div className="blog-1">
                                    <div className="blog-photo">
                                        <img src="/assets/img/blog/blog-2.jpg" alt="blog" className="img-fluid"/>
                                            <div className="profile-user">
                                                <img src="/assets/img/avatar/avatar-2.jpg" alt="user"/>
                                            </div>
                                    </div>
                                    <div className="detail">
                                        <div className="date-box">
                                            <span>27</span>Feb
                                        </div>
                                        <div className="post-meta clearfix">
                                            <ul>
                                                <li>
                                                    <strong><a href="#">Teseira Jeklin</a></strong>
                                                </li>
                                                <li className="float-right mr-0"><a href="#"><i
                                                    className="fa fa-commenting-o"></i></a>15
                                                </li>
                                                <li className="float-right"><a href="#"><i
                                                    className="flaticon-time"></i></a>5k
                                                </li>
                                            </ul>
                                        </div>
                                        <h3>
                                            <Link to="blog-details">Attis magna ac neque finibus
                                                maximus.</Link>
                                        </h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the
                                            1500s, when an unknown printer took a galley of type and scrambled it to
                                            make a type specimen book. It has survived not only five centuries.But also
                                            the leap into electronic typesetting, remaining essentially unchanged. It
                                            was popularised in the 1960s with the release of Letraset sheets containing
                                            Lorem Ipsum passages, and more recently with desktop publishing software
                                            like Aldus PageMaker including versions of Lorem Ipsum.But also the leap
                                            into</p>
                                        <Link to="blog-details" className="read-more">Read more</Link>
                                    </div>
                                </div>
                                <div className="blog-1">
                                    <div className="blog-photo">
                                        <img src="/assets/img/blog/blog.jpg" alt="blog" className="img-fluid"/>
                                            <div className="profile-user">
                                                <img src="/assets/img/avatar/avatar.jpg" alt="user"/>
                                            </div>
                                    </div>
                                    <div className="detail">
                                        <div className="date-box">
                                            <span>27</span>Feb
                                        </div>
                                        <div className="post-meta clearfix">
                                            <ul>
                                                <li>
                                                    <strong><a href="#">Teseira Jeklin</a></strong>
                                                </li>
                                                <li className="float-right mr-0"><a href="#"><i
                                                    className="fa fa-commenting-o"></i></a>15
                                                </li>
                                                <li className="float-right"><a href="#"><i
                                                    className="flaticon-time"></i></a>5k
                                                </li>
                                            </ul>
                                        </div>
                                        <h3>
                                            <Link to="blog-details">Sapien eu sem consectetur amet
                                                scelerisque.</Link>
                                        </h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the
                                            1500s, when an unknown printer took a galley of type and scrambled it to
                                            make a type specimen book. It has survived not only five centuries.But also
                                            the leap into electronic typesetting, remaining essentially unchanged. It
                                            was popularised in the 1960s with the release of Letraset sheets containing
                                            Lorem Ipsum passages, and more recently with desktop publishing software
                                            like Aldus PageMaker including versions of Lorem Ipsum.But also the leap
                                            into</p>
                                        <Link to="blog-details" className="read-more">Read more</Link>
                                    </div>
                                </div>
                                <div className="pagination-box text-center">
                                    <nav aria-label="Page navigation example">
                                        <ul className="pagination">
                                            <li className="page-item"><a className="page-link" href="#"><span
                                                aria-hidden="true">«</span></a></li>
                                            <li className="page-item"><a className="page-link active"
                                                                         href="/our-blog">1</a>
                                            </li>
                                            <li className="page-item"><a className="page-link"
                                                                         href="/our-blog">2</a>
                                            </li>
                                            <li className="page-item"><a className="page-link"
                                                                         href="/our-blog">3</a></li>
                                            <li className="page-item"><a className="page-link" href="#"><span
                                                aria-hidden="true">»</span></a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BlogClassic;