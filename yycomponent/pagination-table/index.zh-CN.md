---
category: Components
type: example
cols: 1
title: pagination-table
---

增加自定义列宽功能的增强版table

## 优点
1. 高阶组件，扩展性好，可以包裹自定义列宽组件

## 缺点

## 如何使用


## API

### pagination-table

| 参数             | 说明                                         | 类型     | 默认值        |
|------------------|----------------------------------------------|----------|---------------|
| common_table_data        | 存放在redux里面的table的数据源                 | object   | 无            |
| subscribeParm        | 接口订阅的变量                 | array   | 无            |
| apiRoute        | 接口地址                | string   | 无            |
| dispatch        | 用于修改全局变量                | func   | 无            |
| formatErrorOriginData        | 如果接口错误                | func   | 无            |
| formatOriginData        | 格式化接口返回的数据                | func   | 无            |
