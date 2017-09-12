import React from 'react';
import { Spin } from 'antd';
import AntdTable from './AntdTable'

class Table extends React.Component{
  constructor(props){
    super(props);
  }
  render() {
    const spinStyle={
      position:'absolute',
      left:'50%',
      top:'50%',
      margin:'-10px',
      zIndex:'10',
      display:this.props.loading?'block':'none'
    };
    let columns = this.props.columns.filter((item)=>{//过滤隐藏列
      return item.hidden!==true;
    });
    return (
      <div style={{position:'relative'}}>
        <Spin style={spinStyle}/>
        <div style={{opacity:this.props.loading?'0.7':'1'}}>
          <AntdTable {...this.props} columns={columns}/>
        </div>
      </div>
    );
  }
}

export default Table
