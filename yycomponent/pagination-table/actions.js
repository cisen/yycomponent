/**
 * Created by cisen on 3/31/17.
 */
import {mapActions} from 'redux-async-actions-reducers';
import actionTypes from './action.types';
// import Request from 'common/Request';

let actions = {};
// 加载table的数据
actions.loadTableData = function (data) {
  return {
    type: actionTypes.LOAD_TABLE_DATA,
    data
  };
};
mapActions(actions);
export default actions;
