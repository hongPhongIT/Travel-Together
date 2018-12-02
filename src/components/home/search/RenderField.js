import { Field } from 'redux-form';
import React from 'react'
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

const RenderField = ({ input, holder, nameSelect, label, date, type, select, array, meta: { touched, error, warning } }) => {
    return (
        <div className="single-tab-select-box">
            <h2>{label}</h2>
            {
                select && nameSelect ?
                    (<div className="travel-select-icon">
                        <Field name={nameSelect} component="select" className="form-control">
                            {array.map(a => (
                                <option key={a.id}>{a.name}</option>
                            ))}
                        </Field>
                    </div>
                    )
                    :
                    (
                        <div className="travel-check-icon">
                            {date ? <DatePicker {...input} dateForm="DD/MM/YYYY"
                                selected={input.value ? moment(input.value) : null}
                                minDate={moment()} maxDate={moment().add(5, "months")}
                                className="form-control" />
                                : <input  {...input} placeholder={holder} type={type} className="form-control" />}

                        </div>
                    )
            }
            {touched && ((error && <span style={{ color: 'red' }}>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    )
}

export default RenderField