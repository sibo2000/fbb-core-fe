import React, { Component } from 'react';
import { connect } from 'react-redux'
import {fetchBets, removeBet, saveBet} from '../actions/api-actions'
import Bet from './bet';
import EditableBets from './editableBet';
import { bindActionCreators } from 'redux';
import Editable from './editable';

class Bets extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bets : []
        }
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
    
    
    renderBets() {
        
        if(!this.props.bets.bets) return <div></div>;
       
        return this.props.bets.bets.map((bet,index)=> {
            console.log(bet)
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
        return (
            
            <div className="row bets">
                {this.renderBets()}    
            </div>
            
        )
    }
}

function mapStateToProps(state) {
    return {
        bets: state.bets
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchBets, removeBet, saveBet }, dispatch )
}

export default connect(mapStateToProps,mapDispatchToProps)(Bets);