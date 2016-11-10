import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import {DefaultpageComponent} from "./components/defaultpage/defaultpage/defaultpage.component";
import {SecuredComponent} from "./components/secured/secured/secured.component";
import {NonsecuredComponent} from "./components/nonsecured/nonsecured/nonsecured.component";

import {LoginguardService} from './login/loginguard.service'

import { FirstdashComponent } from './components/defaultpage/defaultpage/firstdash/firstdash.component';
import { SeconddashComponent } from './components/defaultpage/defaultpage/seconddash/seconddash.component';






export const routes = RouterModule.forRoot([

 { path: '', redirectTo: 'defaultpage', pathMatch: 'full' },
    {
        path: 'defaultpage', component: DefaultpageComponent,
        children: [
            { path: '', redirectTo: 'firstdash', pathMatch: 'full' },
            { path: 'firstdash', component: FirstdashComponent },
            { path: 'seconddash', component: SeconddashComponent },
            { path: '**', redirectTo: 'seconddash', pathMatch: 'full' }

        ]

    },
     { path: 'NonsecuredComponent', component: NonsecuredComponent },
      { path: 'SecuredComponent', component: SecuredComponent, canActivate: [LoginguardService]  },
 { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: 'defaultpage', pathMatch: 'full' },
   
]);
