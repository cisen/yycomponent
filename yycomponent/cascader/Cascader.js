import React from 'react';
import { Cascader as _Cascader } from 'antd';

const getPopupContainer=(target)=>{//弹框挂载点
  if(target&&target.closest&&target.closest('.body')){
    return target.closest('.body');
  }
  return document.body;
};

class Cascader extends React.Component{
  constructor(props){
    super(props);
  }
  static defaultProps={
    getPopupContainer:getPopupContainer
  }
  render(){
    return (<_Cascader {...this.props}/>);
  }
}

export default Cascader
