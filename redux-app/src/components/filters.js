import React,{ Component } from 'react';
import BetsList from './betsList';
import {fetchBets, removeBet, saveBet, refreshBet, filterBets, fetchBetsByDate} from '../actions/api-actions'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Filters extends Component {
    
    constructor(props) {
        super(props);
    }

    filterBets = (filter) => {
        this.props.filterBets(filter);
    }
    
    render() {
        return <div className="row heading">
                    <div className="col-sm-2"><h1>Bets</h1></div>
                    <div className="col-sm-10">
                        <ul className="list-inline filters">
                            <li><a href="#" onClick={this.filterBets.bind(this,'SHOW_ALL')}>All</a></li>
                            <li><a href="#" onClick={this.filterBets.bind(this,'SHOW_BANKERS')}>Bankers</a></li>
                            <li><a href="#" onClick={this.filterBets.bind(this,'SHOW_VALUES')}>Values</a></li>
                            <li><a href="#" onClick={this.filterBets.bind(this,'SHOW_OTHERS')}>Others</a></li>
                            <li><a href="#" onClick={this.filterBets.bind(this,'SHOW_INBASKET')}>In Basket</a></li>
                            <li><a href="#" onClick={this.filterBets.bind(this,'SHOW_BETFAIR')}>Betfair</a></li>
                            <li><a href="#" onClick={this.filterBets.bind(this,'SHOW_UNMATCHED')}>Unmatched</a></li>
                        </ul>
                    </div>
                </div>
        }

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ filterBets }, dispatch )
}

export default connect(null,mapDispatchToProps)(Filters);