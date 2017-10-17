import React, { Component } from 'react';
import { connect } from 'react-redux'
import BetList from './betList'
import { fetchBets } from '../actions/api-actions';
import { bindActionCreators } from 'redux';

class BetListContainer extends Component {

    constructor() {
      super()
    }

    componentDidMount() {
        console.log('componentDidMount')
        this.props.fetchBets(this.props.type);
    }

    onRemove(id) {
      console.log(id)
    }

    render() {
        return (
            <BetList bets={this.props.bets.bets} onRemove={this.onRemove}/>
        )
    }
}

function mapStateToProps (state) {
    return {
      bets: getVisibleTodos(state.bets )
    }
  }


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchBets }, dispatch )
} 
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(BetListContainer)
  
  //export default BetListContainer