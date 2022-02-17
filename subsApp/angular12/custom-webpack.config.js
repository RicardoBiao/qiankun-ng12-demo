/*
 * @Author: liweibiao
 * @Date: 2022-02-17 15:33:28
 * @LastEditTime: 2022-02-17 16:00:20
 * @LastEditors: liweibiao
 * @Description: 
 */

const appName = require('./package.json').name;
module.exports = {
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  output: {
    library: `${appName}-[name]`,
    libraryTarget: 'umd',
    chunkLoadingGlobal: `webpackJsonp_${appName}`,
  },
};