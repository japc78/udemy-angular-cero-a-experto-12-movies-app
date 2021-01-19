import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/movieShowtimes-response';
import Swiper from 'swiper/bundle';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, AfterViewInit {

  @Input() movies: Movie[];
  public swiper: Swiper;

  constructor() { }

  ngOnInit(): void {
    // console.log(this.movies);
  }

  ngAfterViewInit(): void {
    this.swiper = new Swiper('.swiper-container', {
      loop: true,
    });
  }

  public onSlideNext(): void {
    this.swiper.slideNext();
  }

  public onSlidePreview(): void {
    this.swiper.slidePrev();
  }
}
