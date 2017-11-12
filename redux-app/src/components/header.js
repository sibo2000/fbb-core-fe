import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'

class Header extends Component {
    renderLinks() {
        if( this.props.authenticated ) {
            return [
            <li className="" key={1}>
                <Link className="" to="/bets">Bets</Link>
            </li>,
            <li className="" key={2}>
                <Link className="" to="/admin">Admin</Link>
            </li>,
            <li className="" key={3}> 
                <Link className="" to="/signout">Sign Out</Link>
            </li>
            ]
        } else {
            return [
                <li className="" key={1}><Link className="" to="/signin">Sign In</Link></li>,
                <li className="" key={2}><Link className="" to="/signup">Sign Up</Link></li>
            ]
        }
    }
    
    render(){
        return (
            <header>
                <div className="container">
                    <div className="row">
                    <div className="col-sm-6"><h1>thefbb.online <small>v0.1</small></h1></div>
                    <div className="col-sm-6"><ul className="nav nav-pills">{this.renderLinks()}</ul></div>
                    </div>
                </div>
            </header>
        )
    }
}

function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated
    }
}

export default connect(mapStateToProps)(Header)