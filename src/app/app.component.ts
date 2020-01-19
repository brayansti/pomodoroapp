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
  currentClock;

  constructor(){}
  ngOnInit() {
    
  }

  updateOptions(e):void {
    this.options = e
  }
  
  inputCurrentCounter(currentTime):void {
    console.log(currentTime);
    let timeDecimal = currentTime[0][0] + currentTime[0][1] / 60
    console.log(timeDecimal);

    this.percentClock = ((timeDecimal*100) / currentTime[1]);

  }

}
