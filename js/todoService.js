import request from 'superagent';

import Dispatcher from './dispatcher';
import Constants from './constants';

const API_URL = 'http://127.0.0.1:3000/todos';
const TIMEOUT = 5000;

function dispatch(actionType, response, params) {
  const action = { actionType, response, params };

  Dispatcher.dispatch(action);
}

function createResponseHandler(type, params = {}) {
  return function (err, res) {
    switch (true) {
      case err && err.timeout:
      case !res.ok:
        // TODO
        console.log('failed', ...arguments);
        break;
      default:
        dispatch(type, res, params);
    }
  };
}

function update(id, data = {}) {
  request
      .patch(`${API_URL}/${id}`)
      .send(data)
      .timeout(TIMEOUT)
      .end(createResponseHandler(Constants.TODO_UPDATE, { id, data }));
}

export function fetch() {
  request
      .get(API_URL)
      .timeout(TIMEOUT)
      .end(createResponseHandler(Constants.TODOS_FETCH));
}

export function create(todo) {
  request
      .post(API_URL)
      .send(todo)
      .timeout(TIMEOUT)
      .end(createResponseHandler(Constants.TODO_CREATE));
}

export function remove(id) {
  request  
      .del(`${API_URL}/${id}`)
      .timeout(TIMEOUT)
      .end(createResponseHandler(Constants.TODO_REMOVE, { id }));
}

export function toggle(id, completed) {
  update(id, { completed });
}

export function edit(id, body) {
  update(id, { body });
}
