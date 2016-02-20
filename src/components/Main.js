import React, {Component} from 'react';
import { Link } from 'react-router';


class Main extends Component{
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
              <p>
                <h5>
                  <Link to="/games">Squat to unlock</Link>
                </h5>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
