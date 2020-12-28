import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-my-profil-cmp',
  templateUrl: './my-profil-cmp.component.html',
  styleUrls: ['./my-profil-cmp.component.scss'],
})
export class MyProfilCmpComponent implements OnInit {
  test: string = '';
  pathOrigine: string = 'http://localhost:3000/';
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {}
  postClick() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    this.httpClient
      .post(this.pathOrigine + 'posts', { details: this.test }, httpOptions)
      .subscribe((res: any) => {
        console.log(res);
      });
  }
}
