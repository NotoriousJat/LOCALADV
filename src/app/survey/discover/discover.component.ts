import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements OnInit {
  readonly baseUrl = 'http://localhost:3000/discover';
  next: string;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  clickEvent(discover: string){
    localStorage.setItem('discover', discover);
    
  }
  onclickEvent(pace: string){
    const discovers = localStorage.getItem('discover');
    var discover = discovers;
    if(discover || pace){
      this.next = pace;
    }
      const getId = localStorage.getItem('id');
      var id = getId;
      this.http.post(this.baseUrl, { id,discover, pace }).subscribe();
  }
}
