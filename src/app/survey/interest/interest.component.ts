import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.css']
})
export class InterestComponent implements OnInit {
  next: number;
  toggleOn: number;
  readonly baseUrl = 'http://localhost:3000/interest';
  clickedItem: number;
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  clickEvent(location_category_id: number) {
    this.toggleOn = location_category_id;
    this.clickedItem =location_category_id;
    this.next = location_category_id;
    const userid = localStorage.getItem('id');
  var id= userid;
  console.log(id);
    this.http.post(this.baseUrl, { location_category_id,id }).subscribe();
    console.log(location_category_id);
  }
}
