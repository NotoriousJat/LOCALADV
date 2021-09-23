import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-barcelona',
  templateUrl: './barcelona.component.html',
  styleUrls: ['./barcelona.component.css'],
})
export class BarcelonaComponent implements OnInit {
  readonly baseUrl = 'http://localhost:3000/barcelona';

  constructor(private http: HttpClient) {}
  next: number;
  ngOnInit(): void {}
  onSubmit() {
    // this.http.post(this.baseUrl, { first_time }).subscribe();
    // console.log(firsttime);
  }
  clickEvent(first_time: number) {
    this.next = first_time;
    const userid = localStorage.getItem('id');
    var id = userid;
    console.log(id);
    this.http.post(this.baseUrl, { first_time, id }).subscribe();
    console.log(first_time);
  }
}
