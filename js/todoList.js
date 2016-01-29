import React from 'react';
import Todo from './todo';
import Constants from './constants';

export default function TodoList(props) {
  const todos = props.todos
      .filter(todo => {
        switch (props.view) {
          case Constants.TODOS_ALL:
            return todo;
          case Constants.TODOS_PENDING:
            return !todo.get('completed');
          case Constants.TODOS_COMPLETED:
            return todo.get('completed');
        }
      })
      .map(todo =>
          <Todo data={todo} key={todo.get('id')} />);

  return (
    <ul className="todos">
      {todos.size ? todos : <li>Hooray, no todos!</li>}
    </ul>
  );
}
