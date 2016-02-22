import React, {Component} from 'react';
import { Link } from 'react-router';
import * as actionCreators from '../action-creators.js';
import { connect } from 'react-redux';

class Main extends Component {

  constructor() {
    super();
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
                <div id="cf">
                  <img src="./images/squat-icon.gif" className="img-responsive center-block squat-icon" alt="Squat icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="row footer bg-dark">
            <div className="col-md-12 text-center">
              <Link to="/signup">
                <h5 style={{ marginBottom: 0 + 'px' }}>
                  Squat to unlock
                </h5>
                <h6 style={{ paddingBottom: 10 + 'px'}}>
                  (while holding your phone in front of you)
                </h6>
              </Link>
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
