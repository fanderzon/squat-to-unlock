import './style/index.scss';
import React from 'react';
import { render } from 'react-dom';
import App from './components/App.js';
import routes from './routes.js';
import { Router, browserHistory } from 'react-router';

render(
  <Router routes={routes} history={browserHistory}/>,
  document.getElementById( 'app' )
);
