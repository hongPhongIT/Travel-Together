import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        < header className="top-area" >
            <div className="header-area">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-2">
                            <div className="logo">
                                <a href="index.html">
                                    Travel<span>Together</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-sm-10">
                            <div className="main-menu">

                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                        <i className="fa fa-bars" />
                                    </button>
                                </div>
                                <div className="collapse navbar-collapse">
                                    <ul className="nav navbar-nav navbar-right">
                                        <li><Link to="/home">home</Link></li>
                                        <li><Link to="/destination">Destination</Link></li>
                                        <li><Link to="/package" >Packages </Link></li>
                                        <li><Link to="/blog" >Blog</Link></li>
                                        <li><Link to="/blog" >Special Offers</Link></li>
                                        <li>
                                            <button className="book-btn">book now</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="home-border" />
                </div>
            </div>
        </header >
    )
}

export default Header