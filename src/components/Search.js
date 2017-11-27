import React from 'react';
import MatchList from './MatchList';
import { connect } from 'react-redux';
import { fetchMatches } from '../actions/matchesActions';
import classnames from 'classnames';

import '../assets/stylesheets/components/Search.scss';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }

    componentDidMount() {
        this.props.fetchMatches().then(res => {
            this.setState({ loading: false });
        }, err => {

        });
    }

    render() {
        const loading = (
            <div style={{ height: '544px' }}>
                <div className="ui active centered loader"></div>
            </div>
        );

        const matchList = (
            <div>
                <h1>Matches List</h1>
                <MatchList matches={this.props.matches} />
            </div>
        );

        return (
            <div>
                {this.state.loading ? loading : matchList}
            </div>
        );
    }
}

ExplorePage.propTypes = {
    matches: React.PropTypes.array.isRequired,
    fetchMatches: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        matches: state.matches
    }
}

export default connect(mapStateToProps, { fetchMatches })(Search);
