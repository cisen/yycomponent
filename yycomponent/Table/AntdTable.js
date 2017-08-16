import React from 'react';
import { Table as _Table } from 'antd';

class AntdTable extends React.Component{
  constructor(props){
    super(props);
  }
  shouldComponentUpdate(nextProps) {
    if(this.props.stopShouldUpdate===true){//阻止默认（以下优化判断）行为
      return true;
    }
    if(Object.keys(this.props).indexOf('loading')===-1){//没有loading则不需要优化判断
      return true;
    }
    if(this.props.loading!==nextProps.loading&&nextProps.loading===false){//loading 不相等且为false时渲染
      return true;
    }
    if(nextProps.loading===true&&!this.props.scroll){//loading为true非this.props.scroll阻止渲染
      return false;
    }
    if(JSON.stringify(this.props.scroll)!==JSON.stringify(nextProps.scroll)){//scroll不相等渲染
      return true;
    }
    if(this.props.rowSelection&&JSON.stringify(this.props.rowSelection.selectedRowKeys)!==JSON.stringify(nextProps.rowSelection.selectedRowKeys)){//selectedRowKeys不相等渲染
      return true;
    }
    return false;
  }
  render() {//loading={false}覆盖loading
    return (
      <_Table {...this.props} loading={false}/>
    );
  }
}

export default AntdTable
