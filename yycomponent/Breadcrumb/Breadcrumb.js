import React from 'react';
import { Breadcrumb as _Breadcrumb } from 'antd';

class Breadcrumb extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (<_Breadcrumb {...this.props}/>);
  }
}

export default Breadcrumb
