import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'

class Header extends Component {

    constructor(props){
        super(props)

        this.state = {
            links : [
                { name: 'Bets', url : '/bets'},
                { name: 'Admin', url : '/admin', authenticationRequired: true},
                { name: 'Settings', url : '/settings'},
                { name: 'Sign In', url : '/signin', authenticationRequired: false},
                { name: 'Sign Out', url : '/signout', authenticationRequired: true}
            ]
        }
    }

    renderLinks() {
         
            return this.state.links.map((link,index) => {
                if( link.authenticationRequired === true && !this.props.authenticated
                || link.authenticationRequired === false && this.props.authenticated ){
                    return '';
                } else {
                return (
                    <li className="" key={index}>
                        <Link className="" to={link.url} activeClassName="active">{link.name}</Link>
                    </li>
                )
                }
            })
        
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

export default connect(mapStateToProps,null,null,{
    pure: false
  })(Header)