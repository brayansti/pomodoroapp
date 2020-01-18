import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss'],
})
export class OptionsComponent implements OnInit {

  @Output() ouputOptions = new EventEmitter();

  options:object = {
    optionvalueHour : 20,
    optionshortBreak : 5,
    optionlongBreak : 15,
    optionrounds : 4,
  }


  constructor() { }

  ngOnInit() {
    // this.sendDataTime(this.options);
  }

  @Output() myEvent = new EventEmitter();
  sendDataTime(data:Object){
    this.ouputOptions.emit(data)
  }
}
