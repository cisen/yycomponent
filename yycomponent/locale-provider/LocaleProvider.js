import React from 'react';
import { LocaleProvider as _LocaleProvider } from 'antd';

class LocaleProvider extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (<_LocaleProvider {...this.props}/>);
  }
}

export default LocaleProvider
