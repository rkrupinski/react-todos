import React from 'react';

import { create } from './actions';

export default class TodoForm extends React.Component {
  render() {
    return (
      <form className="form-inline" noValidate
          onSubmit={this.onSubmit.bind(this)}>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Todo"
              ref={input => this._field = input}/>
        </div>
        <span className="hidden-xs">&nbsp;&nbsp;</span>
        <button type="submit" className="btn btn-default">Add todo</button>
      </form>
    );
  }
  onSubmit(e) {
    e.preventDefault();

    let val = this._field.value;

    if (!val) {
      return;
    }

    create({
      body: val,
      completed: false,
    });

    this._field.value = '';
  }
}
