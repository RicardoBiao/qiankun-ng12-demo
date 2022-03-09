import {Component, OnInit} from '@angular/core';
import {ActionService} from "./services/action.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'qk-ng-main';
  mangoState: string | Record<string, any> | undefined;
  constructor(
    private actionService: ActionService
  ) {}
  ngOnInit() {
    this.actionService.onGlobalStateChange()((state, prev) => {
      this.mangoState = state || ''
      console.warn('主应用获取- state--->' + this.mangoState)
      console.warn('主应用获取- prev--->' + prev)
    })
  }

  setStates() {
    this.actionService.setGlobalState({
      name: "vvv"
    })
  }
}
