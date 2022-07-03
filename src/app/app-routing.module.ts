import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { ExampleStore1Component } from './example-store1/example-store1.component';
const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'forgotPass',component: ForgotPasswordComponent},
  {path:'signUp',component:SignUpComponent},
  {path:'example-store1',component:ExampleStore1Component}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[LoginComponent,ForgotPasswordComponent,SignUpComponent, ExampleStore1Component]
