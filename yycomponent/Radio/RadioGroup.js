import React from 'react';
import { Radio } from 'antd';

class RadioGroup extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (<Radio.Group {...this.props}/>);
  }
}

export default RadioGroup
