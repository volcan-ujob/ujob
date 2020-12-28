import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-profil-cmp',
  templateUrl: './my-profil-cmp.component.html',
  styleUrls: ['./my-profil-cmp.component.scss']
})
export class MyProfilCmpComponent implements OnInit {
  user = JSON.parse(localStorage.getItem('user') || '{}');
  constructor() { }

  ngOnInit(): void {
  }

}
