import React, {Component} from 'react';
import { Link } from 'react-router';

class FinishedGame extends Component{
  render() {
    return (
      <div>

        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <ul className="nav navbar-nav navbar-left">
              <li><Link to="/games"><i className="fa fa-chevron-left"></i></Link></li>
            </ul>
            <p className="navbar-text">Finished Game</p>
          </div>
        </nav>

        <div className="row m-t-3">

          <div className="col-md-12">

          </div>
        </div>

      </div>
    );
  }
}

export default FinishedGame;
