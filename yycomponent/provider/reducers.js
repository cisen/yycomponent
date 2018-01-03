/**
 * Created by spider on 6/26/16.
 */
import actionTypes from './action.types';
import {combineAsyncReducers} from 'redux-async-actions-reducers';

const reducers = {};

const initalState = {};

reducers.common_table_data = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_TABLE_DATA: {
      return {
        ...state,
        currentPage: action.data.currentPage,
        data: action.data.items,
        pageSize: action.data.pageSize,
        totalCount: action.data.totalCount
      };
    }
    default:
      return state;
  }
};

const rootReducer = combineAsyncReducers(reducers);

export default rootReducer;
