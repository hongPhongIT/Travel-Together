import React, { Component } from 'react'
import { Field } from 'redux-form';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

const YN = [{ key: 0, value: "Yes" }, { key: 1, value: "No" }]
const age = [{ key: 0, value: "adults" }, { key: 1, value: "child" }]
const typeCustom = [{ key: 0, value: "VietNam" }, { key: 1, value: "Foreign" }]
const sex = [{ key: 0, value: "Female" }, { key: 1, value: "Male" }]

let RenderField = ({ input, date, styleName, nameSelect, type, array, holder, meta: { touched, error, warning } }) => {
    return (
        nameSelect ?
            (<td>
                <Field name={nameSelect} component="select">
                    <option></option>
                    {array.map(a => (
                        <option key={a.key}>{a.value}</option>
                    ))}
                </Field>
                {touched && ((error && <span style={{ color: 'red' }}>{error}</span>) || (warning && <span>{warning}</span>))}
            </td>
            )
            :
            (
                <td>
                    {date ? <DatePicker {...input} dateForm="DD/MM/YYYY"
                        selected={input.value ? moment(input.value) : null}
                        minDate={moment().add(-100, "years")} maxDate={moment().add(0, "months")}
                        className="form-control" />
                        :
                        <input  {...input} type={type} className={styleName} placeholder={holder} />}
                    {touched && ((error && <span style={{ color: 'red' }}>{error}</span>) || (warning && <span>{warning}</span>))}
                </td>
            )
    )
}

class AddCustommer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            startDate: moment()
        }
        this.handleChangedate = this.handleChangedate.bind(this);
    }

    handleChangedate = (date) => {
        this.setState({
            startDate: date
        });
    }


    componentDidMount() {
        this.props.fields.push({})
    }

    render() {
        const { fields } = this.props
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name (<span>*</span>)</th>
                            <th>Date of Birth (<span>*</span>)</th>
                            <th>Address</th>
                            <th>Sex</th>
                            <th>Type of Guest</th>
                            <th>Age</th>
                            <th>Single room</th>
                            <th>Visa</th>
                        </tr>
                    </thead>
                    <tbody id="formThemkhachhang">
                        {(fields.map((member, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <Field component={RenderField} type="text" styleName="name" holder="Name" name={`${member}.name`} />
                                    <Field date={true} selected={this.state.startDate} onChange={this.handleChangedate} component={RenderField} styleName="dob hasDatepicker" holder="Date of Birth" name={`${member}.DateOfBirth`} />
                                    <Field component={RenderField} type="text" styleName="address" holder="Address" name={`${member}.address`} />
                                    <Field name={`${member}.sex`} values="Male" nameSelect={`${member}.sex`} component={RenderField} array={sex} />
                                    <Field name={`${member}.typeCustom`} values="VietNam" nameSelect={`${member}.typeCustom`} component={RenderField} array={typeCustom} />
                                    <Field name={`${member}.age`} values="adults" nameSelect={`${member}.age`} component={RenderField} array={age} />
                                    <Field name={`${member}.singerRom`} values="Yes" nameSelect={`${member}.singerRom`} component={RenderField} array={YN} />
                                    <Field name={`${member}.visa`} values="Yes" nameSelect={`${member}.visa`} component={RenderField} array={YN} />
                                </tr>
                            )
                        }))}
                    </tbody>
                </table>
                <input type="button" onClick={() => fields.push({})} defaultValue="Add" style={{ float: 'right', background: '#0072bb', border: 'none', color: '#fff', padding: '10px 23px', marginTop: 5, marginBottom: 10 }} />
            </div>
        )
    }
}



export default AddCustommer