import { Component, OnInit, OnDestroy, OnChanges , Input, EventEmitter, Output } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';
import { resolve } from 'url';
import { promise } from 'protractor';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit, OnDestroy, OnChanges {

  @Input() m: number;
  @Input() s: number;
  newOptions: Object;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onComplete: EventEmitter<any> = new EventEmitter();

  running = false;
  // newOptions[optionvalueHour]
  // newOptions[optionshortBreak]
  timing = [0, 2];
  currentRound = 1;
  nextRound = false;
  subscription: Subscription;

  constructor() { }

  updateOptions(options): void{
    this.newOptions = options;
    this.timing = [this.newOptions['optionvalueHour'] , 0]
    this.runPomodoro();
  }

  runPomodoro():void {
    // newOptions[optionvalueHour]
    // newOptions[optionshortBreak]
    // newOptions[optionlongBreak]
    // newOptions[optionrounds]
    // Set rounds

    // this.changeTime(this.newOptions['optionvalueHour']);

    this.startTimer().then( status=>{
      onEndClock()
    } );

    const onEndClock = ()=>{
      console.log('Clock Ended');
      // When have to work
      if(this.nextRound){
        // console.log(this.nextRound);
        this.changeTime(this.newOptions['optionvalueHour']);
        this.stopTimer(); this.runPomodoro();
      }
      // When have take a break
      else{
        // console.log(this.nextRound);
        // When is short break
        if(this.currentRound < this.newOptions['optionrounds']){
          // console.log('short break');
          this.changeTime(this.newOptions['optionshortBreak']);
          this.currentRound ++
        }
        else{
          // When is long break
          // console.log('Long break');
          this.changeTime(this.newOptions['optionlongBreak']);
        }
        this.stopTimer();
        /* Run Clock Again → */ this.runPomodoro();
      }
      this.nextRound = !this.nextRound;
    }
    
  }

  ngOnChanges(changes): void{
    console.log(changes);
  }

  ngOnInit(): void {
    // this.newOptions.subscribe( algo =>{
    //   console.log('Cambiado');
    // } )
    if (this.m) {
      this.timing[0] = this.m;
    } else {
      this.m = 25;
    }
    if (this.s) {
      this.timing[1] = this.s;
    } else {
      this.s = 0;
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  startTimer(): any {
    return new Promise( (resolve) =>{
      if (!this.running) {
        // Set running to true.
        this.running = true;
        // Check if the timer is complete and if so reset it before starting.
        if (this.timing[0] === 0 && this.timing[1] === 0) {
          this.resetTimer();
        }
        // Create Rxjs interval to call a update method every second.
        this.subscription = interval(1000).subscribe(() => this.updateTimer().then( status =>{
          resolve(status)
        }) );
      }
    } )
  }

  stopTimer(): void {
    if (this.running) {
      // Set running to false.
      this.running = false;
      // If we want to stop the timer then unsubscribe from the interval.
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
    }
  }

  resetTimer(): void {
    // Set the minutes and seconds back to their original values.
    this.stopTimer();
    this.timing = [this.m, this.s];
  }

  changeTime(minutes): void{
    // Set the minutes and seconds back to their new values.
    this.stopTimer();
    this.timing = [minutes, 1];
  }

  private updateTimer():any {
    return new Promise( (resolve) =>{
        if (this.running) {
          // Check if the timer is comeplete and if so stop the timer and run onComplete().
          if (this.timing[0] === 0 && this.timing[1] === 0) {
            this.stopTimer();
            // Make a sound/send an alert.
            resolve( {ended: true} )
            this.onComplete.emit();
          } else if (this.timing[0] !== 0 && this.timing[1] === 0) {
            this.timing = [this.timing[0] - 1, 59];
          } else if (this.timing[1] !== 0) {
            this.timing = [this.timing[0], this.timing[1] - 1];
          }
        }
    } )
  }

  // private updateTimer(): void {
  //   if (this.running) {
  //     // Check if the timer is comeplete and if so stop the timer and run onComplete().
  //     if (this.timing[0] === 0 && this.timing[1] === 0) {
  //       this.stopTimer();
  //       // Make a sound/send an alert.
  //       this.onComplete.emit();
  //     } else if (this.timing[0] !== 0 && this.timing[1] === 0) {
  //       this.timing = [this.timing[0] - 1, 59];
  //     } else if (this.timing[1] !== 0) {
  //       this.timing = [this.timing[0], this.timing[1] - 1];
  //     }
  //   }
  // }

}
