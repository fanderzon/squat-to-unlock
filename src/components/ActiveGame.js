import React, {Component} from 'react';
import { Link } from 'react-router';
import { Button, Modal, OverlayTrigger, Popover } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actionCreators from '../action-creators.js';


const PlayerTrack = (props) => {
  const username = props.username || 'unknown';
  const avatar = props.avatar || 'images/male_1.png';
  const charity = props.charity || 'none';
  return (
    <div className="col-md-3 col-sm-3 col-xs-3 track" id="field_1">
      <div className="row runner" id="runner_1">
        <div className="col-md-12">
          <h6>
            Ready
          </h6>
        </div>
        <div className="col-md-12" style={{marginTop: 5 + 'px'}}>
          <img src={'/' + avatar} className="avatar" />
        </div>
        <div className="col-md-12">
          <h4>
            {username}
          </h4>
        </div>
        <div className="col-md-12">
          <h6>
            {charity}
          </h6>
        </div>
      </div>
    </div>
  );
};

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

    console.log('render', this.props);

    const game = this.props.games.reduce( ( acc, curr) => {
      return curr.gameHash === this.props.params.hash ? curr : acc;
    }, {});

    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <span className="navbar-brand text-center" style={{width: 100 + '%'}}>Goal</span>
          </div>
        </nav>

        <div className="row">
          <div className="wrapper">

          {Array.isArray(game.players) && game.players.map( playerId => {
            console.log('mapping players', playerId, this.props.players);
            let player = this.props.players[playerId] || {};
            return (
              <PlayerTrack
                key={playerId}
                username={player.username}
                avatar={player.avatar}
                />
            );
          })}
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
              <button className="btn social-btn"><img src="/images/Twitter.png" /></button>
              <button className="btn social-btn"><img src="/images/Facebook.png" /></button>
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

function mapStateToProps(state) {
  return {
    games: state.games,
    players: state.players,
    user: state.user
  };
}

const ConnectedActiveGame = connect(mapStateToProps, actionCreators)(ActiveGame);

export default ConnectedActiveGame;
