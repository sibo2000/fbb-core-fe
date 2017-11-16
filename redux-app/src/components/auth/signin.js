import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';
import { Link } from 'react-router';

class Signin extends Component {
    handleFormSubmit({email, password}){
        this.props.signinUser({email,password})
    }

    renderAlert() {
        if(this.props.errorMessage){
            return (
                <div className="alert alert-danger">
                    <strong>{this.props.errorMessage}</strong>
                </div>
            )
        }
    }
    render() {
        const { handleSubmit, fields: { email, password }} = this.props;
        return (
            <div className="centered">
                <div className="tabs">
                    <ul className="list-inline">
                        <li className="active"><Link to={'/signin'}>Sign In</Link></li>
                        <li><Link to={'/signup'}>Sign Up</Link></li>
                    </ul>
                </div>
                <div className="box">
                <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} className="form-horizontal">
                    <fieldset className="form-group">
                        <label className="col-sm-2 control-label">Email:</label>
                        <div className="col-sm-10"><input {...email} className="form-control" />
                        </div>
                    </fieldset>
                    <fieldset className="form-group">
                        <label className="col-sm-2 control-label">Password:</label>
                        <div className="col-sm-10">
                            <input {...password} className="form-control" type="password" />
                        </div>
                    </fieldset>
                    {this.renderAlert()}
                    <div className="form-group">
                        <div className="col-sm-10 col-sm-offset-2">
                            <button type="submit" action="submit" className="btn btn-primary">Sign In</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        )
    }
}

function mapStateToProps(state) {
    return { errorMessage : state.auth.error }
}

export default reduxForm({
    form: 'signin',
    fields:  ['email', 'password']
}, mapStateToProps, actions)(Signin);