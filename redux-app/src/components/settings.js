import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'

class Settings extends Component {
    constructor(props) {
        super(props)

        this.state = {
            countries : ['Europe', 'South America','Internationals', 'Competitions'],
            types: ['Banker', 'Value', 'Other'],
            stake : 2
        }
    }

    handleChange = event => {
        this.setState({ stake : event.target.value });
    }

    render(){
        return(
            <div>
                <div className="row heading">
                    <div className="col-sm-12"><h1>Settings</h1></div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="row">
                            <form className="form-horizontal">
                        
                                    <div className="form-group">
                                        <label className="col-sm-2 control-label" htmlFor="minstake">Minimum Stake</label>
                                        <div className="col-sm-1">
                                            <input type="range" className="form-control slider" id="minstake" min="1" max="10" value={this.state.stake} onChange={this.handleChange} step="1"/>
                                        <span>{this.state.stake}</span>
                                        </div>
                                        <p className="col-sm-6 setting-description">
                                            Set the minimum stake for each bet placed in &pound;s
                                            </p>
                                    </div>
                            
                                    <div className="form-group">
                                        <label className="col-sm-2 control-label" htmlFor="minconfidence">Minimum Confidence</label>
                                        <div className="col-sm-1">
                                            <input type="number" className="form-control" id="minconfidence" placeholder="Min Confidence" value="8"/>
                                        </div>
                                        <p className="col-sm-6 setting-description">Set the minimum confidence value that a bet must meet in order to be placed. From 1-10</p>
                                    </div>

                                    <div className="form-group">
                                        <label className="col-sm-2 control-label" htmlFor="minodds">Minimum Odds</label>
                                        <div className="col-sm-1">
                                            <input type="number" className="form-control" id="minodds" placeholder="Min Odds" value="3"/>
                                        </div>
                                        <p className="col-sm-6 setting-description">Set the minimum odds value that a bet must meet in order to be placed.</p>
                                    </div>

                                    <div className="form-group">
                                        <label className="col-sm-2 control-label" htmlFor="minform">Minimum Form</label>
                                        <div className="col-sm-1">
                                            <input type="number" className="form-control" id="minform" placeholder="Min Odds" value="3"/>
                                        </div>
                                        <p className="col-sm-6 setting-description">Set the minimum form value that a bet must meet in order to be placed. Form is last 5 games across all competitions. Calculated as %</p>
                                    </div>
                                
                                    <div className="form-group">
                                        <label className="col-sm-2 control-label" htmlFor="types">Types</label>
                                        <div className="col-sm-6">
                                        {
                                            this.state.types.map( (type,index) => {
                                                return <label className="checkbox-inline" key={index}>
                                                            <input type="checkbox" checked={type.checked}/>{type}
                                                        </label>
                                                })
                                            }
                                        </div>
                                    </div>
                            
                                    <div className="form-group">
                                        <label className="col-sm-2 control-label" htmlFor="minconfidence">Countries</label>
                                        <div className="col-sm-6">
                                            {
                                            this.state.countries.map( (country,index) => {
                                                return <label className="checkbox-inline" key={index}>
                                                            <input type="checkbox" value={country}/>{country}
                                                        </label>
                                                })
                                            }
                                        </div>
                                    </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Settings;