import React from 'react';
import { AutoComplete as _AutoComplete } from 'antd';

class AutoComplete extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (<_AutoComplete {...this.props}/>);
  }
}

export default AutoComplete
