"use strict";
const ENV = process.env.NODE_ENV;
if (ENV !== 'production' &&
    ENV !== 'test' &&
    typeof console !== 'undefined' &&
    console.warn &&
    typeof window !== 'undefined') {
    console.warn('You are using a whole package of antd, ' +
        'please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size.');
}
var resizable_table_1 = require("./resizable-table");
exports.enhancedResizableTable = resizable_table_1.default;
