import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import axios from 'axios';

class App extends Component {

  constructor(props){
        super(props);

        this.state = { results : [] };
    }

  componentDidMount() {
    axios.get('http://localhost:3002/api/v1/bets')
    .then(response => {
      console.log(response.data.obj)
      this.setState({ results : response.data.obj })
    })
    .catch(function (error) {
      console.log(error);
    });
  }


  render() {
    return (
      <div className="App">
        <header><h1>FootballBetBot<small>.co.uk</small></h1></header>
        <ul>
          {
          this.state.results.map(function(result, index){return <li key={result._id}>
            <div><h5>{result.event.predictionType}</h5></div>
            <div className={ result.event.prediction == 1 ? 'yellow' : 'grey'}>{ result.event.home }</div>
            <div className={ result.event.prediction == 2 ? 'yellow' : 'grey'}>{ result.event.away }</div>
            <div><p>{result.event.country} - {result.event.league}</p></div>
            <div>{ result.event.confidence}</div>
            <div><button>Place Bet</button></div>
            </li>})
          }
        </ul>
      </div>
    );
  }
}

export default App;
