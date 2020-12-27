import { Component, OnInit } from '@angular/core';
import {HttpClient}from '@angular/common/http';
// import {UserService} from '../services/user-service'
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-my-profil-user',
  templateUrl: './my-profil-user.component.html',
  styleUrls: ['./my-profil-user.component.scss']
})
export class MyProfilUserComponent implements OnInit {
  user : any 
  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
  // this.getUser()
  }
  // getUserById(){
  //   this.UserService.getUser().subscribe((response) =>{
  //     this.user = response
  //   })
    
  // }

}
