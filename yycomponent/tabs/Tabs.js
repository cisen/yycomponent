import React from 'react';
import { Tabs as _Tabs } from 'antd';

class Tabs extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (<_Tabs {...this.props}/>);
  }
}
Tabs.TabPane = _Tabs.TabPane;

export default Tabs
