import React from 'react';
import { Affix as _Affix } from 'antd';

class Affix extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (<_Affix {...this.props}/>);
  }
}

export default Affix
