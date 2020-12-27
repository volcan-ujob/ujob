import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-cmp',
  templateUrl: './login-cmp.component.html',
  styleUrls: ['./login-cmp.component.scss'],
})
export class LoginCmpComponent implements OnInit {
  loginCompanyData = {
    username: '',
    password: '',
  };
  constructor(private _auth: AuthService) {}

  ngOnInit(): void {}
  loginCompany() {
    console.log(this.loginCompanyData);
    this._auth.loginCompany(this.loginCompanyData).subscribe(
      (res: any) => console.log(res),
      (err: any) => console.log(err)
    );
  }
}
