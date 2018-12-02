import React, { Component } from 'react'
import { connect } from "react-redux"
import { Redirect } from 'react-router-dom'

import Tours from '../home/search/Tours'
import '../styles/Order.css'
import FormOrder from './FormOrder'
import Dialog from '../public/Modal'

class Order extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isSearch: false,
            pageOfItems: []
        }
        this.onChangePage = this.onChangePage.bind(this);
    }

    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }

    handleSubmitOrder = (props) => {
        const tourID = this.props.match.params.id
        this.props.handleSubmitOrder(props, tourID)
    }


    SearchTour = (props) => {
        let key_work = (props.name ? "name=" + props.name : '')
            + (props.dayDeparture ? "&dayDeparture=" + props.dayDeparture : '')
            + (props.locationDeparture ? "&locationDeparture=" + props.locationDeparture : '')
            + (props.duration ? "&duration=" + props.duration : '')
            + (props.member ? "&member=" + props.member : '')
        this.setState({
            isSearch: true,
            key_work: key_work
        })
    }


    componentDidMount() {
        this.props.onRequestPackageDetail(this.props.match.params.id)
        this.props.onRequestPackage()
        const location = window.location.href;
        const index = location.indexOf('?');
        if (index !== -1) {
            const url = location.substring(index + 1, location.length)
            this.props.onRequestSearchTour(url)
        }
    }

    render() {
        const { isSearch } = this.state
        const { item, packages, success, orderList, formTour} = this.props
        return (
            <div>
                {success ? <Dialog orderList={orderList} />: ''}
                <div style={{ position: 'relative' }}>
                    <div className="back-ground"></div>
                    <div className="container">
                        <div className="single-travel-boxes" style={{ position: 'relative', top: '0px' }}>
                            <div className="desc-tabs">
                                <div className="tab-content" >
                                    {
                                        (isSearch && formTour) && (
                                            <Redirect to={`/home/search?${this.state.key_work}`} />
                                        )
                                    }
                                    {packages !== null ? <Tours onSubmit={(props) => this.SearchTour(props)} packages={packages} /> : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    {item ? <FormOrder onSubmit={(props, tourID) => this.handleSubmitOrder(props, tourID)} item={item} /> : ''}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        item: state.fetchPackageDetail.package,
        packages: state.fetchPackage.packages,
        success: state.addOrder.success,
        orderList:  state.addOrder.response,
        formTour: state.form.formTours
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleSubmitOrder: (data, tourID) => dispatch({ type: "HANDLE_SUBMIT_FORM_ORDER_BEGIN", data,tourID }),
        onRequestSearchTour: (key_work) => dispatch({ type: "SEARCH_TOUR_BEGIN", key_work }),
        onRequestPackageDetail: (id) => dispatch({ type: "FETCH_PACKAGE_DETAIL_BEGIN", id }),
        onRequestPackage: () => dispatch({ type: "FETCH_PACKAGE_BEGIN" })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Order) 
