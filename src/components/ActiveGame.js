import React, {Component} from 'react';
import { Link } from 'react-router';
import { Button, Modal, OverlayTrigger, Popover } from 'react-bootstrap';

class ActiveGame extends Component{

  constructor(props) {
    super(props);
    this.close = this.close.bind( this );
    this.close = this.close.bind( this );
    this.state = {
        showModal: true
    };
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

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

        <Modal show={this.state.showModal} backdrop="static" onHide={this.close}>
          <Modal.Header>
            <Modal.Title><h3>Waiting for player(s)</h3></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>To play you hold your phone in front of you - and then run as fast as you can! The first player to cross the finish line wins fame and glory, for themselves and their charity.</p>
            <p>
              Invite players to join the game:
            </p>
            <p className="text-center">
              <button className="btn social-btn"><img src="./images/Twitter.png" /></button>
              <button className="btn social-btn"><img src="./images/Facebook.png" /></button>
            </p>
          </Modal.Body>
          <Modal.Footer>
            <div className="text-center">
              <ul className="list-inline">
                <li>
                  <Button bsStyle="primary" bsSize="lg" onClick={this.close}>Start race</Button>
                </li>
                <li>
                  <Link to="/finished_game">
                    <Button bsStyle="default" bsSize="lg">Leave game</Button>
                  </Link>
                </li>
              </ul>
            </div>
          </Modal.Footer>
        </Modal>
      </div>


    );
  }
}

export default ActiveGame;
