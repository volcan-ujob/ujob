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

@NgModule({
  declarations: [AppComponent, routingComponents, FirstPageComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
