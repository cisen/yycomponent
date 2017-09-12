import React from 'react';
import { Radio } from 'antd';

class RadioButton extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (<Radio.Button {...this.props}/>);
  }
}

export default RadioButton
