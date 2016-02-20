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

        <div className="row m-t-3">

          <div className="col-md-12">

            <form className="form-horizontal">

              <div className="form-group col-md-12">
                <label>Distance</label>
                <select className="form-control col-md-12">
                  <option value="100">100 meters</option>
                  <option value="200">200 meters</option>
                  <option value="300">300 meters</option>
                  <option value="500">500 meters</option>
                </select>
              </div>

              <div className="form-group col-md-12" style={{ marginBottom: 0 + 'px' }}>
                <label className="col-md-12">Select charity</label>
              </div>

              <div className="row">
                <table className="table table-striped custom-table table-hover">
                  <tbody>
                    <tr>
                      <td><img src="./images/amnesty.png" className="charity-icon" /></td>
                      <td>
                        <div className="tallColumn">
                          Amnesty
                          <h6>
                            Human rights
                          </h6>
                        </div>
                      </td>
                      <td className="text-right">
                        <div className="radio">
                          <input type="radio" name="charityradio"></input>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td><img src="./images/wwf.png"  className="charity-icon" /></td>
                      <td>
                        <div className="tallColumn">
                          WWF
                          <h6>
                            Wildlife conservation and endangered species
                          </h6>
                        </div>
                      </td>
                      <td className="text-right">
                        <div className="radio">
                          <input type="radio" name="charityradio"></input>
                        </div>
                      </td>
                    </tr>

                  </tbody>
                </table>
              </div>

              <div className="form-group col-md-12">
                <label>Donation to winning charity (optional)</label>
                <select className="form-control col-md-12">
                  <option value="1">1 dollar</option>
                  <option value="5">5 dollar</option>
                  <option value="10">10 dollar</option>
                  <option value="100">100 dollar</option>
                </select>
              </div>


            </form>
          </div>

        </div>

      </div>
    );
  }
}

export default NewGame;
