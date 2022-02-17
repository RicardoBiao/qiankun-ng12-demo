/*
 * @Author: liweibiao
 * @Date: 2022-02-17 10:56:03
 * @LastEditTime: 2022-02-17 16:03:40
 * @LastEditors: liweibiao
 * @Description: 
 */
import 'zone.js'; 
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { registerMicroApps, start } from 'qiankun';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

registerMicroApps([
  {
    name: 'angular app', // app name registered
    entry: '//localhost:4300',
    container: '#ngapp-viewport',
    activeRule: '/app-ng',
  },
]);

start();