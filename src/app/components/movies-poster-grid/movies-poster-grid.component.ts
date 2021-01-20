import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../interfaces/movieShowtimes-response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies-poster-grid',
  templateUrl: './movies-poster-grid.component.html',
  styleUrls: ['./movies-poster-grid.component.css']
})
export class MoviesPosterGridComponent implements OnInit {

  @Input() movies: Movie[];

  constructor(private router: Router ) { }

  ngOnInit(): void {
    // console.log(this.movies);
  }

  onMovieClick(movie: Movie): void {
    this.router.navigate(['/movie', movie.id]);
  }
}
