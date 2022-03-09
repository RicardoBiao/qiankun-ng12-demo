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
export const Actions: MicroAppStateActions = initGlobalState({
  key: "kkk"
});




registerMicroApps([
  {
    name: 'angular app', // app name registered
    entry: '//localhost:4300',
    container: '#ngapp-viewport',
    activeRule: '/app-ng',
    props: Actions
  },
]);

start();
