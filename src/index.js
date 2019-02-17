import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { AppContainer } from 'react-hot-loader';
import reducer from './store/reducers';
import '../mock/index'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// redux 注入操作
const middleware = [thunk];
const store = createStore(reducer, applyMiddleware(...middleware));
// console.log(store.getState());

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <App store={store} />
    </Provider>
  </AppContainer>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
