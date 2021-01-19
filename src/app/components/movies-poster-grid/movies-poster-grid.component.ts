import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../interfaces/movieShowtimes-response';
import { StarRatingComponent } from 'ng-starrating';

@Component({
  selector: 'app-movies-poster-grid',
  templateUrl: './movies-poster-grid.component.html',
  styleUrls: ['./movies-poster-grid.component.css']
})
export class MoviesPosterGridComponent implements OnInit {

  @Input() movies: Movie[];

  constructor(public moviesService: MoviesService ) { }

  ngOnInit(): void {
    // console.log(this.movies);
  }
}
