import React, {Component} from 'react';
import { Link } from 'react-router';

class GameList extends Component{
  render() {
    return (
      <div>

        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <ul className="nav navbar-nav navbar-left">
              <li>
                <Link to="/info"><i className="fa fa-info"></i></Link>
              </li>
            </ul>
            <p className="navbar-text">Games</p>
            <ul className="nav navbar-nav navbar-right pull-right">
              <li className="pull-right">
                <Link to="/new_game"><i className="fa fa-plus"></i></Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className="row">
          <div className="jumbotron bg-success">
            <div className="col-md-12 text-center">
              <button className="btn random-game-btn"><img src="./images/random_game.png" /></button>
            </div>
            <div className="list-header">
              RUNNING
            </div>
          </div>
        </div>

        <div className="row">
          <table className="table table-striped custom-table table-hover">
            <tbody>
              <tr>
                <td className="small-column"><img src="./images/runner.png" className="game-type-icon" /></td>
                <td>
                  <div className="tallColumn">
                    Username
                    <h6>
                      2 / 4 players, 100 meters
                    </h6>
                  </div>
                </td>
                <td className="text-right"><i className="fa fa-chevron-right"></i></td>
              </tr>
              <tr>
                <td className="small-column"><img src="./images/runner.png"  className="game-type-icon" /></td>
                <td>
                  <div className="tallColumn">
                    Username
                    <h6>
                      2 / 4 players, 100 meters
                    </h6>
                  </div>
                </td>
                <td className="text-right"><i className="fa fa-chevron-right"></i></td>
              </tr>

            </tbody>
          </table>
        </div>

      </div>
    );
  }
}

export default GameList;
