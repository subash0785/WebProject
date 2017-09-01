import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import App from './components/App';
import ReduxPromise from "redux-promise";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const app = document.getElementById('app');

ReactDOM.render(<Provider store={createStoreWithMiddleware(reducer)}><App/></Provider>, app)