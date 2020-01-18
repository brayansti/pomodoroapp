import { Component, OnInit, OnDestroy, Input, EventEmitter, Output } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit, OnDestroy {

  @Input() m: number;
  @Input() s: number;
  @Input() newOptions: Object;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onComplete: EventEmitter<any> = new EventEmitter();

  running = false;
  timing = [1, 30];
  subscription: Subscription;

  constructor() { }

  ngOnInit(): void {
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

  startTimer(): void {
    if (!this.running) {
      // Set running to true.
      this.running = true;
      // Check if the timer is complete and if so reset it before starting.
      if (this.timing[0] === 0 && this.timing[1] === 0) {
        this.resetTimer();
      }
      // Create Rxjs interval to call a update method every second.
      this.subscription = interval(1000).subscribe(x => this.updateTimer());
    }
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

  changeTime(): void{
    // Set the minutes and seconds back to their new values.
    this.stopTimer();
    this.timing = [2, 30];

    console.log(this.newOptions);
  }

  private updateTimer(): void {
    if (this.running) {
      // Check if the timer is comeplete and if so stop the timer and run onComplete().
      if (this.timing[0] === 0 && this.timing[1] === 0) {
        this.stopTimer();
        // Make a sound/send an alert.
        this.onComplete.emit();
      } else if (this.timing[0] !== 0 && this.timing[1] === 0) {
        this.timing = [this.timing[0] - 1, 59];
      } else if (this.timing[1] !== 0) {
        this.timing = [this.timing[0], this.timing[1] - 1];
      }
    }
  }

}
