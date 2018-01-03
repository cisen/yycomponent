import React from 'react';
import { Component, PropTypes } from 'react';
import {Provider} from 'react-redux';
import {bindAsyncActions} from 'redux-async-actions-reducers';
import {createStore} from 'redux-async-actions-reducers';
import {combineAsyncReducers} from 'redux-async-actions-reducers';
import {compose, applyMiddleware} from 'redux';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import ConnectedConnector from './Connector';
import thunk from 'redux-thunk';

import './actions';      //公用action+redux
import './reducers';
import rootReducer from './reducers';

const CoreLayout = (props) => {
  return (
    <div>{props.children}</div>
  )
}

class App extends Component {
  render() {
    const { children } = this.props;
    // 必须通过这样创建一个element，直接传child的话react-router会报错
    const demoChild = (props) => {
      const cloneDemoChild = React.cloneElement(children, {
        key: 23456453423,
        location: props.location,
        dispatch: props.dispatch,
        common_table_data: props.common_table_data
      })
      return (
        <div>{cloneDemoChild}</div>
      )
    }
    return(
      <Provider store={configureStore()} >
        <Router history={browserHistory}>
          <Route path="/" component={ConnectedConnector}>
            <Route path='yycomponent'>
              <Route path='pagination-table-cn' component={demoChild}></Route>
            </Route>
          </Route>
        </Router>
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
