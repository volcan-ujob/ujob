import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service.service';
@Component({
  selector: 'app-prof-user',
  templateUrl: './prof-user.component.html',
  styleUrls: ['./prof-user.component.scss'],
})
export class ProfUserComponent implements OnInit {
  user = JSON.parse(localStorage.getItem('user') || '{}');
  constructor(private _http: HttpClient, private userService: UserService) {}

  ngOnInit(): void {
    this.getUserById();
  }
  getUserById() {
    var id = this.user._id;
    this.userService.myNewProf(id).subscribe((response) => {
      this.user = response;
    });
  }
}
