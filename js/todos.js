import React from 'react';

import TodoForm from './todoForm';
import Todo from './todo';
import ClearBtn from './clearBtn';

export default class Todos extends React.Component {
  render() {
    const todos = this.props.todos.map(todo => 
        <Todo data={todo} key={todo.get('id')} />);

    return (
      <div>
        <h1>Todos</h1>
        <TodoForm />
        <ul className="todos">
          {todos.size ? todos : <li>Hooray, no todos!</li>}
        </ul>
        <ClearBtn todos={this.props.todos} />
      </div>
    );
  }
};
