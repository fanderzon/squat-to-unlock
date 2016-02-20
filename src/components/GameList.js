import React, {Component} from 'react';
import { Link } from 'react-router';

class GameList extends Component{
  render() {
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <ul className="nav navbar-nav">
              <li className="pull-left"><a href="#">Profile</a></li>
              <li className="navbar-text">Games</li>
              <li><a href="#">
                </a></li>
              <li className="social pull-right"><a href="#">New game</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default GameList;
