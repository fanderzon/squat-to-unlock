import React, {Component} from 'react';
import { Link } from 'react-router';

class DemoJoin extends Component{
  render() {
    return (
      <div>
        <p>Join a game</p>
        <Link to="/">Go back</Link>
        <button onClick={() => this.props.startGame()}>Create game</button>
      </div>
    );
  }
}

export default DemoJoin;
