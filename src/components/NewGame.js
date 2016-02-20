import React, {Component} from 'react';
import { Link } from 'react-router';

class NewGame extends Component{
  render() {
    return (
      <div>

        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <ul className="nav navbar-nav navbar-left">
              <li><Link to="/games"><i className="fa fa-chevron-left"></i></Link></li>
            </ul>
            <p className="navbar-text">New game</p>
          </div>
        </nav>

        <div className="custom-row">
        
        </div>

      </div>
    );
  }
}

export default NewGame;
