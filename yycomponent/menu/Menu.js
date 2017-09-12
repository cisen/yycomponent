import React from 'react';
import { Menu as _Menu } from 'antd';

class Menu extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (<_Menu {...this.props}/>);
  }
}

Menu.Divider = _Menu.Divider;
Menu.Item = _Menu.Item;
Menu.SubMenu = _Menu.SubMenu;
Menu.ItemGroup = _Menu.ItemGroup;
Menu.defaultProps = {
    prefixCls: 'ant-menu',
    className: '',
    theme: 'light',
};

export default Menu
