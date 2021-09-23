import { Component, OnInit, } from '@angular/core';
import { Injectable } from '@angular/core';
import {NgbDateStruct, NgbCalendar, NgbDate} from '@ng-bootstrap/ng-bootstrap';
import {FormGroup, FormControl} from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  styles: [`
    .custom-day {
      text-align: center;
      padding: 0.185rem 0.25rem;
      display: inline-block;
      height: 2rem;
      width: 2rem;
      color:#666666;
    }
    
    .custom-day.focused {
      background-color: #225563;
      
    }
    .custom-day.range, .custom-day:hover {
      background-color: #225563;
      color: white;
      border:1px solid #225563;
      border-radius:4px  ;
      
    }
    .custom-day.faded {
      background-color: #00BEAC;
      border:1px solid #00BEAC;
      border-radius:0px 8px 0px 8px;;
      
    }
    
  `]
})

export class CalendarComponent {

  hoveredDate: NgbDate | null = null;

  fromDate: NgbDate;
  toDate: NgbDate | null = null;
  campaignOne: FormGroup;
  campaignTwo: FormGroup;

  constructor(calendar: NgbCalendar) {

    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();

    this.campaignOne = new FormGroup({
      start: new FormControl(new Date(year, month, 13)),
      end: new FormControl(new Date(year, month, 16))
    });

    this.campaignTwo = new FormGroup({
      start: new FormControl(new Date(year, month, 15)),
      end: new FormControl(new Date(year, month, 19))
    });

    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 0);
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
      // console.log(date);
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
      // console.log(date);
      // localStorage.setItem('dataSource', this.date);
    } else {
      this.toDate = null;
      this.fromDate = date;
      // console.log(date);
    }
    $('.nextBtttn').addClass('active'); 
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  }
}
// export class CalendarComponent implements OnInit {
  
//   ngOnInit(): void {
//   }
//   selectToday() {
   
//   }
// }


