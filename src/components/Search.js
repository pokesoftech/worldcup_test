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
            loading: true,
            country_code: ''
        };

        this.onSearch = this.onSearch.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSearch(e) {
        if (e.key == 'Enter') {
            this.props.fetchMatches(this.state.country_code).then(res => {
                this.setState({ loading: false });
            }, err => {
                this.setState({ loading: false });
            });
        }
    }

    componentDidMount() {

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
            <div className="match-list">
                <div className="ui search">
                    <div className="ui icon input">
                        <input
                            name="country_code"
                            className="prompt"
                            type="text"
                            placeholder="Place country code"
                            value={this.state.country_code}
                            onChange={this.onChange}
                            onKeyPress={this.onSearch} />
                        <i className="search icon"></i>
                    </div>
                    {this.state.loading ? loading : matchList}
                </div>
            </div>
        );
    }
}

Search.propTypes = {
    matches: React.PropTypes.array.isRequired,
    fetchMatches: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        matches: state.matches
    }
}

export default connect(mapStateToProps, { fetchMatches })(Search);


