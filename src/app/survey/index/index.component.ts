import { Component, OnInit, NgModule } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {
  title = 'ng-carousel-demo';
  images = [
    {title: 'Plan your tours in a few clicks optimizing your time.And yes, at the best price.', src: "/assets/img/map_illu.svg"},
    {title: 'We Will accompany you during your trip with real time notification, and with all the help you need. Maps, opinions and all the information regarding your activities.',  src: "/assets/img/compass_illu.svg"},
    {title: 'Enjoy free wifi during your trip. to enjoy your experience to the max, we will give you free internet during its duration.',  src: "/assets/img/wifi_illu.svg"}
  ];
  constructor(config: NgbCarouselConfig) {
    config.interval = 4000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {
  }

}
