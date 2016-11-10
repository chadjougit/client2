import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { clockReducer } from './reducers';
import { Store, StoreModule } from '@ngrx/store';
import { ClockComponent } from './components/clock/clock.component';
import { LoginComponent } from './login/login/login.component';
import { DefaultpageComponent } from './components/defaultpage/defaultpage/defaultpage.component';
import { NonsecuredComponent } from './components/nonsecured/nonsecured/nonsecured.component';
import { SecuredComponent } from './components/secured/secured/secured.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FirstdashComponent } from './components/defaultpage/defaultpage/firstdash/firstdash.component';
import { SeconddashComponent } from './components/defaultpage/defaultpage/seconddash/seconddash.component';
import { routes } from './app-routing';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import {LoggedService  } from './login/logged.service'
import {LoginguardService } from './login/loginguard.service'

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    LoginComponent,
    DefaultpageComponent,
    NonsecuredComponent,
    SecuredComponent,
    NavbarComponent,
    FirstdashComponent,
    SeconddashComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    routes,
     StoreModule.provideStore(
        {clock: clockReducer}, 
        {clock: new Date() }
      )
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, LoggedService, LoginguardService],
  bootstrap: [AppComponent]
  //schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
