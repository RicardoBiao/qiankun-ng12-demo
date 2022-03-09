import { Injectable } from '@angular/core';
import { MicroAppStateActions } from 'qiankun';
import { Actions } from "../../main";

@Injectable({
  providedIn: 'root'
})
export class ActionService {
  private actions: MicroAppStateActions = Actions
  constructor() { }
  /**  在当前应用监听全局状态，有变更触发 callback，fireImmediately = true 立即触发 callback */
  onGlobalStateChange() {
    return this.actions.onGlobalStateChange
  }
  /**  按一级属性设置全局状态，微应用中只能修改已存在的一级属性 */
  setGlobalState(data: Record<string, any>) {
    this.actions.setGlobalState(data)
  }
}
