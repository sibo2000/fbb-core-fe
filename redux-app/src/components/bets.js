import React,{ Component } from 'react';
import BetsList from './betsList';
import Filters from './filters';

class Bets extends Component {

    render() {
        return (
            <div>
                <Filters/>
                <BetsList/>
            </div>
        )
    }

}

export default Bets;

