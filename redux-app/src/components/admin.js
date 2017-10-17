import React,{ Component } from 'react';
import Bets from './bets';
import { connect } from 'react-redux';
import BetListContainer from './betListContainer';

class Admin extends Component {

    render() {
        return (
            <div>
                <div className="row heading">
                    <div className="col-sm-12"><h1>Admin</h1></div>
                </div>
                <Bets type="errors"/>
            </div>
        )
    }

}

export default Admin;