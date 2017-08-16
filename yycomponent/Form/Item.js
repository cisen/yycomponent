import React from 'react';
import { Form } from 'antd';

class Item extends React.Component{
  constructor(props){
    super(props);
  }
  static defaultProps={
    trigger:[document.body.ontouchstart===undefined?'hover':'click']
  }
  render() {
    return (<Form.Item {...this.props}/>);
  }
}

export default Item
