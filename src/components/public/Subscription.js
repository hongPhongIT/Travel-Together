import React from 'react'
import { Field, reduxForm } from 'redux-form';

const InputField = ({ input, meta: { touched, error, warning } }) => {
    return (
        <div>
            <input  {...input} name="email"  type="email" className="form-control" placeholder="Enter your Email Here"/>          
            {touched && ((error && <span style={{ color: 'red' }}>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    )
}

const Subscription = props => {
    const { handleSubmit } = props;
    return (
        <section id="subs" className="subscribe">
            <div className="container">
                <div className="subscribe-title text-center">
                    <h2>Join our Subscribers List to Get Regular Update</h2>
                    <p>Subscribe Now. We will send you Best offer for your Trip</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                            <div className="custom-input-group">
                                <Field component={InputField} name="email"/>
                                <button type="submit" className="appsLand-btn subscribe-btn">Subscribe</button>
                                <div className="clearfix" />
                                <i className="fa fa-envelope" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default reduxForm({
    form: 'subscription',
})(Subscription);