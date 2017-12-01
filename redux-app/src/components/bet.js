import React, { Component } from 'react';

class Bet extends Component {

    constructor(props) {
        super(props);
    }

    formatDate (date) {
        const d = new Date(date);
        return d.getDate()+'/'+(d.getMonth()+1)+'/'+d.getFullYear()
    }
    render() {
        if(!this.props.bet)return<div></div>
        return(
        <div className="col-sm-3">
                <div className="bet">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title">{this.props.bet.predictionType}</h3>
                        </div>
                        <div className="panel-body">
                            <div className={"grid team " + (this.props.bet.prediction == 1 ? 'toWin':'')}>
                                <h2>{this.props.bet.home}</h2>
                            </div>
                            <div className="versus"><span className="divider"></span><span>V</span></div>
                            <div className={"grid team " + (this.props.bet.prediction == 2 ? 'toWin':'')}>
                                <h2>{this.props.bet.away}</h2>
                            </div>
                            <div className="band">
                                <p className="country">
                                { this.props.bet.country
                                && <img src={'/style/flags/' + this.props.bet.country.toLowerCase() + '.svg'} /> }
                                    
                                    </p>
                                <p className="league"><span>{this.props.bet.league}</span></p>
                                <p className="date">{this.formatDate( this.props.bet.eventDate )}</p>
                            </div>
                            
                            <div>
                                <div className="prediction">{((this.props.bet.prediction == 1 ?
                                    'home':'away')+' win').toUpperCase()}</div>
                                <div className="type">{this.props.bet.type}</div>
                            </div>
                            <div className="footer">
                                <div className="confidence">{this.props.bet.confidence}</div>
                                <div className="grid odds">{this.props.bet.betfair? this.props.bet.betfair.price : '-'}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Bet;