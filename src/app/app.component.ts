import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  currentTime: [0 , 0]
  title = 'Pomodoro APP';
  percentClock:number = 100;
  options: object = {};

  constructor(){}
  ngOnInit() {
    
  }

  updateOptions(e):void {
    this.options = e
  }
  
  inputCurrentTime(currentTime):void {
    console.log(currentTime);
    // this.currentTime = currentTime;
  }

}
