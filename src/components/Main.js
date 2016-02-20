import React, {Component} from 'react';
import { Link } from 'react-router';

class Main extends Component{
  render() {
    return (
      <div>
        <p>Squat to unlock</p>
        <Link to="/games">Start</Link>
      </div>
    );
  }
}

export default Main;
