import React, {Component} from 'react';
import { Link } from 'react-router';

class ActiveGame extends Component{
  render() {
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <span className="navbar-brand text-center" style={{width: 100 + '%'}}>Goal</span>
          </div>
        </nav>

        <div className="row m-t-3">
          <div className="col-md-12">
            <h1>Active game</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default ActiveGame;
