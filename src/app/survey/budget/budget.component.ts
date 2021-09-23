import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {
  readonly baseUrl = 'http://localhost:3000/budget';

  constructor(private http: HttpClient) { }
  next: any;
  toggleOn: boolean= false;
  ngOnInit(): void {
  }
  budgetForm= new FormGroup({
    budget: new FormControl( '' )
  });
  myFunction(){
    this.toggleOn = true;
  }
  clickFunction(budget: string){
    this.next = budget;
    this.toggleOn = false;
    const userid = localStorage.getItem('id');
    var id= userid;
    console.log(id);
    this.http.post(this.baseUrl,  {budget,id} ).subscribe();
    console.log(budget);
  }
  onSubmit(){
    const data = this.budgetForm.value;
    this.next = data;
    const userid = localStorage.getItem('id');
    var id= userid;
    const json = JSON.stringify(data);
  const obj = JSON.parse(json);
  let budget = obj.budget;
    this.http.post(this.baseUrl,  {budget,id} ).subscribe();
    console.log(this.budgetForm.value)
  }
}
