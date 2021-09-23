import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-signupstep2',
  templateUrl: './signupstep2.component.html',
  styleUrls: ['./signupstep2.component.css']
})
export class Signupstep2Component implements OnInit {
  readonly baseUrl = 'http://localhost:3000/signupstep2';
  next: number;
  check = false;
  constructor(private http: HttpClient) { }
  bulk(e: any){
    if(e.target.checked == true){
      this.check=true;
    }else{
      this.check=false;
    }
  }
  ngOnInit(): void {
  }
  userForm= new FormGroup({
    phone_number: new FormControl( '' ),
  });
  onClick(){
    this.next = this.userForm.value;
    this.http.post(this.baseUrl,  this.userForm.value ).subscribe(); 
    console.log(this.userForm.value)
  }

}
