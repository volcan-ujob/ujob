import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { LoginCmpComponent } from './login-cmp/login-cmp.component';
import { SigneUserComponent } from './signe-user/signe-user.component';
import { SigneCmpComponent } from './signe-cmp/signe-cmp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FirstPageComponent } from './first-page/first-page.component';
import { ProfileCmpComponent } from './profile-cmp/profile-cmp.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { MyProfilUserComponent } from './my-profil-user/my-profil-user.component';
import { EditProfileUserComponent } from './edit-profile-user/edit-profile-user.component';
import { MyProfilCmpComponent } from './my-profil-cmp/my-profil-cmp.component';
import { PaymeComponent } from './payme/payme.component';

@NgModule({
  declarations: [AppComponent, routingComponents, FirstPageComponent, ProfileCmpComponent, ProfileUserComponent, MyProfilUserComponent, EditProfileUserComponent, MyProfilCmpComponent, PaymeComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
