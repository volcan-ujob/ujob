import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prof-user',
  templateUrl: './prof-user.component.html',
  styleUrls: ['./prof-user.component.scss'],
})
export class ProfUserComponent implements OnInit {
  user = JSON.parse(localStorage.getItem('user') || '{}');
  constructor() {}

  ngOnInit(): void {}
}
