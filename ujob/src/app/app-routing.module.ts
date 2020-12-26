import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginCmpComponent } from './login-cmp/login-cmp.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { SigneUserComponent } from './signe-user/signe-user.component';
import { SigneCmpComponent } from './signe-cmp/signe-cmp.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { ProfileCmpComponent } from './profile-cmp/profile-cmp.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import {MyProfilUserComponent} from './my-profil-user/my-profil-user.component';
import { EditProfileUserComponent } from './edit-profile-user/edit-profile-user.component';
import { MyProfilCmpComponent } from './my-profil-cmp/my-profil-cmp.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login-cmp', component: LoginCmpComponent },
  { path: 'login-user', component: LoginUserComponent },
  { path: 'sign-user', component: SigneUserComponent },
  { path: 'sign-cmp', component: SigneCmpComponent },
  { path: '', component: FirstPageComponent },
  { path: 'profile-cmp', component: ProfileCmpComponent},
  { path: 'profile-user', component: ProfileUserComponent},
  { path: 'myprofile-user', component:MyProfilUserComponent},
  { path : "edit-profile-user", component: EditProfileUserComponent},
  {path : 'myprofile-cmp', component:MyProfilCmpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  FirstPageComponent,
  HomeComponent,
  LoginCmpComponent,
  LoginUserComponent,
  SigneUserComponent,
  SigneCmpComponent,
  ProfileCmpComponent,
  ProfileUserComponent,
  MyProfilUserComponent,
  EditProfileUserComponent,
  MyProfilCmpComponent
];
