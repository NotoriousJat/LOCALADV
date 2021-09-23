import { Component, OnInit } from '@angular/core';
import { RandomService } from 'src/app/random.service';
import { HttpClient } from '@angular/common/http';

declare var $: any;
@Component({
  selector: 'app-advisor',
  templateUrl: './advisor.component.html',
  styleUrls: ['./advisor.component.css'],
})
export class AdvisorComponent implements OnInit {
  readonly baseUrl = 'http://localhost:3000/advisor';

  constructor(private http: HttpClient) {}
  status: boolean = false;

  clickEvent(city: string) {
    const userid = localStorage.getItem('id');
    var id= userid;
    console.log(id);
    this.http.post(this.baseUrl, { city,id }).subscribe();
    console.log(city);
    // alert('ok')
    console.log(this);
    this.status = !this.status;
    if (this.status == true) {
      $('.nextBtttn').addClass('active');
    } else {
      $('.nextBtttn').removeClass('active');
    }
  }
  ngOnInit(): void {}
}
