import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { getProductWatcher } from "./saga";
import { composeWithDevTools } from "redux-devtools-extension";
import productsReducer from "./reducers/addToCart";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";
let sagaMiddleware = createSagaMiddleware();
const store = createStore(
  productsReducer,
  applyMiddleware(sagaMiddleware, createLogger())
);
sagaMiddleware.run(getProductWatcher);

// var store = createStore(addToCartReducer);

ReactDOM.render(
     <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
