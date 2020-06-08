import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Countries from '../pages/Countries';
import World from '../pages/World';

const AppRoutes = () => (
  <>
    <Switch>
      <Route path="/countries" component={Countries} />
      <Route path="/" component={World} />
    </Switch>
  </>
);

export default AppRoutes;
