import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";

import { FormInput, FormButton } from "../formFields";

import history from "../../history";
import OrderSummary from "./orderSummary";
import { UnderlinedTitle } from "./infoHelp";

class PaymentForm extends Component {
    render() {
        const { className, handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit} className={`${className} sign-up-form`}>
                <Field className="sign-up-form__name"
                    type="name"
                    title="Name"
                    placeholder="Name"
                    name="name"
                component={FormInput}/>
                <Field className="sign-up-form__email"
                    type="email"
                    title="Email"
                    placeholder="Email"
                    name="email"
                component={FormInput}/>
                <Field className="sign-up-form__password"
                    type="password"
                    title="Password"
                    placeholder="Password"
                    name="password"
                component={FormInput}/>
                <Field className="sign-up-form__confirm"
                    type="password"
                    title="Confirm Password"
                    placeholder="Confirm Password"
                    name="confirm"
                component={FormInput}/>

                <div className="sign-up-form__line"></div>
                <Field className="sign-up-form__login"
                    onClick={() => history.push('/account')}
                    type="submit"
                    title="Create Account"
                    name="login"
                component={FormButton}/>
                <Field className="sign-up-form__back"
                    onClick={() => history.push('/signin')}
                    type="button"
                    title="Back"
                    name="back"
                    short={true}
                component={FormButton}/>

                <div className="payment-form__shipping-info shipping-info">
                    <UnderlinedTitle className="shipping-info__title" title="Shipping To"/>
                    <div className="shipping-info__name small-text">{this.props.name}</div>
                    <div className="shipping-info__address small-text">{this.props.address}</div>
                </div>
            </form>
        )
    }
}

PaymentForm = reduxForm({
    form: 'PaymentForm'
})(PaymentForm);

function mapStateToProps(state) {
    const { name, address } = state.user.user;
    return { name, address }
}

PaymentForm = connect(mapStateToProps)(PaymentForm);

export default PaymentForm; 