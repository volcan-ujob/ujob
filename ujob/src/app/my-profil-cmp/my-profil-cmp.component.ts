import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service.service';

@Component({
  selector: 'app-my-profil-cmp',
  templateUrl: './my-profil-cmp.component.html',
  styleUrls: ['./my-profil-cmp.component.scss']
})
export class MyProfilCmpComponent implements OnInit {
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
