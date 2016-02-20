import React, {Component} from 'react';
import { Link } from 'react-router';

class GameList extends Component{
  render() {
    return (
      <div>

        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <ul className="nav navbar-nav navbar-left">
              <li className="pull-left"><a href="#"><i className="fa fa-user"></i></a></li>
              <li className="navbar-text">
                Games
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right pull-right">
              <li className="pull-right"><a href="#"><i className="fa fa-plus"></i></a></li>
            </ul>
          </div>
        </nav>

        <div className="jumbotron bg-success random-game-container">
          <div className="col-md-12 text-center">
            <button className="btn random-game-btn"><img src="./images/random_game.png" /></button>
          </div>
          <div className="col-md-12 list-header">
            RUNNING
          </div>
        </div>

        <div className="custom-row">

          <div className="col-md-12">
            <table className="table table-striped game-table table-hover">
              <tbody>
                <tr>
                  <td className="small-column"><img src="./images/runner.png" className="game-type-icon" /></td>
                  <td>
                    <div className="usernameColumn">
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
                    <div className="usernameColumn">
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

      </div>
    );
  }
}

export default GameList;
