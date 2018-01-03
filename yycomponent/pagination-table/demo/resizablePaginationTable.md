---
order: 1
title:
  zh-CN: 自定义列宽
  en-US: Resizable
---

## zh-CN

结合自定义列宽

## en-US

Resizable

````jsx
import { enhancedPaginationTable, Provider, enhancedResizableTable, Table } from 'yycomponent'
import { Icon } from 'antd';
import { Component } from 'react';

const resizableTable = enhancedResizableTable(Table.Origin);
const PaginationTable = enhancedPaginationTable(resizableTable);

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

class DemoApp extends Component {
  formatErrorOriginData = () => {
    const newTableData = {
      currentPage: 1,
      items: data,
      pageSize: 30,
      totalCount: 0
    };
    return newTableData;
  }
  handleResizeEnd = (width, columnKey) => {}
  render() {
    const { common_table_data, dispatch, location } = this.props;
    return (
      <div>
        <PaginationTable
          columns={columns}
          common_table_data={common_table_data}
          pagination={false}
          subscribeParm={[]}
          dispatch={dispatch}
          formatErrorOriginData={this.formatErrorOriginData}
          apiRoute="/v2/fresh/purchaseOrder/list"
          location={location}
          history={window.history}
          handleResizeEnd={this.handleResizeEnd}
        />
      </div>
      )
  }
}

ReactDOM.render(
  <Provider><DemoApp /></Provider>
, mountNode);

````
