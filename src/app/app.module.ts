import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { clockReducer } from './reducers';
import { Store, StoreModule } from '@ngrx/store';
import { ClockComponent } from './components/clock/clock.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
     StoreModule.provideStore(
        {clock: clockReducer}, 
        {clock: new Date() }
      )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
