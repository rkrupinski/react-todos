import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';

import AppComponent from './appComponent';
import Todos from './todos';
import NotFound from './notFound';

import '../sass/app.scss';

render(
  (
    <Router>
      <Route path="/" component={AppComponent}>
        <IndexRoute component={Todos} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  ),
  document.querySelector('#app')
);
