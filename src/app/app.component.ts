import { Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/scan';
import { Subject } from 'rxjs/Subject';
import {SECOND, HOUR, PeopleState} from './reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';


click$: Observable<any> = new Subject().map( (value: any) => {
      const val = parseInt(value);
      return {  type: HOUR, payload: val}
  });

  time: any;

constructor(public store: Store<PeopleState>)
{
this.time = store.select('clock');

 Observable.merge(
      // Observable.interval(1000),
    
      // this.click$
      this.click$,
    )
      .subscribe(store.dispatch.bind(store));


}


}
