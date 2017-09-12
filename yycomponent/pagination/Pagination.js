import React from 'react';
import { Pagination as _Pagination } from 'antd';

class Pagination extends React.Component{
  constructor(props){
    super(props);
  }
  static defaultProps = {
    prefixCls: 'ant-pagination',
    selectPrefixCls: 'ant-select',
  };
  render(){
    return (<_Pagination {...this.props}/>);
  }
}

export default Pagination
