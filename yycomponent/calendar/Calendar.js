import React from 'react';
import { Calendar as _Calendar } from 'antd';

class Calendar extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (<_Calendar {...this.props}/>);
  }
}

export default Calendar
