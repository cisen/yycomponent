import React from 'react';
import { Rate as _Rate } from 'antd';

class Rate extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (<_Rate {...this.props}/>);
  }
}

export default Rate
