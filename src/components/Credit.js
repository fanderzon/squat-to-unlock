import React, {Component} from 'react';
import { Link } from 'react-router';

class Credit extends Component{
  render() {
    return (
      <div>

        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <ul className="nav navbar-nav navbar-left">
              <li><Link to="/games"><i className="fa fa-chevron-left"></i></Link></li>
            </ul>
            <p className="navbar-text">Information</p>
          </div>
        </nav>

        <div className="row">

          <div className="col-md-12">

            <div className="col-md-12 m-t-3">
              <label>Project made my</label>

            </div>

            <ul className="col-md-12 list-unstyled">
              <li>
                <a href="https://twitter.com/fredrikanderzon">Fredrik Andersson</a>
              </li>
              <li>
                <a href="https://twitter.com/andersplanting">Anders Planting</a>
              </li>
            </ul>

            <div className="col-md-12 m-t-3">
              <label>Credits</label>
            </div>

            <ul className="col-md-12 list-unstyled">
              <li>
                Dice icon made by <a href="http://www.freepik.com/" target="_blank">Freepik</a> from <a href="http://www.flaticon.com">flaticon</a>.
              </li>
              <li>
                Runner icon made by <a href="http://www.freepik.com/" target="_blank">Freepik</a> from <a href="http://www.flaticon.com">flaticon</a>.
              </li>
              <li>
                <a href="http://www.freepik.com/free-photos-vectors/people">People vector designed by Freepik</a>
              </li>

            </ul>

            <div className="col-md-12 m-t-3">
              <label>Open source tools</label>
            </div>

            <ul className="col-md-12 list-unstyled">
              <li>
                <a href="https://facebook.github.io/react/index.html">React</a>
              </li>

              <li>
                <a href="https://getbootstrap.com/">Bootstrap</a>
              </li>
              <li>
                <a href="https://getbootstrap.com/">react-bootstrap</a>
              </li>
            </ul>

            <div className="col-md-12 m-t-3">
              <label>Fonts</label>
            </div>

            <ul className="col-md-12 list-unstyled">
              <li>
                <a href="https://fortawesome.github.io/Font-Awesome/">Font-Awesome</a>
              </li>

              <li>
                <a href="https://www.google.com/fonts/specimen/Roboto">Roboto</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Credit;
