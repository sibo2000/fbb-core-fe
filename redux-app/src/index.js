import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';
import promise from 'redux-promise';

import App from './components/app';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';
import RequireAuth from './components/auth/require_auth';
import Feature from './components/feature';
import Welcome from './components/welcome';
import Bets from './components/bets';
import BetsContainer from './components/betsContainer';
import Admin from './components/admin';
import reducers from './reducers';
import { AUTH_USER } from './actions/types';

const createStoreWithMiddleware = applyMiddleware(promise, reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const token = localStorage.getItem('token');

if(token) {
  store.dispatch({ type : AUTH_USER })
}

ReactDOM.render(
<Provider store={store}>
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Welcome}/>
      <Route path="signin" component={Signin} />
      <Route path="signout" component={Signout} />
      <Route path="signup" component={Signup} />
      <Route path="feature" component={RequireAuth(Feature)} />
      <Route path="bets" component={Bets} />
      <Route path="admin" component={Admin} />
    </Route>
  </Router>
</Provider>
, document.querySelector('.app'));
