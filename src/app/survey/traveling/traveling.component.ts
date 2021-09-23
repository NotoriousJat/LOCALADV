import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-traveling',
  templateUrl: './traveling.component.html',
  styleUrls: ['./traveling.component.css']
})
export class TravelingComponent implements OnInit {
  toggleClass: boolean = false;
  constructor() { }

  clickEvent(data: any){
    // console.log(this);
    localStorage.setItem('u2', data);
    
    // console.log(localStorage.getItem('u2'));
    // this.addClass('')
  }
  onClick(e:HTMLElement){
      console.log(e.id, e.className);
  }
  ngOnInit(): void {
    // $('.next-btn').click(function(){

    // }
    // $('.caption').click(() =>{
    //   $(this).addClass('caption-active');
    //   console.log("click");
    // })


  }

}
