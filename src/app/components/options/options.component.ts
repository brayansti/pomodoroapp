import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss'],
})
export class OptionsComponent implements OnInit {

  @Output() ouputOptions = new EventEmitter<Object>();

  options:object = {
    optionvalueHour : 0,
    optionshortBreak : 0,
    optionlongBreak : 0,
    optionrounds : 0,
  }


  constructor() { }

  ngOnInit() {
  }

  sendDataTime = ( data:Object ) =>{
    this.ouputOptions.emit(data);
  }
}
