/**
 * Created by cisen on 3/31/17.
 */
import keyMirror from 'fbjs/lib/keyMirror';

//合并当前的acitonTypes和全局的actionTypes
export default Object.assign({}, keyMirror({
  LOAD_TABLE_DATA: null,
  SWITCH_PAGINATION: null
}));
