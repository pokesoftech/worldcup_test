import React from 'react';
import MatchCard from './MatchCard';

export default function MatchList({ matches }) {
  const emptyMessage = (
    <p>There are no matches yet in your collection</p>
  );

  const matchList = (
    <div className="ui four cards">
      {matches.map(match => <MatchCard match={match} key={match.match_number} />) }
    </div>
  );

  return (
    <div>
      { matches.length === 0 ? emptyMessage : matchList }
    </div>
  );
}

MatchList.propTypes = {
  matches: React.PropTypes.array.isRequired
}
