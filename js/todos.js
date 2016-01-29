import React from 'react';

import TodoForm from './todoForm';
import TodoList from './todoList';
import TodoToolbar from './todoToolbar';

export default function Todos(props) {
  const { todos, view } = props;

  return (
    <div>
      <TodoForm />
      <TodoList todos={todos} view={view} />
      <TodoToolbar todos={todos} />
    </div>
  );
}
