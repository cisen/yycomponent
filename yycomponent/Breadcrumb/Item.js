import React from 'react';
import { Breadcrumb } from 'antd';

class Item extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (<Breadcrumb.Item {...this.props}/>);
  }
}

export default Item
