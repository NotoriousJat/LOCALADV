import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import {CounterService} from './../../counter.service'
declare var $: any;

@Component({
  selector: 'app-traveling',
  templateUrl: './traveling.component.html',
  styleUrls: ['./traveling.component.css'],
})
export class TravelingComponent implements OnInit {
  readonly baseUrl = 'http://localhost:3000/traveling';
  toggleClass: boolean = false;
  selectedItem: string;
  toggleOn: boolean= false;
  adultQuantity: number = 0;
  teenQuantity: number = 0;
  kidQuantity: number = 0;
  seniorQuantity: number = 0;
  constructor(private http: HttpClient) {}

  clickEvent(travelling_with_id: any) {
    this.selectedItem = travelling_with_id;
      this.toggleOn = true;
      localStorage.setItem('u2', travelling_with_id);
      localStorage.setItem('travelling_with_id', travelling_with_id);

    // console.log(travelling_with_id);
  }
  clickFunction(travelling_with_id: any){
    this.selectedItem = travelling_with_id;
    this.toggleOn = false;
  localStorage.setItem('u2', travelling_with_id);
  const userid = localStorage.getItem('id');
  var id = userid;
  console.log(id);
  this.http.post(this.baseUrl, { travelling_with_id, id }).subscribe();
  console.log(travelling_with_id);

  }
  onClick(e: HTMLElement) {
    console.log(e.id, e.className);
  }
  travelForm= new FormGroup({
    adult: new FormControl( '' ),
    kid: new FormControl( '' ),
    teen: new FormControl( '' ),
    senior: new FormControl( '' )
  });
  
  ngOnInit(): void {
  }
  i=0;
  plusAdult(){
    if(this.i != 50){
    this.i++;
    this.adultQuantity = this.i;}
  }
  subAdult(){
    if(this.i != 0){
      this.i--;
      this.adultQuantity= this.i;
    }
  }
  k=0;
  plusTeen(){
    if(this.k != 50){
    this.k++;
    this.teenQuantity = this.k;}
  }
  subTeen(){
    if(this.k != 0){
      this.k--;
      this.teenQuantity= this.k;
    }
  }
  j=0;
  plusKid(){
    if(this.j != 50){
    this.j++;
    this.kidQuantity = this.j;}
  }
  subKid(){
    if(this.j != 0){
      this.j--;
      this.kidQuantity= this.j;
    }
  }
  l=0;
  plusSenior(){
    if(this.l != 50){
      this.l++;
      this.seniorQuantity = this.l;}
  }
  subSenior(){
    if(this.l != 0){
      this.l--;
      this.seniorQuantity= this.l;
    }
  }
  click(){
    var result = [
      (this.i), (this.k),(this.j ),(this.l)];
      console.log(result);
    const travelling_id = localStorage.getItem('travelling_with_id');
  var travelling_with_id = travelling_id;
  console.log(travelling_with_id);
    const userid = localStorage.getItem('id');
    var id = userid;
    console.log(id);
    this.http.post(this.baseUrl, { travelling_with_id, id, result }).subscribe();
    console.log(result);
  }
}
