import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import rootSaga from '@redux/saga';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '@redux/rootReducers';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { ChakraProvider } from '@chakra-ui/react';
import theme from "./theme";

const sagaMiddleware = createSagaMiddleware();

function configureStore(initialState) {
  const middleware = [sagaMiddleware];

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middleware)));

  sagaMiddleware.run(rootSaga);

  return store;
}

const store = configureStore();



ReactDOM.render(
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </ChakraProvider>
  </Provider>,
  document.getElementById("root")
);
