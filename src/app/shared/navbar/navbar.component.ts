import { Component, OnInit } from '@angular/core';

import {
   Router
} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {




  constructor(private router: Router,) { }

  currentroute: any = this.router.url;

getStyle() 
{
  console.log("clicked");
  return "active";}


  ngOnInit() {
      console.log("hi " + this.currentroute);
  }

}
