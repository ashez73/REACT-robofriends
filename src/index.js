import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { requestRobots, searchRobots } from './reducers'
import App from './containers/App';
import './index.css';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import 'tachyons';


const logger = createLogger()

const rootReducers = combineReducers({requestRobots, searchRobots})

const store = createStore(rootReducers, applyMiddleware(thunkMiddleware, logger))

ReactDOM.render(
<Provider store={store}>
  <App/>
</Provider>,
document.getElementById('root'));

