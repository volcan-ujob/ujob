import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { HttpClient } from '@angular/common/http';

import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signe-user',
  templateUrl: './signe-user.component.html',
  styleUrls: ['./signe-user.component.scss'],
})
export class SigneUserComponent implements OnInit {
  registerUserData = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
  };
  constructor(private _auth: AuthService) {}

  ngOnInit(): void {}
  registerUser() {
    console.log(this.registerUserData);
    this._auth.registerUser(this.registerUserData).subscribe(
      (res: any) => console.log(res),
      (err: any) => console.log(err)
    );
  }
}
