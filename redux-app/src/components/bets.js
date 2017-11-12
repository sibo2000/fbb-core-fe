import React, { Component } from 'react';
import { connect } from 'react-redux'
import {fetchBets, removeBet, saveBet, filterBets} from '../actions/api-actions'
import Bet from './bet';
import EditableBets from './editableBet';
import { bindActionCreators } from 'redux';
import Editable from './editable';



class Bets extends Component {

    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        this.props.fetchBets(this.props.type);
    }

    onRemove = (id) => {
        this.props.removeBet(id);
    }

    onSave = (bet) => {
        this.props.saveBet(bet);
    }

    filterBets = (filter) => {
        this.props.filterBets(filter);
    }

    filteredBets = () => {
        var bets = this.props.bets.bets
        switch(this.props.bets.filter) {
            case 'SHOW_BANKERS':
            
                bets = bets.filter((bet)=> {
                    return bet.type === 'banker'
                })
            break;
            case 'SHOW_VALUES':
                bets = bets.filter((bet)=> {
                    return bet.type === 'value'
                })
            break;
            case 'SHOW_OTHERS':
                bets = bets.filter((bet)=> {
                    return bet.type === 'other'
                })
            break;
            case 'SHOW_INBASKET':
                bets = bets.filter((bet)=> {
                    return bet.inBasket === true
                })
            break;
            case 'SHOW_BETFAIR':
                bets = bets.filter((bet)=> {
                    return bet.betfair != null
                })
            break;
        
        }

        return bets;
    }

    renderBets() {
        
        if(!this.props.bets.bets) return <div></div>;
        return this.filteredBets().map((bet,index)=> {
            
            switch(this.props.type) {
                case 'errors':
                    return <Editable key={index} bet={bet} {...this.props} onRemove={this.onRemove} onSave={this.onSave} />
                break;
                default:
                    return <Bet bet={bet} key={index}/>;
            }
        })
    }
    
    render() {
        return (<div>
                <div className="row heading">
                    <div className="col-sm-2"><h1>Bets</h1></div>
                    <div className="col-sm-10">
                        <ul className="list-inline filters">
                            <li><a href="#" onClick={this.filterBets.bind(this,'SHOW_BANKERS')}>Bankers</a></li>
                            <li><a href="#" onClick={this.filterBets.bind(this,'SHOW_VALUES')}>Values</a></li>
                            <li><a href="#" onClick={this.filterBets.bind(this,'SHOW_OTHERS')}>Others</a></li>
                            <li><a href="#" onClick={this.filterBets.bind(this,'SHOW_INBASKET')}>In Basket</a></li>
                            <li><a href="#" onClick={this.filterBets.bind(this,'SHOW_BETFAIR')}>Betfair</a></li>
                            
                        </ul>
                    </div>
                </div>
                <div className="row">{this.renderBets()}</div>
            </div>)
    }
}

function mapStateToProps(state) {
    return {
        bets: state.bets
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchBets, removeBet, saveBet, filterBets }, dispatch )
}

export default connect(mapStateToProps,mapDispatchToProps)(Bets);