import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatSliderModule} from '@angular/material/slider';
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
    NgCircleProgressModule.forRoot({ /*  Default options here */ })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
