import React, { Component } from 'react'
import { connect } from "react-redux";

import Pagination from '../public/Pagination'
import Item from '../packages/Item'
import Subscription from '../public/Subscription'

class DetailDestination extends Component {

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
        let { onRequestPackage } = this.props
        onRequestPackage(this.props.match.params.id)
    }

    render() {
        let { packages } = this.props
        return (
            <div>
                <div className="back-ground"></div>
                <section id="pack" className="packages">
                    <div className="container">
                        <div className="gallary-header text-center">
                            <h2>special packages</h2>
                            <p>Duis aute irure dolor in  velit esse cillum dolore eu fugiat nulla.</p>
                        </div>
                        <div className="packages-content">
                            <div className="row">
                                {packages === null ? "" : <Item packages={this.state.pageOfItems} />}
                            </div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            {packages ? <Pagination items={packages} onChangePage={this.onChangePage} /> : ''}
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
        fetching: state.fetchPackageDestination.fetching,
        packages: state.fetchPackageDestination.packages,
        error: state.fetchPackageDestination.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onRequestPackage: (id) => dispatch({ type: "FETCH_PACKAGE_DESTINATION_BEGIN", id})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailDestination);
