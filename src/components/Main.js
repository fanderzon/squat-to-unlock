import React, {Component} from 'react';
import { Link } from 'react-router';


class Main extends Component{

  init() {
    this.setInterval(this.animateIcon, 1400);
  }

  animateIcon(){
    var images = $('#squat_icon img'),
        now    = images.filter(':visible'),
        next   = now.next().length ? now.next() : images.first(),
        speed  = 1000;

    now.fadeOut(speed);
    next.fadeIn(speed);
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

export default Main;
