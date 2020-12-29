import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router'; 
@Component({
  selector: 'app-my-profil-cmp',
  templateUrl: './my-profil-cmp.component.html',
  styleUrls: ['./my-profil-cmp.component.scss'],
})
export class MyProfilCmpComponent implements OnInit {
  check:boolean=false;
  id:any='';
  test: string = '';
  pathOrigine: string = 'http://localhost:3000/';
  constructor(private route:Router, private httpClient: HttpClient, private activatedRoute: ActivatedRoute
    ) {}

  ngOnInit(): void {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if(this.id !== null){
      this.check=true;
       this.httpClient.get(this.pathOrigine+'posts/'+this.id, httpOptions)
       .subscribe((res:any)=>{
         if(res!==null){
           this.test=res.details
         }
       })
    }
    
  }
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
        this.route.navigate(['/table-posts/']);
      });
  }
  putClick(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    this.httpClient
      .put(this.pathOrigine + 'posts/'+this.id, { details: this.test }, httpOptions)
      .subscribe((res: any) => {
        console.log(res);
        alert('post updated')
        this.route.navigate(['/table-posts/']);
      });


  }
}
