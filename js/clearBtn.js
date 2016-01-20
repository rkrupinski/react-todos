import React from 'react';
import classNames from 'classNames';

import { remove } from './actions';

export default class ClearBtn extends React.Component {
  
  clearCompleted() {
    this.props.todos
        .filter(todo => todo.get('completed'))
        .forEach(todo => remove(todo.get('id'))); // Yep, this is lame.
  }

  render() {
    const btnClass = classNames('btn btn-default btn-xs', {
      hidden: !this.props.todos.filter(todo =>
          todo.get('completed')).size
    });

    return (
      <button className={btnClass}
          onClick={this.clearCompleted.bind(this)}>
        <span className="glyphicon glyphicon-ok"></span>
        &nbsp;
        Clear completed
      </button>
    );
  }

}
