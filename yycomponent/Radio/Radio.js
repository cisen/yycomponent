import React from 'react';
import { Radio as _Radio } from 'antd';

class Radio extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (<_Radio {...this.props}/>);
  }
}

export default Radio
