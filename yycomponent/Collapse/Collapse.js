import React from 'react';
import { Collapse as _Collapse } from 'antd';

class Collapse extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (<_Collapse {...this.props}/>);
  }
}

export default Collapse
