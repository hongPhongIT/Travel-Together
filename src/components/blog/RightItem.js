import React from 'react'
import { Link } from 'react-router-dom'

const Area = (props) => {
    let { posts } = props
    return (
        <div className="col-12 col-md-8 col-lg-4">
            <div className="post-sidebar-area mb-100">
                <div className="sidebar-widget-area">
                    <h5 className="title">Top Stories</h5>
                    {posts.map(item => {
                        return (
                            <div className="widget-content" key={item.id}>
                                <div className="single-blog-post post-style-2 d-flex align-items-center widget-post">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <img src={item.image} alt="" />
                                        </div>
                                        <div className="col-md-8">
                                            <Link to={`/blog/${item.id}`} className="headline">
                                                <h5 className="mb-0">{item.name}</h5>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </div>
    )
}

export default Area