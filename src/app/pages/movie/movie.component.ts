import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { MovieDetails } from '../../interfaces/movieDetails-response';
import { Location } from '@angular/common';
import { Cast } from 'src/app/interfaces/movieCast-response';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  public movie: MovieDetails;
  public movieCast: Cast[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesService: MoviesService,
    private location: Location) { }

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params;

    this.moviesService.getMovieDetails(id)
      .subscribe(movie => {
        this.movie = movie;
        // console.log(this.movie);
      });

    this.moviesService.getMovieCast(id)
      .subscribe(cast => {
        this.movieCast = cast;
        console.log(this.movieCast);
      });
  }

  onBack(): void {
    // Para regresar a la pantalla anterior.
    this.location.back();
  }
}
