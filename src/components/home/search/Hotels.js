import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form';

import 'react-datepicker/dist/react-datepicker.css';

import RenderField from './RenderField'
import moment from 'moment';

const city = [{ id: 1, name: "Ha Noi" }, { id: 2, name: "Vinh" }, { id: 3, name: "Da Nang" }, { id: 4, name: "Binh Dinh" }, { id: 5, name: "Ho Chi Minh" }]

class Hotels extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cityDeparture: city,
            destination: null,
            tour: "Country tour",
            startDate: moment(),
        }
        this.handleChangedate = this.handleChangedate.bind(this);
        this.handleChangeTour = this.handleChangeTour.bind(this);
    }

    handleChangedate = (date) => {
        this.setState({
            startDate: date
        });
    }

    handleChangeTour(e) {
        this.setState({ tour: e.target.value });
        this.setState({ destination: this.props.packages.filter(item => item.tour === this.state.tour) });
    }

    componentDidMount() {
        this.setState({ destination: this.props.packages.filter(item => item.tour === this.state.tour) });
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <div role="tabpanel" className="tab-pane fade in" id="hotels">
                <div className="tab-para">
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <Field name="locationDeparture" array={city} nameSelect="locationDeparture" component={RenderField} type="text" holder="enter your departure country" label="Departure" select={true} />
                            </div>
                            <div className="col-lg-2 col-md-1 col-sm-4">
                                <div className="single-tab-select-box">
                                    <h2>Tour</h2>
                                    <div className="travel-select-icon">
                                        <select name="tour" onChange={this.handleChangeTour} className="form-control">
                                            <option >Country tour</option>
                                            <option >International tour</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-1 col-sm-4">
                                {this.state.destination ? <Field name="name" component={RenderField} array={this.state.destination} nameSelect="name" type="text" label="Destination" select={true} /> : ''}
                            </div>
                            <div className="col-lg-2 col-md-1 col-sm-4">
                                < Field name="dayDeparture" component={RenderField} date={true}
                                    selected={this.state.startDate}
                                    onChange={this.handleChangedate}
                                    className="form-control" label="Check in" />
                            </div>
                            <div className="col-lg-2 col-md-1 col-sm-4">
                                <div className="single-tab-select-box">
                                    <button type="submit" className="about-view travel-btn" style={{ position: 'relative', top: '30px' }}>search</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default reduxForm({
    form: 'formHotel',
})(Hotels);