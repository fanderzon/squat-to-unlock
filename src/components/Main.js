import React, {Component} from 'react';
import { Link } from 'react-router';
import * as actionCreators from '../action-creators.js';
import { connect } from 'react-redux';

class Main extends Component {

  constructor() {
    super();
    console.log( 'mainMount', listenForSquat );
    this.squatListener = listenForSquat( () => this.props.goTo('/signup') );
  }

  componentWillUnmount() {
    this.squatListener();
  }

  render() {
    return (
      <div>
        <div className="filler"></div>
        <div className="container-fluid bg-dark">
          <div className="row">
            <div className="col-md-12">
              <div className="image-container">
                <img src="./images/squat-icon.png" className="img-responsive center-block squat-icon" alt="Squat icon" />
              </div>
            </div>
          </div>
          <div className="row footer bg-dark">
            <div className="col-md-12 text-center">
              <h5>
                <Link to="/signup">Squat to unlock</Link>
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const ConnectedMain = connect(
  function() { return {}; },
  actionCreators
)(Main);

export default ConnectedMain;
