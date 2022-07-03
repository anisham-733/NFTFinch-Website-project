import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
  }
  forgotPassword() {
    this.router.navigate(['/forgotPass'], {relativeTo: this.route})
  

  }
  signUp() {
    this.router.navigate(['/signUp'], {relativeTo:this.route})
  }

}
