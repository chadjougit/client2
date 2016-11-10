import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
 @Input() time: any;
//  @Input() time: string = "Thu Nov 24 2016 01:41:16 GMT+0300 (RTZ 2 (зима))";
 //@Input() time: any = Date();
 

time2: any = Date();
time3: string = "Thu Nov 10 2016 01:41:16 GMT+0300 (RTZ 2 (зима))";
 

  constructor() { }
 


  ngOnInit() {
    console.log(this.time2);
       console.log(this.time);

  }

}
