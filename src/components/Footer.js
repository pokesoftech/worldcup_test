import React from 'react';
import '../assets/stylesheets/components/Footer.scss';
import sfg from '../assets/images/logo.png';
import { Link, IndexLink } from 'react-router';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <ul>
                    <li>
                        <a href="https://github.com/estiens/world_cup_json">
                            <i className="fa fa-github"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/MutualArising">
                            <i className="fa fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:eric@softwareforgood.com">
                            <i className="fa fa-envelope"></i>
                        </a>
                    </li>
                    <li>
                        <a href="http://www.softwareforgood.com" id="sfg-logo">
                            <img alt="Sfgwhite" src={sfg} width="40" />
                        </a>
                    </li>
                </ul>
                <p>
                    <a href="http://softwareforgood.com/soccer-good/">
                        <em>Background on this project</em>
                    </a>
                </p>
            </div>
        );
    }
}

export default Footer;
