import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';
import { Link } from 'react-router';

class Signup extends Component {
    handleFormSubmit(formProps) {
        this.props.signupUser(formProps);
    }

    renderAlert() {
        if(this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    {this.props.errorMessage}
                </div>
            )
        }
    }
    
    render(){
        const { handleSubmit, fields: {email, password, passwordConfirm, userName}} = this.props;
        
        return <div className="centered">
                <div className="tabs">
                    <ul className="list-inline">
                        <li><Link to={'/signin'}>Sign In</Link></li>
                        <li className="active"><Link to={'/signup'}>Sign Up</Link></li>
                    </ul>
                </div>
                <div className="box">
                    <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} className="form-horizontal">
                        <fieldset className="form-group">
                            <label className="col-sm-2 control-label">Username:</label>
                            <div className="col-sm-10"><input className="form-control" {...userName} /></div>
                        </fieldset>
                        <fieldset className="form-group">
                            <label className="col-sm-2 control-label">Email:</label>
                            <div className="col-sm-10"><input type="email" className="form-control" {...email} /></div>
                        </fieldset>
                        <fieldset className="form-group">
                            <label className="col-sm-2 control-label">Password:</label>
                            <div className="col-sm-10"><input type="password" className="form-control" {...password} /></div>
                            {password.touched && password.error && <div className="error">{password.error}</div>}
                        </fieldset>
                        <fieldset className="form-group">
                            <label className="col-sm-2 control-label">Confirm:</label>
                            <div className="col-sm-10"><input type="password" className="form-control" {...passwordConfirm} /></div>
                        </fieldset>
                        {this.renderAlert()}
                        <div className="form-group">
                            <div className="col-sm-10 col-sm-offset-2">
                                <button action="submit" className="btn btn-primary">Sign up</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
    }
}

// function mapStateToProps(state) {
//     return { errorMessage : state.auth.error }
// }

function validate(formProps) {
    const errors = {};

    if(formProps.password !== formProps.passwordConfirm) {
        errors.password = 'Passwords must match';
    }

    return errors;
}

function mapStateToProps(state) {
    return { errorMessage : state.auth.error }
}

export default reduxForm({ form : 'signup',
fields: ['email', 'password', 'passwordConfirm', 'userName'],
validate
}, mapStateToProps, actions)(Signup);