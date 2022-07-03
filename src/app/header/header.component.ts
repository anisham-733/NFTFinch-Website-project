import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, ParamMap, Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
  }
  loginPg() {
    this.router.navigate(['login'], {relativeTo: this.route})
  }


}
