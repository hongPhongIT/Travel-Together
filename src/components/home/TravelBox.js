import React, { Component } from 'react'
import { connect } from "react-redux"
import { Redirect } from 'react-router-dom'

import Pagination from '../public/Pagination'
import Tours from './search/Tours'
import Hotels from './search/Hotels'
import Item from '../packages/Item'
import Loader from '../public/Loader'

class TravelBox extends Component {
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

  componentDidMount() {
    this.props.onRequestPackage({ "page": "1", "limit": "6" })
    const location = window.location.href;
    const index = location.indexOf('?');
    if (index !== -1) {
      const url = location.substring(index + 1, location.length)
      this.props.onRequestSearchTour(url)
    }
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
    });

    this.props.onRequestSearchTour(key_work)
  };

  render() {
    const { isSearch } = this.state
    const { packages, searchPackages, fetching } = this.props
    return (
      <div>
        <section className="travel-box">
          {
            (isSearch && this.props.formvalue.values) && (
              <Redirect to={`${this.props.match.url}/search?${this.state.key_work}`} />
            )
          }
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="single-travel-boxes">
                  <div id="desc-tabs" className="desc-tabs">
                    <ul className="nav nav-tabs" role="tablist">
                      <li role="presentation" className="active">
                        <a href="#tours" aria-controls="tours" role="tab" data-toggle="tab">
                          <i className="fa fa-tree" />
                          tours
                          </a>
                      </li>
                      <li role="presentation">
                        <a href="#hotels" aria-controls="hotels" role="tab" data-toggle="tab">
                          <i className="fa fa-building" />
                          hotels
                          </a>
                      </li>
                      <li role="presentation">
                        <a href="#flights" aria-controls="flights" role="tab" data-toggle="tab">
                          <i className="fa fa-plane" />
                          flights
                          </a>
                      </li>
                    </ul>
                    {/* Tab panes */}
                    <div className="tab-content">
                      {packages !== null ? <Tours onSubmit={(props) => this.SearchTour(props)} packages={packages} /> : ''}
                      {packages !== null ? <Hotels onSubmit={(props) => this.SearchTour(props)} packages={packages} /> : ''}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container packages-content">
          {fetching === true ? <Loader /> :
            searchPackages !== null ? (
              <div>
                <Item packages={this.state.pageOfItems} />
                <div style={{ textAlign: 'center' }}>
                  <Pagination items={searchPackages} onChangePage={this.onChangePage} />
                </div>
              </div>)
              : <div style={{ textAlign: 'center' }}>
                <h3>No result</h3>
              </div>}
          {/* {searchPackages === null && packages !== null ? <Item packages={packages} /> : ''} */}
          {}
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    formvalue: state.form.formTours,
    packages: state.fetchPackage.packages,
    searchPackages: state.searchTour.packages,
    fetching: state.searchTour.fetching
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestSearchTour: (key_work) => dispatch({ type: "SEARCH_TOUR_BEGIN", key_work }),
    onRequestPackage: (params) => dispatch({ type: "FETCH_PACKAGE_BEGIN", params })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TravelBox)