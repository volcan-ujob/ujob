import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
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
  router: any;
  constructor(private _auth: AuthService) {}

  ngOnInit(): void {}
  loginCompany() {
    console.log(this.loginCompanyData);
    this._auth.loginCompany(this.loginCompanyData).subscribe(
      (res: any) => console.log(res),
      (err: any) => console.log(err)
    );
    this._auth.loginCompany(this.loginCompany).subscribe(
      (res: any) => {
        if (res.username !== null) {
          localStorage.setItem('user', JSON.stringify(res));
          localStorage['login_status'] = '1';
          this.router.navigate(['/myprofile-cmp']);
        }
      },
      (err: any) => console.log(err)
    );
  }
}
