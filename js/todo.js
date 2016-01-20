import React from 'react';
import classNames from 'classNames';

import { toggle, remove, edit } from './actions';

const ENTER_KEY = 13;

export default class Todo extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      editing: false
    };
  }

  edit() {
    const { data: todo } = this.props;

    this.setState({
      editing: true
    }, () => {
      this._field.value = todo.get('body');
      this._field.focus();
      this._field.select();
    });
  }

  doneEditing() {
    const { data: todo } = this.props;
    const body = this._field.value.trim();

    if (body && body !== todo.get('body')) {
      edit(todo.get('id'), body);
    }

    this.setState({
      editing: false
    }, () => {
      this._field.value = '';
    });
  }

  handleKeyPress(e) {
    const { charCode: key } = e;

    if (key === ENTER_KEY) {
      this.doneEditing();
    }
  }

  render() {
    const { data: todo } = this.props;
    const bodyClass = classNames('todo__body', {
      hidden: this.state.editing
    });
    const fieldClass = classNames('todo__edit', {
      hidden: !this.state.editing
    });

    return (
      <li className="todo">
        <input type="checkbox" checked={todo.get('completed')} 
            onChange={toggle.bind(null, todo.get('id'), !todo.get('completed'))} />
        <span className={bodyClass}
            onClick={this.edit.bind(this)}>{todo.get('body')}</span>
        <input type="text"
            className={fieldClass}
            onKeyPress={this.handleKeyPress.bind(this)}
            onBlur={this.doneEditing.bind(this)}
            ref={input => this._field = input} />
        <button className="btn btn-default btn-xs"
            onClick={remove.bind(null, todo.get('id'))}>
          <span className="glyphicon glyphicon-remove"></span>
        </button>
      </li>
    );
  }
}
