import React from 'react';
import { Timeline } from 'antd';

class Item extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (<Timeline.Item {...this.props}/>);
  }
}

export default Item
