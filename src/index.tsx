import { AppProvider as PolarisProvider } from '@shopify/polaris';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <PolarisProvider>
      <App />
    </PolarisProvider>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
