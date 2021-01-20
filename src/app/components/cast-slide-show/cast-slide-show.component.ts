import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { Cast } from '../../interfaces/movieCast-response';
import Swiper from 'swiper/bundle';

@Component({
  selector: 'app-cast-slide-show',
  templateUrl: './cast-slide-show.component.html',
  styleUrls: ['./cast-slide-show.component.css']
})
export class CastSlideShowComponent implements OnInit, AfterViewInit {

  @Input() cast: Cast[];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 5.3,
      freeMode: true,
      spaceBetween: 15
    });
    console.log(this.cast);
  }
}
