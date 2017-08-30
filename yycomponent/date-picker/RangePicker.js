import React from 'react';
import { DatePicker as _DatePicker, } from 'antd';
import moment from 'moment';
moment.locale('zh-cn');//中文国际化

const getPopupContainer=(target)=>{//弹框挂载点
  if(target&&target.closest&&target.closest('.body')){
    return target.closest('.body');
  }
  return document.body;
};

class RangePicker extends React.Component{
  constructor(props){
    super(props);
  }
  static defaultProps={
    getCalendarContainer:getPopupContainer,
    defaultPickerValue:[moment('0:0:0', 'HH:mm:ss'),moment('23:59:59', 'HH:mm:ss')]
  }
  render(){
    return (<_DatePicker.RangePicker {...this.props}/>);
  }
}

export default RangePicker
