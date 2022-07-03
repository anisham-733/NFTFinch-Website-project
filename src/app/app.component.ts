import { Component, OnInit } from '@angular/core';

import {  ActivatedRoute, ParamMap, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
  }
  checkRoute() {
    console.log(this.router.url);
    
    if(this.router.url==='/login' || this.router.url==='/signUp' || this.router.url==='/forgotPass') {
      return false;
    }
    else {
      return true;
    } 
    
  }
  
  
}
