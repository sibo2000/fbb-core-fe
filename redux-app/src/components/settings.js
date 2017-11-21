import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'

class Settings extends Component {
    render(){
        return(
            <div>
                <ul>
                    <li>min stake</li>
                    <li>confidence minimum</li>
                    <li>include countries</li>
                    <li>include types</li>
                    <li>odds minimum</li>
                    <li>form check</li>
                </ul>
            </div>
        )
    }
}

export default Settings;