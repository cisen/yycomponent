import React from 'react';
import { Select as _Select } from 'antd';

const getPopupContainer=(target)=>{//弹框挂载点
  if(target&&target.closest&&target.closest('.body')){
    return target.closest('.body');
  }
  return document.body;
};

class Select extends React.Component{
  constructor(props){
    super(props);
  }
  static defaultProps={
    getPopupContainer:getPopupContainer,
    defaultActiveFirstOption: false,
    notFoundContent: '没有找到相关数据'
  }
  render(){
    return (<_Select {...this.props} />);
  }
}
Select.Option=_Select.Option;
Select.OptGroup = _Select.OptGroup;
Select.defaultProps = {
    prefixCls: 'ant-select',
    showSearch: false,
    transitionName: 'slide-up',
    choiceTransitionName: 'zoom',
};

export default Select
