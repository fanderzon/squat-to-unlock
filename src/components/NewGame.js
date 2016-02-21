import React, {Component} from 'react';
import { Link } from 'react-router';
import * as actionCreators from '../action-creators.js';
import { connect } from 'react-redux';
var Select = require('react-select');

const CHARITIES = [
  {
    textKey: 'girls-who-code',
    name: 'Girls who code',
    desc: 'Working to close the gender gap in the technology and engineering sectors'
  },
  {
    textKey: 'code-for-america',
    name: 'Code for America',
    desc: 'Making government services simple, effective, and easy to use.'
  },
  {
    textKey: 'coder-dojo',
    name: 'Coder Dojo',
    desc: 'The global network of free computer programming clubs for young people.'
  },
  {
    textKey: 'black-girls-code',
    name: 'Black Girls Code',
    desc: 'Working to increase the number of women of color in the digital space.'
  },
  {
    textKey: 'women-who-code',
    name: 'Women who code',
    desc: 'Dedicated to inspiring women to excel in technology careers.'
  },
  {
    textKey: 'code-2040',
    name: 'Code 2040',
    desc: 'CODE2040 creates access, awareness, and opportunities for top Black and Latino/a engineering talent to ensure their leadership in the innovation economy.'
  },
  {
    textKey: 'bridge-foundry',
    name: 'Bridge Foundry',
    desc: 'We empower people with technology through teaching and facilitating access, enlarging the community of people who give back and teach others.'
  },
  {
    textKey: 'rails-girls',
    name: 'RAILS GIRLS SUMMER OF CODE',
    desc: 'Aim to foster diversity in Open Source since 2013'
  },
  {
    textKey: 'code-club',
    name: 'Code Club',
    desc: 'A nationwide network of volunteer-led after school coding clubs for children aged 9-11'
  },
  {
    textKey: 'ada',
    name: 'Ada',
    desc: 'Reinventing software developer training. Addressing diversity in Seattle\'s tech community.'
  }
]

const CharitySelect = ( { selectedKey, textKey, name, desc, update } = { selectedKey: '', textKey: '', name: '', desc: '', update: function(){} } ) => {
  return (
    <tr onClick={update}>
      <td>
        <div className="tallColumn">
          {name}
          <h6>
            {desc}
          </h6>
        </div>
      </td>
      <td className="text-right">
        <div className="radio">
          <input type="radio" name="charityradio" checked={ selectedKey === textKey }></input>
        </div>
      </td>
    </tr>
  );
};

class NewGame extends Component{

  constructor() {
    super();
    this.state = {
      target: 100,
      charity: 'girls-who-code',
      dollars: 1
    };
  }

  render() {
    console.log('render new game', this.state);
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
                <select className="form-control col-md-12" value={this.state.target} onChange={ e => {
                  this.setState({
                    target: e.target.value || 100
                  });
                }}>
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

                  {CHARITIES.map(function( charity, i ) {
                      return <CharitySelect key={i} textKey={charity.textKey} selectedKey={this.state.charity} name={charity.name} desc={charity.desc} update={() => {
                        this.setState({
                          charity: charity.textKey
                        });
                      }}  />
                  }.bind(this))}

                  </tbody>
                </table>
              </div>

              <div className="form-group col-md-12" style={{ marginBottom: 100 + 'px' }}>
                <label>Donation to winning non profit (optional and can be changed after the race)</label>
                <select className="form-control col-md-12" value={this.state.dollars} onChange={ e => {
                  this.setState({
                    dollars: e.target.value || 1
                  });
                }}>
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

const ConnectedNewGame = connect(
  function() { return {

  }; },
  actionCreators
)(NewGame);

export default ConnectedNewGame;
