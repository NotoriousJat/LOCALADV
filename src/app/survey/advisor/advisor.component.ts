import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-advisor',
  templateUrl: './advisor.component.html',
  styleUrls: ['./advisor.component.css']
})
export class AdvisorComponent implements OnInit {

  constructor() { }
  status: boolean = false;
  
  clickEvent(){
    // alert('ok')
    console.log(this);
      this.status = !this.status;      
      if(this.status == true){
        $('.nextBtttn').addClass('active'); 
      }else{
        $('.nextBtttn').removeClass('active'); 
      }
      
  }
  ngOnInit(): void {
  }

}
