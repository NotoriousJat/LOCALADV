import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RandomService } from 'src/app/random.service';
declare var M: any;
/**
 * @title Toolbar overview
 */

@Component({
  selector: 'app-home-menu',
  templateUrl: './home-menu.component.html',
  styleUrls: ['./home-menu.component.css'],
})
export class HomeMenuComponent implements OnInit {
  constructor(private randomService: RandomService, private route:Router) {}

  ngOnInit(): void {}

  sendId() {
    this.randomService.sendRandom(this.generateRandom()).subscribe((response: any)=> {
      let id = response; var Id = id.id; console.log(Id)
    localStorage.setItem('id', JSON.stringify(Id));
    }
      );
  
    this.route.navigate(['/advisor']);
  }

  generateRandom() {
    return Math.floor(Math.random() * 100000000);
  }
}
