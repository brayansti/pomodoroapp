import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pomodoro APP';
  testModel = '';

  options: object = {};

  updateOptions(e):void {
    this.options = e
  }
}
