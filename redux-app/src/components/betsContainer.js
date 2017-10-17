import React, { Component } from 'react';
import Bets from './bets';

class BetsContainer extends Component {
    constructor() {
        super()
    }

    render() {
        return <div>
                    <div className="row heading">
                        <div className="col-sm-12"><h1>Bets</h1></div>
                    </div>
                    <Bets />
               </div>
    }
}

export default BetsContainer