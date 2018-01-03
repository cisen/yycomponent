import React from 'react';
import { Component, PropTypes } from 'react';
import {Provider} from 'react-redux';
import {bindAsyncActions} from 'redux-async-actions-reducers';
import {createStore} from 'redux-async-actions-reducers';
import {combineAsyncReducers} from 'redux-async-actions-reducers';
import {compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

let reducers = {
  common_table_data: {}
}

const rootReducer = combineAsyncReducers(reducers);

class App extends Component {
  render() {
    const { children } = this.props;
    console.log(children)
    return(
      <Provider store={configureStore({})} >
        {children}
      </Provider>
    )
  }
}

function configureStore(initialState) {
    return createStore(rootReducer, initialState, compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f // eslint-disable-line
    ));
}

export default App
