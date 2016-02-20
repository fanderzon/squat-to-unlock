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

        <div className="row">
          <div className="wrapper">
            <div className="col-md-3 col-sm-3 col-xs-3 track" id="field_1">
              <div className="row runner" id="runner_1">
                <div className="col-md-12">
                  <h6>
                    Ready
                  </h6>
                </div>
                <div className="col-md-12" style={{marginTop: 5 + 'px'}}>
                  <img src="./images/male_1.png" className="avatar"></img>
                </div>
                <div className="col-md-12">
                  <h4>
                    Username
                  </h4>
                </div>
                <div className="col-md-12">
                  <h6>
                    Charity
                  </h6>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-3 col-xs-3 track" id="field_2">
              <div className="row runner" id="runner_1">
                <div className="col-md-12">
                  <h6>
                    Ready
                  </h6>
                </div>
                <div className="col-md-12" style={{marginTop: 5 + 'px'}}>
                  <img src="./images/female_1.png" className="avatar"></img>
                </div>
                <div className="col-md-12">
                  <h4>
                    Username
                  </h4>
                </div>
                <div className="col-md-12">
                  <h6>
                    Charity
                  </h6>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-3 col-xs-3 track" id="field_3">
            </div>

            <div className="col-md-3 col-sm-3 col-xs-3 track" id="field_4">
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ActiveGame;
