import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-table-posts',
  templateUrl: './table-posts.component.html',
  styleUrls: ['./table-posts.component.scss']
})
export class TablePostsComponent implements OnInit {
  pathOrigine: string = 'http://localhost:3000/';
  tableData: any[]=[];
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    this.httpClient.get(this.pathOrigine+'posts', httpOptions)
    .subscribe((res: any) => {
      this.tableData=res;
      console.log(res);
    });
  }

}
