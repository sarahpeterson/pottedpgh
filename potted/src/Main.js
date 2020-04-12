import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Instagram from './pages/Instagram';
import NotFound from './pages/NotFound';
import Thanks from './pages/Thanks';

const Main = () => {
  return (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/many-thanks">
      <Thanks />
    </Route>
    <Route path="/follow">
      <Instagram />
    </Route>
  </Switch>
  );
}

export default Main;
