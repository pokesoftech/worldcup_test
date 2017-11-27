import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import Search from './components/Search';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/search" component={Search} />
    {/* <Route path="/market-detail/:slug" component={MarketDetailPage} /> */}
  </Route>
)