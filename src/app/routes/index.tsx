import * as React from 'react';
import { IndexRoute, Route } from 'react-router';
import { App, Home, Search, Counter, Stars } from '../containers';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="search" component={Search} />
    <Route path="counter" component={Counter} />
    <Route path="stars" component={Stars} />
  </Route>
);
