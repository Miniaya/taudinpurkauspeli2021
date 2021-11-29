/* eslint-disable linebreak-style */
/* istanbul ignore file */
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';
import './i18n/config';

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

serviceWorker.unregister();
