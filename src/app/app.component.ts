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
  activateOptions = true;
  activateHamburguer:boolean = false;
  currentActivity: string = 'Work'

  constructor(){}
  ngOnInit() {
    
  }

  updateOptions(e):void {
    this.options = e
  }

  showHideptions():any {
    this.activateOptions = !this.activateOptions;
    console.log(this.activateOptions);
  }
  
  inputCurrentCounter(currentTime):void {
    console.log(currentTime);
    let timeDecimal = currentTime[0][0] + currentTime[0][1] / 60
    console.log(timeDecimal);

    // this.currentClock = `${currentTime[0][0]}:${currentTime[0][1]}`
    this.currentClock = `${currentTime[0][0] < 10 ? 0 : ''}${currentTime[0][0]} : ${currentTime[0][1] < 10 ? 0 : ''}${currentTime[0][1]}`
    this.percentClock = ((timeDecimal*100) / currentTime[1]);
  }
  inputCurrentActivity(currentActivity){
    this.currentActivity = currentActivity;
  }

  activateHamburguerNav(data:boolean):void{
    this.activateHamburguer = data
    this.activateOptions = false
  }

}
