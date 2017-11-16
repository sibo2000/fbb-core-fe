import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Link } from 'react-router';

class Signout extends Component {
    componentWillMount() {
        this.props.signoutUser();
    }
    render() {
        return <div>
                <p>You have successfully signed out...Laters</p>
                <Link className="btn btn-primary" to="signin">Sign In</Link>
                </div>
    }
}

export default connect(null, actions)(Signout);