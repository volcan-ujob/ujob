import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginCmpComponent } from './login-cmp/login-cmp.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { SigneUserComponent } from './signe-user/signe-user.component';
import { SigneCmpComponent } from './signe-cmp/signe-cmp.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login-com', component: LoginCmpComponent },
  { path: 'login-user', component: LoginUserComponent },
  { path: 'signe-user', component: SigneUserComponent },
  { path: 'signe-cmp', component: SigneCmpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  HomeComponent,
  LoginCmpComponent,
  LoginUserComponent,
  SigneUserComponent,
  SigneCmpComponent,
];
