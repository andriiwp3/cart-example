import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import LayoutProvider from '@/providers/layout-provider';
import StoreProvider from '@/providers/store-provider';

import App from './App';
import store from './store/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <LayoutProvider>
        <App />
      </LayoutProvider>
    </StoreProvider>
  </React.StrictMode>,
);
