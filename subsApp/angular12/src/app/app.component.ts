/*
 * @Author: liweibiao
 * @Date: 2022-02-17 10:51:49
 * @LastEditTime: 2022-02-17 15:39:21
 * @LastEditors: liweibiao
 * @Description:
 */
import { Component, OnInit } from '@angular/core';
import { LoginService} from "./services/login.service";

@Component({
  selector: '#angular12 app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'qk-ng-app';

  constructor(
    private loginService: LoginService
  ) {}

  ngOnInit() {
  }
}
