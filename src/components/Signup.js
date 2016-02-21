import React, {Component} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actionCreators from '../action-creators.js';

const AvatarSelect = ( { url, selected, update } = { url: '', selected: false, update: function(){} } ) => {
  return (
    <label className="radio-inline text-center" onClick={() => update(url)}>
      <img src={url} className="avatar" />
      <br />
      <input type="radio" name="avatar" selected={selected} />
    </label>
  );
};

class Signup extends Component {

  constructor() {
    super();
    this.state = {
      username: null,
      avatar: null
    };
  }

  onUsernameChanged( e ) {
    this.setState({
      username: e.currentTarget.value
    });
  }

  onAvatarChanged( url ) {
    this.setState({
      avatar: url
    });
  }

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

            <form className="form-horizontal">

              <div className="form-group col-md-12">
                <label>Nickname</label>
                <input className="form-control col-md-12" type="text" placeholder="Select nickname" onKeyUp={(e) => this.onUsernameChanged(e)}></input>
              </div>

              <div className="form-group" style={{ marginBottom: 100 + 'px' }}>
                <label className="col-md-12">Select avatar</label>
                <div className="col-md-12">
                  <AvatarSelect url="images/female_1.png" update={this.onAvatarChanged.bind(this)}></AvatarSelect>
                  <AvatarSelect url="images/male_1.png" update={this.onAvatarChanged.bind(this)}></AvatarSelect>
                  <AvatarSelect url="images/female_2.png" update={this.onAvatarChanged.bind(this)}></AvatarSelect>
                  <AvatarSelect url="images/male_2.png" update={this.onAvatarChanged.bind(this)}></AvatarSelect>
                </div>
              </div>

              <Link to="/games">
                <div className="row footer bg-success new-game-footer">
                  <div className="col-md-12 text-center">
                    <p className="new-game-footer-text" onClick={() => {
                      return this.props.createPlayer( this.state.username, this.state.avatar );
                    }}>
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


export const SignupContainer = connect(
  function() { return {}; },
  actionCreators
)(Signup);

export default SignupContainer;
