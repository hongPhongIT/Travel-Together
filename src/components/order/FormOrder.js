import React, { Component } from 'react'
import { reduxForm, Field, FieldArray } from 'redux-form';

import { validate } from '../public/Validation'
import AddCustommer from './AddCustommer';

const RenderField = ({ input, label, type, meta: { touched, error, warning } }) => {
    return (
        <div className="col-xs-12 col-md-6">
            <label htmlFor={label}>{label} (<span>*</span>)</label>
            <input  {...input} placeholder={label} type={type} className="form-control" />
            {touched && ((error && <span style={{ color: 'red' }}>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    )
}

class FormOrder extends Component {

    constructor(props) {
        super(props)
        this.AddCustommerHTML = [
            <AddCustommer quanlity={1} key={1} />
        ];
        this.state = {
            isAddCustommer: 1,
            AddCustommerHTML: this.AddCustommerHTML
        }
    }

    handleAddCustommerClick = (isAddCustommer) => {
        this.AddCustommerHTML.push(<AddCustommer quanlity={isAddCustommer + 1} key={isAddCustommer + 1} />);
        this.setState({
            isAddCustommer: isAddCustommer + 1,
            AddCustommerHTML: this.AddCustommerHTML
        });
    }

    render() {
        const { handleSubmit, item } = this.props;
        return (
            <div id="bookPage" style={{ position: 'relative', top: '20px' }}>
                <form onSubmit={handleSubmit}>
                    <div className="bookTitle">
                        <ul>
                            <li className="active">1.Enter information</li>
                            <li>2.Tour Nest - TOUR NEST TRANSPORTATION AND TOURISM TRANSPORT LTD confirm</li>
                            <li>3.Payment</li>
                        </ul>
                    </div>
                    <h2>{item.name}</h2>
                    <p>Tour Code: <strong>{item.code}</strong></p>
                    <p>Time: <strong>{item.time}day</strong></p>
                    <p>Departure: <strong>{item.dayDeparture}</strong></p>
                    <p>Departure: <strong>{item.locationDeparture}</strong></p>
                    <p>Number of places received: <strong>{item.quanlity}</strong></p>
                    <h3 className="header">
                        <span>Contact Info</span>
                    </h3>
                    <div className="form-group">
                        <div className="row">
                            <Field name="name" component={RenderField} type="text" label="Name" />
                            <Field name="email" component={RenderField} type="text" label="Email" />
                            <Field name="address" component={RenderField} type="text" label="Address" />
                            <Field name="phone" component={RenderField} type="text" label="Phone number" />
                        </div>
                    </div>
                    <h3 className="header">
                        <span>Tourists List</span>
                    </h3>

                    <FieldArray name="members" component={AddCustommer} />
                    
                    <h3 className="header" style={{ clear: 'both' }}>
                        <span>Please select the form of payment</span>
                    </h3>
                    <div className="payBox">
                        <label htmlFor="atmCard">
                            <input type="radio" name="txtHinhthucthanhtoan" id="atmCard" defaultChecked="checked" defaultValue="onepay" />
                            Domestic Bank Card-ATM / Internet Banking</label>
                        <label htmlFor="visaCard">
                            <input type="radio" name="txtHinhthucthanhtoan" id="visaCard" defaultValue="onepay_quocte" />
                            Credit Card</label>
                    </div>

                    <input type="submit" defaultValue="Book tour" />

                </form>
            </div>
        )
    }
}

export default reduxForm({
    form: 'FormOrder',
    validate
})(FormOrder); 