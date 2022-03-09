/*
 * @Author: liweibiao
 * @Date: 2022-02-17 10:56:03
 * @LastEditTime: 2022-03-09 14:31:12
 * @LastEditors: liweibiao
 * @Description:
 */
import 'zone.js';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { initGlobalState, MicroAppStateActions, registerMicroApps, start } from 'qiankun';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


// 初始化 state
const actions: MicroAppStateActions = initGlobalState({user: 'kuitos'});

actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log('state:',state, 'prev:',prev);
});


registerMicroApps([
  {
    name: 'angular app', // app name registered
    entry: '//localhost:4300',
    container: '#ngapp-viewport',
    activeRule: '/app-ng',
    props: actions
  },
]);

start();
