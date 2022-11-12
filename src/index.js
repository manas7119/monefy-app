import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import { Provider } from './context/context';
import App from './App';
import './index.css';

ReactDOM.render(
  <SpeechProvider appId="e073de73-e4d3-4d1e-9973-34524f90d692" language="en-US">
    <Provider>
      <App />
    </Provider>,
  </SpeechProvider>,
  document.getElementById('root'),
);
