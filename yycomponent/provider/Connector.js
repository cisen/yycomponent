import React from 'react';
import {connect} from 'react-redux';
import { Component, PropTypes } from 'react';

class Connector extends Component {
  render() {
    const { children, location, dispatch, common_table_data } = this.props;
    const cloneRouteChild = React.cloneElement(children, {
      key: 8675655463,
      location: location,
      dispatch: dispatch,
      common_table_data: common_table_data
    })
    return (
      <div>{cloneRouteChild}</div>
    )
  }
}

//将common_table_data绑定到props
const mapStateToProps = (state, props) => {
  return {
    common_table_data: state.common_table_data
  }
};

//将dispatch的所有方法绑定到props上
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch: dispatch
  }
};

const ConnectedConnector = connect(mapStateToProps, mapDispatchToProps)(Connector)

export default ConnectedConnector
