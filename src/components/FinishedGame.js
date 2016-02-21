import React, {Component} from 'react';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';


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
            <div className="text-center">
              <h4>
                Winner
              </h4>
              <h2>
                Username / Charity
              </h2>
              <p>
                <a href="https://support.worldwildlife.org/site/SPageServer?pagename=main_monthly_2014&s_src=AWG1507SS912&_ga=1.222734555.1928585033.1456037524" target="_blank">
                  <Button
                    bsStyle="success"
                    bsSize="large"
                    >
                    Donate to WWF
                  </Button>
                </a>
              </p>
              <p class="help-block text-muted">
                Total pot if everyone donates: $6
              </p>
            </div>
          </div>
        </div>

        <div className="row" style={{ marginBottom: 90 + 'px' }}>
          <table className="table table-striped custom-table table-hover">
            <tbody>
              <tr>
                <td><img src="./images/female_1.png" className="avatar-icon" /></td>
                <td>
                  <div className="tallColumn">
                    Username
                    <h6>
                      WWF, donation: $1
                    </h6>
                  </div>
                </td>
                <td className="text-right">
                  20,5 seconds
                </td>
              </tr>
              <tr>
                <td><img src="./images/female_2.png"  className="avatar-icon" /></td>
                <td>
                  <div className="tallColumn">
                    Username
                    <h6>
                      WWF, donation: $5
                    </h6>
                  </div>
                </td>
                <td className="text-right">
                  21 seconds
                </td>
              </tr>

            </tbody>
          </table>
        </div>

        <Link to="/games">
          <div className="row footer bg-primary new-game-footer">
            <div className="col-md-12 text-center">
              <p className="new-game-footer-text">
                Back to games
              </p>
            </div>
          </div>
        </Link>


      </div>
    );
  }
}

export default FinishedGame;
