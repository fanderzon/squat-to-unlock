import React, {Component} from 'react';
import { Link } from 'react-router';

class Signup extends Component{
  render() {
    return (
      <div>

        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <span className="navbar-brand text-center" style={{ width: 100 + '%'}} >Squat to unlock</span>
          </div>
        </nav>

        <div className="row m-t-3">

          <div className="col-md-12">
            <p>
              Squat to unlock is a fitness game where you challenge people and friends – for good causes.  It was made during the <a href="https://hacksummit.org/" className="blue-link" target="blank">hack.summit() hackathon</a>.
            </p>

            <form className="form-horizontal">

              <div className="form-group col-md-12">
                <label>Nickname</label>
                <input className="form-control col-md-12" type="text" placeholder="Select nickname"></input>
              </div>

              <div className="form-group" style={{ marginBottom: 100 + 'px' }}>
                <label className="col-md-12">Select avatar</label>
                <div className="col-md-12">
                  <label className="radio-inline text-center">
                    <img src="./images/female_1.png" className="avatar"></img>
                    <br />
                    <input type="radio" name="avatar"></input>
                  </label>
                  <label className="radio-inline text-center">
                    <img src="./images/male_1.png" className="avatar"></img>
                    <br />
                    <input type="radio" name="avatar"></input>
                  </label>
                  <label className="radio-inline text-center">
                    <img src="./images/female_2.png" className="avatar"></img>
                    <br />
                    <input type="radio" name="avatar"></input>
                  </label>
                  <label className="radio-inline text-center">
                    <img src="./images/male_2.png" className="avatar"></img>
                    <br />
                    <input type="radio" name="avatar"></input>
                  </label>
                </div>
              </div>

              <Link to="/games">
                <div className="row footer bg-success new-game-footer">
                  <div className="col-md-12 text-center">
                    <p className="new-game-footer-text">
                      Get started
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

export default Signup;
