import React,{ Component } from 'react';
import BetsList from './betsList';
import { connect } from 'react-redux';

class Admin extends Component {

    render() {
        return (
            <div>
                <BetsList type="errors"/>
            </div>
        )
    }

}

export default Admin;