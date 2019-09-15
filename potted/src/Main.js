import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Instagram from './pages/Instagram';
import NotFound from './pages/NotFound';

const Main = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/follow' component={Instagram}></Route>
      <Route path="*" component={NotFound} />
    </Switch>
  );
}

export default Main;
