import { Dispatcher } from 'flux';

Object.assign(Dispatcher.prototype, {

  handleApiAction(action) {
    this.dispatch({ source: 'API_ACTION', action });
  },

});

export default new Dispatcher();
