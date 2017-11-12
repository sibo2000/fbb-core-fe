import React,{ Component } from 'react';
import Bets from './bets';
import { connect } from 'react-redux';

class Admin extends Component {

    render() {
        return (
            <div>
                <Bets type="errors"/>
            </div>
        )
    }

}

export default Admin;