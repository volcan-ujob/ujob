import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signe-cmp',
  templateUrl: './signe-cmp.component.html',
  styleUrls: ['./signe-cmp.component.scss'],
})
export class SigneCmpComponent implements OnInit {
  registerCompanyData = {
    username: '',
    email: '',
    password: '',
  };
  constructor(private _auth: AuthService) {}

  ngOnInit(): void {}
  registerCompany() {
    console.log(this.registerCompanyData);
    this._auth.registerCompany(this.registerCompanyData).subscribe(
      (res: any) => console.log(res),
      (err: any) => console.log(err)
    );
  }
}
