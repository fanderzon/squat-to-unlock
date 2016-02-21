import React, {Component} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const GameItem = (props) => {

  const username = props.players.reduce(
    (prev, current) => current.playerId === props.game.players[0] ? prev + current.username : prev,
    ''
  );
  const noPlayers = props.game.players && props.game.players.length;
  const icon = props.game.type === 'running' ? './images/runner.png' : './images/squat-icon.png';
  return (
    <tr>
      <td className="small-column"><img src={icon} className="game-type-icon" /></td>
      <td>
        <div className="tallColumn">
          {username}
          <h6>
            {noPlayers} / 4 players, 100 meters
          </h6>
        </div>
      </td>
      <td className="text-right"><i className="fa fa-chevron-right"></i></td>
    </tr>
  );
};

class GameList extends Component{
  render() {
    return (
      <div>

        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <ul className="nav navbar-nav navbar-left">
              <li><a href="#"><i className="fa fa-bars"></i></a></li>
            </ul>
            <p className="navbar-text">Games</p>
            <ul className="nav navbar-nav navbar-right pull-right">
              <li className="pull-right">
                <Link to="/new_game"><i className="fa fa-plus"></i></Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className="row">
          <div className="jumbotron bg-success">
            <div className="col-md-12 text-center">
              <button className="btn random-game-btn"><img src="./images/random_game.png" /></button>
            </div>
            <div className="list-header">
              RUNNING
            </div>
          </div>
        </div>

        <div className="row">
          <table className="table table-striped custom-table table-hover">
            <tbody>

              {Array.isArray(this.props.games) && this.props.games.map(function( game, i ) {
                  return <GameItem key={i} game={game} players={this.props.players}  />
              }.bind(this))}

            </tbody>
          </table>
        </div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    games: state.games,
    players: state.players
  };
}

const ConnectedGameList = connect(mapStateToProps)(GameList);

export default ConnectedGameList;
