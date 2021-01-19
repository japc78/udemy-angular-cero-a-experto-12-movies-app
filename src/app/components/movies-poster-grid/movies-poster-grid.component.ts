import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../interfaces/movieShowtimes-response';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movies-poster-grid',
  templateUrl: './movies-poster-grid.component.html',
  styleUrls: ['./movies-poster-grid.component.css']
})
export class MoviesPosterGridComponent implements OnInit {

  @Input() movies: Movie[];
  baseUrl = 'https://image.tmdb.org/t/p/w500';

  constructor(public moviesService: MoviesService ) { }

  ngOnInit(): void {
    console.log(this.movies);
  }
}
