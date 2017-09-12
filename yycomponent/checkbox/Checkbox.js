import React from 'react';
import { Checkbox as _Checkbox } from 'antd';

class Checkbox extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (<_Checkbox {...this.props}/>);
  }
}

export default Checkbox
