import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { SocialAuthService } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss'],
})
export class LoginUserComponent implements OnInit {
  loginUserData = {
    username: '',
    password: '',
  };

  constructor(private _auth: AuthService) {}

  ngOnInit(): void {}
  loginUser() {
    console.log(this.loginUserData);
    this._auth.loginUser(this.loginUserData).subscribe(
      (res: any) => console.log(res),
      (err: any) => console.log(err)
    );
  }
}
