/*
 * @Author: liweibiao
 * @Date: 2022-02-17 16:46:20
 * @LastEditTime: 2022-03-09 14:39:45
 * @LastEditors: liweibiao
 * @Description:
 */
import './public-path';
import { enableProdMode, NgModuleRef  } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { LoginService } from './app/services/login.service';
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

let app: void | NgModuleRef<AppModule>;
async function render() {
  app = await platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
}
if (!(window as any).__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap(props: Object) {
  console.log('子应用接收的数据：', props);

}

export async function mount(props: any) {
  props.onGlobalStateChange((state: any, prev: any) => {
    // state: 变更后的状态; prev 变更前的状态
    console.log(state, prev);
  });
  setTimeout(() => {
    props.setGlobalState({user: "123"});
  },2000)
  setTimeout(() => {
    props.setGlobalState({user: "456"});
  },2000)
  render();
}

export async function unmount(props: Object) {
  console.log(props);
  // @ts-ignore
  app.destroy();
}
