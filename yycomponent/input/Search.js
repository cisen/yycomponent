import React from 'react';
import { Input } from 'antd';

class Search extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (<Input.Search {...this.props}/>);
  }
}

export default Search
