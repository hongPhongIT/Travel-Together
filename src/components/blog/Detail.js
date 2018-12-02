import React, { Component } from 'react'
import '../styles/DetailBlog.css'
import { connect } from "react-redux";

import Area from './RightItem'

class DetailBlog extends Component {
    
    componentWillMount(){
        const { onRequestDetailPosts, onRequestPostsArea } = this.props;
        onRequestDetailPosts(this.props.match.params.id);
        onRequestPostsArea()
    }

    componentDidMount() {
        const { onRequestDetailPosts, onRequestPostsArea } = this.props;
        onRequestDetailPosts(this.props.match.params.id);
        onRequestPostsArea()
    }
    render() {
        const { post, postsArea } = this.props
        return (
            <div >
                <div className="back-ground"></div>
                <div className="container">
                    <div className="blog-details">
                        <div className="text-center">
                            <h2 style={{ color: "#ffffff", fontSize: "500%" }}>latest news</h2>
                            <p style={{ color: "#ffffff", fontSize: "200%" }}>Travel News from all over the world</p>
                        </div>
                    </div>
                    <div className="row justify-content-center" style={{ position: "relative", bottom: "50px" }}>
                        <div className="col-12 col-lg-8">
                            <div className="single-blog-content mb-100">
                                <div className="post-meta">
                                    <p><a className="post-author">Katy Liu</a> on <a className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                </div>
                                <div className="post-content">
                                    {post ? (<section><img src={post.image} alt='' />
                                        <p>{post.content}</p></section>) : ''}
                                    <div className="post-meta second-part">
                                        <p><a className="post-author">Katy Liu</a> on <a className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {postsArea ? <Area posts={postsArea} /> : ''}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        fetching: state.fetchDetailPost.fetching,
        post: state.fetchDetailPost.post,
        error: state.fetchDetailPost.error,
        postsArea: state.fetchPostArea.posts
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onRequestDetailPosts: (id) => dispatch({ type: "FETCH_POSTS_DETAIL_BEGIN", id }),
        onRequestPostsArea: () => dispatch({ type: "FETCH_POSTS_AREA_BEGIN" })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailBlog);