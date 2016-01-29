import React from 'react';

import storeWrapper from './storeWrapper';
import TodoStore from './todoStore';
import { init } from './actions';

import '../sass/app.scss';

class App extends React.Component {

  componentWillMount() {
    init();
  }

  render() {

    return (
      <div className="row">
        <div className="col-sm-12">
          <h1>Todos</h1>
          {React.cloneElement(this.props.children, {
            todos: this.props.todos
          })}
        </div>
      </div>
    );
  }

}

function getStateFromStores() {
  return {
    todos: TodoStore.getAll()
  };
}

export default storeWrapper(App, [TodoStore], getStateFromStores);
