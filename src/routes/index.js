import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Map from '../pages/main';

const Routes = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route exact path="/" component={Map} />
      </Switch>
    </Fragment>
  </BrowserRouter>
);

export default Routes;
