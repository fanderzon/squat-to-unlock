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
                <label className="">Select coding non profit to run for</label>
              </div>

              <div className="row">
                <table className="table table-striped custom-table table-hover">
                  <tbody>
                    <tr>
                      <td>
                        <div className="tallColumn">
                          Girls who code
                          <h6>
                            Working to close the gender gap in the technology and engineering sectors
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
                      <td>
                        <div className="tallColumn">
                          Code for America
                          <h6>
                            Making government services simple, effective, and easy to use.
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
                      <td>
                        <div className="tallColumn">
                          Coder Dojo
                          <h6>
                            The global network of free computer programming clubs for young people.
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
                      <td>
                        <div className="tallColumn">
                          Black Girls Code
                          <h6>
                            Working to increase the number of women of color in the digital space.
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
                      <td>
                        <div className="tallColumn">
                          Women who code
                          <h6>
                            Dedicated to inspiring women to excel in technology careers.
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
                      <td>
                        <div className="tallColumn">
                          Code 2040
                          <h6>
                            CODE2040 creates access, awareness, and opportunities for top Black and Latino/a engineering talent to ensure their leadership in the innovation economy.
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
                      <td>
                        <div className="tallColumn">
                          Bridge Foundry
                          <h6>
                            We empower people with technology through teaching and facilitating access, enlarging the community of people who give back and teach others.
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
                      <td>
                        <div className="tallColumn">
                          RAILS GIRLS SUMMER OF CODE
                          <h6>
                            Aim to foster diversity in Open Source since 2013
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
                      <td>
                        <div className="tallColumn">
                          Code Club
                          <h6>
                            A nationwide network of volunteer-led after school coding clubs for children aged 9-11
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
                      <td>
                        <div className="tallColumn">
                          Ada
                          <h6>
                            Reinventing software developer training. Addressing diversity in Seattle's tech community.
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

              <div className="form-group col-md-12" style={{ marginBottom: 100 + 'px' }}>
                <label>Donation to winning non profit (optional and can be changed after the race)</label>
                <select className="form-control col-md-12">
                  <option value="1">1 dollar</option>
                  <option value="5">5 dollar</option>
                  <option value="10">10 dollar</option>
                  <option value="100">100 dollar</option>
                </select>
              </div>

              <Link to="/game">
                <div className="row footer bg-success new-game-footer">
                  <div className="col-md-12 text-center">
                    <p className="new-game-footer-text">
                      Create game
                    </p>
                  </div>
                </div>
              </Link>
            </form>
          </div>

        </div>

      </div>
    );
  }
}

export default NewGame;
