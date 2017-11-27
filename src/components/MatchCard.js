import React from 'react';
import { IndexLink } from 'react-router';
import ball from '../assets/images/ball.png';
import '../assets/stylesheets/components/MatchCard.scss';

export default function MatchCard({ match }) {
  return (
    <div className="ui items segment">
      <div className="item">
        <div className="image">
          <img src={ball} alt="Match Logo" />
        </div>
        <div className="content">
          <a className="header">Location: {match.location}</a>
          <div className="meta">
            <span>{match.datetime}</span>
          </div>
          <div className="description">
            <p>Home: {match.home_team.country} / Goals: {match.home_team.goals}</p>
            <p>Away: {match.away_team.country} / Goals: {match.away_team.goals}</p>
            <p>Winner: {match.winner}</p>
          </div>
          <div className="extra">
            Status: {match.status}
          </div>
        </div>
      </div>
    </div>
  );
}

MatchCard.propTypes = {
  match: React.PropTypes.object.isRequired
}