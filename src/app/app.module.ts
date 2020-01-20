import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { AppComponent } from './app.component';
import { OptionsComponent } from './components/options/options.component';
import { TimerComponent } from './components/timer/timer.component';


@NgModule({
  declarations: [
    AppComponent,
    OptionsComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatIconModule,
    NgCircleProgressModule.forRoot({
      "radius": 100,
      "space": -10,
      "outerStrokeWidth": 10,
      "outerStrokeColor": "#F2AB27",
      "innerStrokeColor": "#283335",
      "innerStrokeWidth": 10,
      "title": "00:00",
      "titleFontSize": "50",
      "titleColor": "#fff",
      "animateTitle": false,
      "showSubtitle": true,
      "subtitleFontSize": '18',
      "showUnits": false,
      "showBackground": false,
      "clockwise": true,
      "startFromZero": false,
      "animation": false,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
