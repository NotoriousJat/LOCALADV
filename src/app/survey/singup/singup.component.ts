import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms'

declare var $: any;

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {
  readonly baseUrl = 'http://localhost:3000/singup';
  constructor(private http: HttpClient) { }
  next: any;
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
  userForm= new FormGroup({
    name: new FormControl( '' ),
    surname: new FormControl( '' ),
    email: new FormControl( '' ),
    password: new FormControl( '' ),
    confirm_password: new FormControl('')
  });
  onClick(){
    this.next = this.userForm;
    const userid = localStorage.getItem('id');
    const id = userid;
    const user = this.userForm.value;
    console.log(user)
    this.http.post(this.baseUrl,  {user,id} ).subscribe(); 
    // console.log(this.userForm.value)
  }
}
