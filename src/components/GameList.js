import React, {Component} from 'react';
import { Link } from 'react-router';

class GameList extends Component{
  render() {
    return (
      <div>
        <p>It's a game list</p>
        <Link to="/">Go back</Link>
      </div>
    );
  }
}

export default GameList;
