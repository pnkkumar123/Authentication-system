import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom';
import { persistor, store } from './redux/Store.jsx';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
     <PersistGate persistor={persistor} loading={null}>

    <App />
     </PersistGate>
    </Provider>

    </BrowserRouter>
  </React.StrictMode>,
)
