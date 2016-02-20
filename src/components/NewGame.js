import React, {Component} from 'react';
import { Link } from 'react-router';

class NewGame extends Component{
  render() {
    return (
      <div>

        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <ul className="nav navbar-nav navbar-left">
              <li className="pull-left">
                <Link to="/games">
                  <i className="fa fa-chevron-left"></i>
                </Link>
              </li>
              <li className="navbar-text">
                New Game
              </li>
            </ul>
          </div>
        </nav>

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

export default NewGame;
