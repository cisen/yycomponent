import React from 'react';
import { TreeSelect as _TreeSelect } from 'antd';

const notFoundContent='没有找到相关数据';

const getPopupContainer=(target)=>{//弹框挂载点
  if(target&&target.closest&&target.closest('.body')){
    return target.closest('.body');
  }
  return document.body;
};

class TreeSelect extends React.Component{
  constructor(props){
    super(props);
  }
  static defaultProps={
    getPopupContainer:getPopupContainer,
    notFoundContent:notFoundContent
  }
  render(){
    return (<_TreeSelect {...this.props}/>);
  }
}

export default TreeSelect
