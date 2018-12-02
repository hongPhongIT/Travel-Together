import React, { Component } from 'react'
import { connect } from "react-redux";

import Pagination from '../public/Pagination'
import Subscription from '../public/Subscription'
import Item from './Item'



class Blog extends Component {

    constructor(props) {
        super(props)
        this.state = {
            pageOfItems: []
        }
        this.onChangePage = this.onChangePage.bind(this);
    }

    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }

    componentDidMount() {
        const { onRequestPosts } = this.props;
        onRequestPosts()
    }

    render() {
        let { posts, match } = this.props;
        return (
            <div>
                <div className="back-ground"></div>
                <section id="blog" className="blog">
                    <div className="container">
                        <div className="blog-details">
                            <div className="gallary-header text-center">
                                <h2>latest news</h2>
                                <p>Travel News from all over the world</p>
                            </div>
                            <div className="blog-content">
                                <div className="row">
                                    <Item posts={this.state.pageOfItems} match={match} />
                                </div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            {posts ? <Pagination items={posts} onChangePage={this.onChangePage} /> : ''}
                        </div>
                    </div>
                </section>
                <Subscription />
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        fetching: state.fetchPost.fetching,
        posts: state.fetchPost.posts,
        error: state.fetchPost.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRequestPosts: () => dispatch({ type: "FETCH_POSTS_BEGIN" })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
