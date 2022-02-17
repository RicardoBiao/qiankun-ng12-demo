/*
 * @Author: liweibiao
 * @Date: 2022-02-17 10:56:03
 * @LastEditTime: 2022-02-17 15:54:37
 * @LastEditors: liweibiao
 * @Description: 
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyComponent } from './pages/empty/empty.component';

const routes: Routes = [{
  path: '**',
  component: EmptyComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
