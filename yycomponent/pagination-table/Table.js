import React from 'react';
import { Component, PropTypes } from 'react';
// import Child from './Child';
// import Request from 'common/Request';
import { Request } from 'yycomponent';
import actions from './actions';
import './reducer';

function enhancedPaginationTable(AntdTable) {
  return class PaginationTable extends Component {
    constructor(props) {
      super(props);
      this.scroll = {};
      this.defaultQuery = props.defaultQuery;
      this.state = {
        defaultRelectedRowKeys: []
      };
      this.updateHash = this.updateHash.bind(this);
      this.queryData = this.queryData.bind(this);
      this.getRouteSubscribeParm = this.getRouteSubscribeParm.bind(this);
      this.onPageChange = this.onPageChange.bind(this);
      this.onPageSizeChange = this.onPageSizeChange.bind(this);
      this.handleResize = this.handleResize.bind(this);
      this.onSelectAll = this.onSelectAll.bind(this);
    }

    static propTypes = {
      history: PropTypes.object.isRequired,
      dispatch: PropTypes.func.isRequired,
      pageSize: PropTypes.number,
      currentPage: PropTypes.number,
      totalCount: PropTypes.number,
      // 后端接口
      apiRoute: PropTypes.string.isRequired,
      // 需要从路由上订阅的变量

      subscribeParm: PropTypes.array,
      // 固定的通用table数据源
      common_table_data: PropTypes.object.isRequired,
      // 被选中的列的key
      rowSelection: PropTypes.object,
      rowClassName: PropTypes.func,
      onSelectAll: PropTypes.func,
      onRowClick: PropTypes.func,
      wrapperClassName: PropTypes.string,
      className: PropTypes.string,
      pagination: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.bool
      ]),
      formatOriginData: PropTypes.func,
      expandedRowKeys: PropTypes.array
    }

    static defaultProps = {
      prefixCls: 'pagination-table',
      expandedRowKeys: [],
      forceCalScroll: false
    };
    componentWillReceiveProps(nextProps) {
      const { location, subscribeParm } = this.props;
      const props = this.props;
      // 如果订阅数据改变则需要重新获取数据
      let shouldReGetData = false;
      // query改变重设currentPage为第一页
      let currentPageObj = {
        currentPage: nextProps.location.query.currentPage || 1,
        pageSize: nextProps.location.query.pageSize || 30
      };
      subscribeParm.map(item => {
        if (props[item] !== nextProps[item]) {
          shouldReGetData = true;
          currentPageObj.currentPage = 1;
        }
      });
      // 如果分页数据有变
      if (location.key !== nextProps.location.key) {
        if (nextProps.pagination) {
          if (location.query.currentPage !== nextProps.location.query.currentPage) {
            shouldReGetData = true;
          }
          if (location.query.pageSize !== nextProps.location.query.pageSize) {
            shouldReGetData = true;
            currentPageObj.currentPage = 1;
          }
        }
      }
      if (shouldReGetData) {
        const newParam = Object.assign({}, this.getRouteSubscribeParm(nextProps), currentPageObj);
        this.queryData(newParam);
      }
      if (nextProps.forceCalScroll) {
        this.initScroll();
      }
    }
    componentDidMount() {
      const { location, pagination } = this.props;
      let currentPageObj = {};
      if (pagination) {
        currentPageObj = {
          currentPage: location.query.currentPage || 1,
          pageSize: location.query.pageSize || 30
        };
      }
      const newParam = Object.assign({}, currentPageObj, this.getRouteSubscribeParm(this.props));
      this.queryData(newParam);
      // 要先拿到部门才能拿table的数据
      window.addEventListener('resize', this.handleResize);
      this.initScroll();
    }
    componentWillUnmount() {
      const { dispatch } = this.props;
      dispatch(actions.loadTableData({
        currentPage: 1,
        items: [],
        pageSize: 30,
        totalCount: 0
      }));
      window.removeEventListener("resize", this.handleResize);
    }
    // 更新路由
    updateHash(newHash) {
      const { history, location } = this.props;
      const newQuery = Object.assign({}, location.query, newHash);
      //更新地址栏参数
      history.push({
        pathname: location.pathname,
        query: {...newQuery}
      });
    }
    // 获取数据
    queryData(queryParam) {
      const { apiRoute, dispatch, formatOriginData } = this.props;
      const hash = window.location.hash;
      // const me = this;
      Request(apiRoute).data(queryParam).post().then((json) => {
        // settime
        if (json.code === 200) {
          let dispatchData = json.data;
          if (typeof(formatOriginData) === 'function') {
            dispatchData = formatOriginData(dispatchData);
          }
          if (hash.split('#/')[1]
            && window.location.hash.split('#/')[1]
            && hash.split('#/')[1].split('?')[0] === window.location.hash.split('#/')[1].split('?')[0]
          ) {
            dispatch(actions.loadTableData(dispatchData));
          } else if (hash === window.location.hash){
            dispatch(actions.loadTableData(dispatchData));
          }
          // me.initScroll();
          // notification.success({message: '', description: "指标清除成功！"});
        }
      });
    }
    // 获取路由中订阅参数的值
    getRouteSubscribeParm(props) {
      const { subscribeParm } = props;
      let res = {};
      subscribeParm.map((item) => {
        res[item] = props[item];
      });
      return res;
    }
    onPageChange(page) {
      const { pagination } = this.props;
      this.updateHash({currentPage: page});
      if (pagination && typeof(pagination.onChange) === 'function') pagination.onChange(page);
    }
    // 改变每页条数
    onPageSizeChange(current, size) {
      const { pagination } = this.props;
      this.updateHash({currentPage: current, pageSize: size});
      if (pagination && typeof(pagination.onShowSizeChange) === 'function') pagination.onShowSizeChange(current, size);
    }
    // 获取y方向滚动的宽度
    getYlen() {
      let screenHeight = window.innerHeight,
          tableBodyTop = Public.getAbsPoint(document.getElementsByClassName('ant-table-body')[0]).y,
          paginationHeight = 38 + 10;
      return screenHeight - tableBodyTop - paginationHeight;
    }
    // 获取横向滚动的宽度
    getWidth() {
      const { columns } = this.props;
      let width = 0;
      columns.forEach(function (v) {
        if (!v.hidden) {
          if (v.width) {
            width += parseInt(v.width);
          }
        }
      });
      return width + 'px';
    }
    // 初始化table的滚动
    initScroll(){
      // const scroll = this.scroll;
      if(document.body.getBoundingClientRect){
        let node = document.querySelector('.pagination-antd-table').querySelector('.ant-table');
        let winHeight=window.innerHeight;
        let winWidth=window.innerWidth;
        if(node){
          if(node&&node.getBoundingClientRect){
            let rect = node.getBoundingClientRect();
            this.scroll={y:winHeight-rect.top-(winWidth>=1680?100:90) + 'px',x:this.getWidth()};
          }
        }
      }else{
        let xlen = (scroll && scroll.x) ? scroll.x : false,
          ylen = this.getYlen();
        let scroll = Object.assign({}, scroll);
        if (xlen) {
          scroll = {
            x: xlen,
            y: ylen
          };
        } else {
         scroll = {
            x: this.getWidth(),
            y: ylen
          };
        }
        this.scroll=scroll;
      }
      this.forceUpdate();
    }
    // 如果窗口大小重置了，则重新设置滚动条
    handleResize() {
      this.initScroll();
    }
    // 选择table的某一项
    onSelectChange = (defaultRelectedRowKeys) => {
      const { rowSelection } = this.props;
      this.setState({ defaultRelectedRowKeys });
      if (rowSelection && typeof(rowSelection.onChange) === 'function') rowSelection.onChange(defaultRelectedRowKeys);
    }
    // 选中全部
    onSelectAll(selected, selectedRows) {
      const { rowSelection } = this.props;
      if (rowSelection && typeof(rowSelection.onSelectAll) === 'function') rowSelection.onSelectAll(selectedRows);
    }
    render() {
      const { prefixCls, common_table_data,
        columns, rowClassName,
        onRowClick, wrapperClassName, rowSelection,
        expandedRowKeys, pagination, className
       } = this.props;
      const { defaultRelectedRowKeys } = this.state;
      const totalCount = common_table_data.totalCount,
        currentPage = common_table_data.currentPage,
        pageSize = common_table_data.pageSize,
        dataSource = common_table_data.data;
      let localRowSelection;
      let localPagination;
      let finalSelectedRowKeys = defaultRelectedRowKeys;
      if (typeof(pagination) === 'boolean' && pagination === false) {
        localPagination = false;
      } else {
        localPagination = {
          pageSizeOptions: ['10', '30', '50'],
          total: totalCount || Number(1),
          current: currentPage || Number(1),
          showTotal: total =><span>共 <span className="">{total}</span> 条</span>,
          showSizeChanger: true,
          defaultPageSize: pageSize || 30, //默认分页条数
          pageSize: pageSize || 30,
          showQuickJumper: true,
          onChange: this.onPageChange,
          onShowSizeChange: this.onPageSizeChange
        };
      }
      let wrapperClaName = wrapperClassName ? prefixCls + ' ' + wrapperClassName : prefixCls;
      if (!dataSource || dataSource.length < 1) localPagination = false;
      if (rowSelection && rowSelection.selectedRowKeys) {
        finalSelectedRowKeys = rowSelection.selectedRowKeys;
      }
      if (rowSelection) {
        localRowSelection = {
          selectedRowKeys: finalSelectedRowKeys,
          onChange: this.onSelectChange,
          getCheckboxProps: rowSelection.getCheckboxProps,
          onSelectAll: this.onSelectAll
        };
      } else {
        localRowSelection = null;
      }
      const newProps = Object.assign({}, this.props, {
        key: "paginationTable",
        ref: "paginationTable",
        className: 'pagination-antd-table ' + className,
        columns: columns,
        dataSource: dataSource,
        pagination: localPagination,
        scroll: this.scroll,
        rowSelection: localRowSelection,
        rowClassName: rowClassName,
        onRowClick: onRowClick,
        expandedRowKeys: expandedRowKeys,
        prefixCls: 'ant-table'
      });
      const NewTable = React.createElement(AntdTable, newProps);
      return (
        <div className={wrapperClaName}>
          {NewTable}
        </div>
      );
    }
  };
}

export default enhancedPaginationTable;
