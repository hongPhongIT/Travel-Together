import React from 'react'
import { Link } from "react-router-dom";

const Item = (props) => {
    let { posts, match } = props;
    return (
        posts === null ? '' :
        (posts.map(item => {
            return (
                <div className="col-sm-4 col-md-4" key={item.id}>
                    <div className="thumbnail">
                        <h2>trending news <span>15 november 2017</span></h2>
                        <div className="thumbnail-img">
                            <img src={`${item.image}`} alt="blog-img" />
                            <div className="thumbnail-img-overlay" />
                        </div>
                        <div className="caption">
                            <div className="blog-txt">
                                <h3>
                                    <Link to={`${match.url}/${item.id}`}>{item.name}</Link>
                                </h3>
                                <p>{item.content}</p>
                                <Link to={`${match.url}/${item.id}`}>Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }))
    )
}


export default Item