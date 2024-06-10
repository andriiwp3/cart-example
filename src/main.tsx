import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import store from './store/store'
import StoreProvider from '@/providers/store-provider'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  </React.StrictMode>,
)
