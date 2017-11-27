import React from 'react';
import '../assets/stylesheets/components/NavigationBar.scss';
import ball from '../assets/images/ball.png';
import { Link, IndexLink } from 'react-router';

class NavigationBar extends React.Component {
  render() {
    return (
      <div className="header">
        <img alt="Ball" src={ball} />
      </div>
    );
  }
}

export default NavigationBar;
