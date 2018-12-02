import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Item extends Component {
    componentDidMount() {
        const { onRequestDestination } = this.props;
        onRequestDestination()
    }
    render() {
        var count = 0;
        let { destinations, match } = this.props
        return (
            destinations === null ? "" :
                (destinations.map(item => {
                    if (count === 0 || count === 1) {
                        count++
                        return (
                            <div className="col-md-6" key={item.id}>
                                <div className="filtr-item">
                                    <img src={`${item.image}`} alt='' />
                                    <div className="item-title">
                                        <Link to={`${match.url}/${item.id}`}>{item.name}</Link>
                                        <p><span>{item.tour} tours</span><span>{item.place} places</span></p>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                    if (count === 2 || count === 3 || count === 4) {
                        count++
                        return (
                            <div className="col-md-4" key={item.id}>
                                <div className="filtr-item" >
                                    <img src={`${item.image}`} alt='' />
                                    <div className="item-title">
                                        <Link to={`${match.url}/${item.id}`}>{item.name}</Link>
                                        <p><span>{item.tour} tours</span><span>{item.place} places</span></p>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                    if (count === 5) {
                        count = 0;
                        return (
                            <div className="col-md-8" key={item.id}>
                                <div className="filtr-item" >
                                    <img src={`${item.image}`} alt='' />
                                    <div className="item-title">
                                        <Link to={`${match.url}/${item.id}`}>{item.name}</Link>
                                        <p><span>{item.tour} tours</span><span>{item.place} places</span></p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                }))
        )
    }
}
const mapStateToProps = state => {

    return {
        fetching: state.fetchDestination.fetching,
        destinations: state.fetchDestination.destinations,
        error: state.fetchDestination.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRequestDestination: () => dispatch({ type: "FETCH_DESTINATION_BEGIN" })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);