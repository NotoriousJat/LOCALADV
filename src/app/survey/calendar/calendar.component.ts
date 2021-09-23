import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import {
  NgbDateStruct,
  NgbCalendar,
  NgbDate,
} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import * as moment from 'moment';
declare var $: any;

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  styles: [
    `
      .custom-day {
        text-align: center;
        padding: 0.185rem 0.25rem;
        display: inline-block;
        height: 2rem;
        width: 2rem;
        color: #666666;
      }

      .custom-day.focused {
        background-color: #225563;
      }
      .custom-day.range,
      .custom-day:hover {
        background-color: #225563;
        color: white;
        border: 1px solid #225563;
        border-radius: 4px;
      }
      .custom-day.faded {
        background-color: #00beac;
        border: 1px solid #00beac;
        border-radius: 0px 8px 0px 8px;
      }
    `,
  ],
})
export class CalendarComponent {
  readonly baseUrl = 'http://localhost:3000/calendar';
  hoveredDate: NgbDate | null = null;
  selectedDate: any;
  fromDate: NgbDate;
  toDate: NgbDate | null = null;
  campaignOne: FormGroup;
  campaignTwo: FormGroup;
  minDate: Date;
  constructor(
    calendar: NgbCalendar,
    private http: HttpClient,
    private config: NgbDatepickerConfig
  ) {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();
    config.minDate = {
      year: today.getFullYear(),
      month: today.getMonth() + 1,
      day: today.getDate(),
    };
    //config.maxDate = { year: 2099, month: 12, day: 31 };
    config.outsideDays = 'hidden';

    this.campaignOne = new FormGroup({
      start: new FormControl(new Date(year, month, 13)),
      end: new FormControl(new Date(year, month, 16)),
    });

    this.campaignTwo = new FormGroup({
      start: new FormControl(new Date(year, month, 15)),
      end: new FormControl(new Date(year, month, 19)),
    });

    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 0);
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
      // console.log(date);
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      const userid = localStorage.getItem('id');
      var id = userid;
      const trip_start = localStorage.getItem('trip_start_date');
      var trip_start_date = trip_start;
      this.toDate = date;
      const end_date = this.toDate;
      const endjson = JSON.stringify(end_date);
      const endobj = JSON.parse(endjson);
      var trip_end_date = endobj.year + '/' + endobj.month + '/' + endobj.day;
      this.http
        .post(this.baseUrl, { trip_end_date, id, trip_start_date })
        .subscribe();
      // localStorage.setItem('dataSource', this.date);
    } else {
      this.toDate = null;
      this.selectedDate = date;
      this.fromDate = date;
      const trip_start_date = this.fromDate;
      const startjson = JSON.stringify(trip_start_date);
      const startobj = JSON.parse(startjson);
      var start_date =
        startobj.year + '/' + startobj.month + '/' + startobj.day;
      localStorage.setItem('trip_start_date', start_date);
      // this.http.post(this.baseUrl, { trip_start_date,id,trip_end_date }).subscribe();
    }
    $('.nextBtttn').addClass('active');
  }

  isHovered(date: NgbDate) {
    return (
      this.fromDate &&
      !this.toDate &&
      this.hoveredDate &&
      date.after(this.fromDate) &&
      date.before(this.hoveredDate)
    );
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return (
      date.equals(this.fromDate) ||
      (this.toDate && date.equals(this.toDate)) ||
      this.isInside(date) ||
      this.isHovered(date)
    );
  }

  nextClick() {
    // const date = {
    //   traveling_start_date: this.toDate,
    //   traveling_end_date: this.fromDate,
    // };
    // this.http.post(this.baseUrl, { date }).subscribe();
  }
  // export class CalendarComponent implements OnInit {

  ngOnInit(): void {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date();
  }
  //   selectToday() {

  //   }
  // }
}
