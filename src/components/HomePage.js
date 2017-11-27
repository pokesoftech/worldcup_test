import React from 'react';
import '../assets/stylesheets/components/HomePage.scss';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-container">
        <div className="row">
          <div className="col-md-12">
            <h1>Women's World Cup</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-10 offset-lg-1 columns intro">
            <p>
              This is an API for the World Cup (and now, Women's World Cup!) that scrapes current match results and outputs match data as JSON. No guarantees are made as to its accuracy, but we will do our best to keep it up to date. For example responses, including events such as goals, substitutions, and cards, see the GitHub page.
            </p>
            <a href="https://github.com/estiens/world_cup_json" className="code-on-github">
              <button className="medium" id="gh-button">
                CODE ON GITHUB
              </button>
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h3>ENDPOINTS</h3>
          </div>
          <div className="col-md-6">
            <p>
              All match data, updated every minute
              <br />
              <a href="http://worldcup.sfg.io/matches">
                http://worldcup.sfg.io/matches
              </a>
            </p>
            <p>
              Today's matches
              <br />
              <a href="http://worldcup.sfg.io/matches/today">
                http://worldcup.sfg.io/matches/today
              </a>
            </p>
            <p>
              Returns the current match, if a match is happening, otherwise nothing
              <br />
              <a href="http://worldcup.sfg.io/matches/current">
                http://worldcup.sfg.io/matches/current
              </a>
            </p>
            <p>
              Matches for any country, by entering their FIFA Code.
              <br />
              <a href="http://worldcup.sfg.io/matches/country?fifa_code=USA">
                http://worldcup.sfg.io/matches/country?fifa_code=USA
              </a>
            </p>
          </div>
          <div className="col-md-6">
            <p>
              Results for teams (wins, losses, draws, goals_for, goals_against)
              <br />
              <a href="http://worldcup.sfg.io/teams/results">
                http://worldcup.sfg.io/teams/results
              </a>
            </p>
            <p>
              Results for teams by group, ordered by curren group position
              <br />
              <a href="http://worldcup.sfg.io/teams/group_results">
                http://worldcup.sfg.io/teams/group_results
              </a>
            </p>
            <p>
              List of all teams in world cup, along with fifa abbreviation
              <br />
              <a href="http://worldcup.sfg.io/teams/">
                http://worldcup.sfg.io/teams/
              </a>
            </p>
          </div>
          <div className="col-md-12">
            <h3>OPTIONAL PARAMETERS</h3>
            <p>
              You can append <code>?by_date=desc</code> to any query to sort the matches by future to past. <code>?by_date=asc</code> does past to future.
              <a href="http://worldcup.sfg.io/matches/today/?by_date=DESC">
                http://worldcup.sfg.io/matches/today/?by_date=DESC
              </a>
            </p>
            <p>
              You can append <code>?by=</code> with optional params <code>total_goals</code>, <code>closest_score</code>, <code>away_team_goals</code>, <code>home_team_goals</code>
              <a href="http://worldcup.sfg.io/matches/?by=total_goals">
                http://worldcup.sfg.io/matches/?by=total_goals
              </a>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h3>TODAY'S MATCHES</h3>
          </div>
          <div className="col-md-6">
            <h3>TOMORROW'S MATCHES</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
