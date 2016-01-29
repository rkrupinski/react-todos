import React from 'react';
import { render } from 'react-dom';
import { createHashHistory } from 'history';
import Root from './root';

const history = createHashHistory();

render(<Root history={history} />, document.querySelector('#app'));
