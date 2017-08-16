import React from 'react';
import { TimePicker as _TimePicker } from 'antd';
import moment from 'moment';
moment.locale('zh-cn');//中文国际化

const getPopupContainer=(target)=>{//弹框挂载点
  if(target&&target.closest&&target.closest('.body')){
    return target.closest('.body');
  }
  return document.body;
};

class TimePicker extends React.Component {
  constructor(props){
    super(props);
  }
  static defaultProps={
    getCalendarContainer:getPopupContainer
  }
  render(){
    return (<_TimePicker {...this.props}/>);
  }
}

export default TimePicker
