import { EventEmitter } from 'events';
import { List, Map } from 'immutable';

import Dispatcher from './dispatcher';
import Constants from './constants';

const CHANGE_EVENT = 'change';

let _todos = List();

const TodoStore = Object.assign({}, EventEmitter.prototype, {

  getAll() {
    return _todos;
  },

  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener(cb) {
    this.on(CHANGE_EVENT, cb);
  },

  removeChangeListener(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  },

});

TodoStore.dispatchToken = Dispatcher.register(function (action) {
  switch (action.actionType) {
    case Constants.TODOS_FETCH:
      _todos = _todos.push(...action.response.body.map(item =>
          Map(item)));

      TodoStore.emitChange();
      break;
    case Constants.TODO_CREATE:
      _todos = _todos.push(Map(action.response.body));

      TodoStore.emitChange();
      break;
    case Constants.TODO_REMOVE:
      _todos = _todos.filterNot(todo =>
          todo.get('id') === action.params.id);

      TodoStore.emitChange();
      break;
    case Constants.TODO_UPDATE:
      {
        const index = _todos.toJS().findIndex(todo =>
            todo.id === action.params.id);

        _todos = _todos.update(index, todo =>
            todo.merge(Map(action.params.data)));
      }
      
      TodoStore.emitChange();
      break;
  }
});

export default TodoStore;
