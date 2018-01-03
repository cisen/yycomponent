import {mapReducers} from 'redux-async-actions-reducers';
import actionTypes from './action.types';

const initState = {
  currentPage: 1,
  data: [],
  pageSize: 30,
  totalCount: 0
};

let red = {};

red.common_table_data = (state = initState, action) => {
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

// mapReducers(red);
