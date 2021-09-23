import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
declare var $: any;

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    $('.createUserBtn').click(function(){
      var name = $('.name').val();
      localStorage.setItem('name', name);
      var surname = $('.surname').val();
      localStorage.setItem('surname', surname);
      var email = $('.email').val();
      localStorage.setItem('email', email);
      var password = $('.password').val();
      localStorage.setItem('password', password);
      // console.log(name)
    })
  }

}
