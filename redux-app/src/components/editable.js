import React, { Component } from 'react'

class Editable extends Component {

    constructor(props) {
        super(props)
        this.state = {
            editing : false,
        }
    }

    componentDidMount() {
        var bet = this.props.bet
        bet.betfair = {
            id : ''
        }
        this.setState({bet});
     }

    onEdit() {
        this.setState({
            editing : !this.state.editing
        })
    }

    onChange = (e) => {
        const { bet } = this.state;
        const newbet = {
            ...bet,
            [e.target.name] : e.target.value
        }
        this.setState({bet : newbet});
    }

    onSave = (e) => {
        this.onEdit();
        this.props.onSave(this.state.bet);
    }

    formatDate (date) {
        const d = new Date(date);
        return d.getDate()+'/'+(d.getMonth()+1)+'/'+d.getFullYear()
    }

    render() {
        if(!this.state.bet) return <div></div>
        return(
        <div className="row editable-bet">
            <div className="col-sm-2">
                <p>{this.formatDate(this.state.bet.eventDate)}</p>
            </div>
            <div className="col-sm-2">
                {
                    !this.state.editing?
                
                <p>{this.state.bet.home}</p>:
                <input className="form-control" type="text" value={this.state.bet.home} name="home" onChange={this.onChange}/>
                }
            </div>

            <div className="col-sm-2">
                {
                !this.state.editing?
                <p>{this.state.bet.away}</p>:
                <input className="form-control"  type="text" value={this.state.bet.away} name="away" onChange={this.onChange}/>
                }
            </div>

            <div className="col-sm-2">
                {
                !this.state.editing?
                <p>{this.state.bet.league}</p>:
                <input className="form-control"  type="text" value={this.state.bet.league} name="league" onChange={this.onChange}/>
                }
            </div>
            <div className="col-sm-1">
               
                    {  this.state.editing ? 
                    <input className="form-control" value={this.state.bet.confidence} name="confidence" onChange={this.onChange}/>
                    : <p>{this.state.bet.confidence}</p>
                    }
               
            </div>
            <div className="col-sm-2">
                <input className="form-control"  type="text" value={this.state.bet.betfair.id} name="betfair"/>
            </div>
            <div className="col-sm-1">
                {
                    this.state.editing?
                    <button className="btn btn-primary" onClick={this.onSave.bind(this)}>Save</button>
                    
                : <button className="btn btn-primary" onClick={this.onEdit.bind(this)}>Edit</button>
                }
            </div>        
        </div>)
    }

}

export default Editable;