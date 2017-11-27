import React from 'react';
import { IndexLink } from 'react-router';

export default function MatchCard({ match }) {
  return (
    <div className="ui card" style={{width: '20rem'}}>
      <img className="card-img-top" src={market.imageSrc} alt="Card image cap" />
      <div className="card-block">
        <h4 className="card-title">{market.title}</h4>
        <p className="card-text">{market.description}</p>
      </div>
    </div>
  );
}

MarketCard.propTypes = {
  market: React.PropTypes.object.isRequired
}