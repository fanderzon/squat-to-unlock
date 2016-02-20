import './style/index.scss';
import React from 'react';
import { render } from 'react-dom';
import App from './components/App.js';
import routes from './routes.js';
import { Router, browserHistory } from 'react-router';
import { createStore } from 'redux';
import reducer from './reducers/reducer.js';

const store = createStore(reducer);
store.dispatch({
  type: 'SET_STATE',
  state: {
    games: [
      {
        gameId: 1,
        gameHash: 'Ky',
        type: 'squats',
        mode: 'qty',
        target: 80,
        players: [ 4 ],
        status: 'pending',
        created: new Date('Sat Feb 20 2016 18:13:52 GMT+0100 (CET)'),
        readied: null,
        started: null,
        finished: null,
        score: []
      },
      {
        gameId: 2,
        gameHash: '4n',
        type: 'running',
        mode: 'qty',
        target: 50,
        players: [ 3, 4 ],
        status: 'pending',
        created: new Date('Sat Feb 20 2016 18:13:52 GMT+0100 (CET)'),
        readied: null,
        started: null,
        finished: null,
        score: []
      }
    ]
  }
});

render(
  <Router routes={routes} history={browserHistory}/>,
  document.getElementById( 'app' )
);
