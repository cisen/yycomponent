import React from 'react';
import { Tooltip as _Tooltip } from 'antd';

class Tooltip extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (<_Tooltip {...this.props}/>);
  }
}

export default Tooltip
