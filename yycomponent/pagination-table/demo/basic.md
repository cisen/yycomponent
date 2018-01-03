---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

默认选中第一项。

## en-US

Default activate first tab.

````jsx
import { enhancedPaginationTable, Provider } from 'yycomponent'
import { Table, Icon } from 'antd';
import {connect} from 'react-redux';
import { Component } from 'react';

const PaginationTable = enhancedPaginationTable(Table);

const columns = [{
  title: <a className="testhaha" href="#">text</a>,
  dataIndex: 'name',
  width: 80,
  isResizable: true,
  key: 'name',
  render: text => <a href="#">{text}</a>,
}, {
  title: 'Age',
  width: '80px',
  isResizable: true,
  dataIndex: 'age',
  key: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
  isResizable: true,
  width: '120px',
  key: 'address',
}, {
  title: 'Action',
  width: '60px',
  key: 'action',
  render: (text, record) => (
    <span>
      <a href="#">Action 一 {record.name}</a>
      <span className="ant-divider" />
      <a href="#">Delete</a>
      <span className="ant-divider" />
      <a href="#" className="ant-dropdown-link">
        More actions <Icon type="down" />
      </a>
    </span>
  ),
},{
  title: 'Address2',
  dataIndex: 'address2',
  fixed: 'right',
  width: '180px',
  key: 'address2',
}, {
  title: ' ',
  dataIndex: 'null',
  key: 'null',
}];

const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
  'address2': 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
  'address2': 'New York No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  'address2': 'New York No. 1 Lake Park',
}];

const scroll = {
  x: true,
  y: true
};
/*
columns={show}
              handleResizeEnd={this.handleResizeEnd}
*/

//将state.counter绑定到props的counter
const mapStateToProps = (state, props) => {
    return {
        common_table_data: state.common_table_data
    }
};

//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: dispatch
    }
};

class DemoApp extends Component {
  render() {
    const { common_table_data, dispatch } = this.props;
    console.log('DemoApp', this)
    return (
      <div>
        <PaginationTable
          columns={columns}
          common_table_data={common_table_data}
          pagination={false}
          subscribeParm={[]}
          dispatch={dispatch}
          apiRoute="/v2/fresh/purchaseOrder/list"
        />
      </div>
      )
  }
}

const ConnectedDemoApp = connect(mapStateToProps, mapDispatchToProps)(DemoApp)

ReactDOM.render(
  <Provider><ConnectedDemoApp /></Provider>
, mountNode);

````
