import React from 'react';
import { Router, Route, IndexRedirect } from 'react-router';

import App from './app';
import Todos from './todos';
import NotFound from './notFound';
import Constants from './constants';
import addProps from './addProps';

export default class Root extends React.Component {

  render() {
    const { history } = this.props;
    const { TODOS_ALL, TODOS_PENDING, TODOS_COMPLETED } = Constants;

    return (
      <Router history={history}>
        <Route path="/" component={App}>
          <Route path="all"
              component={addProps(Todos, { view: TODOS_ALL })} />
          <Route path="pending"
              component={addProps(Todos, { view: TODOS_PENDING })} />
          <Route path="completed"
              component={addProps(Todos, { view: TODOS_COMPLETED })} />
          <Route path="*" component={NotFound} />
          <IndexRedirect to="all" />
        </Route>
      </Router>
    );
  }

}
