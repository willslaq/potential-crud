import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './screens/Login';
import Developers from './screens/Developers';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/developers" component={Developers} />
      </Switch>
    </BrowserRouter>
  );
}
