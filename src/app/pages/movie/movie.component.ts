import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { MovieDetails } from '../../interfaces/movieDetails-response';
import { Location } from '@angular/common';
import { Cast } from 'src/app/interfaces/movieCast-response';
import { combineAll } from 'rxjs/operators';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  public movie: MovieDetails;
  public movieCast: Cast[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesService: MoviesService,
    private location: Location,
    private router: Router) { }

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params;


    combineLatest([
      this.moviesService.getMovieDetails(id),
      this.moviesService.getMovieCast(id)])
      // con desestructuracion.
      .subscribe(([ movie, cast ]) => {
        if (!movie) {
          this.router.navigateByUrl('/home');
          return;
        }
        this.movie = movie;
        this.movieCast = cast.filter( actor =>  actor.profile_path != null);
      });


    // this.moviesService.getMovieDetails(id)
    //   .subscribe(movie => {
    //     if (!movie) {
    //       this.router.navigateByUrl('/home');
    //       return;
    //     }
    //     this.movie = movie;
    //     // console.log(this.movie);
    //   });

    // this.moviesService.getMovieCast(id)
    //   .subscribe(cast => {
    //     if (!cast) {
    //       return;
    //     }
    //     this.movieCast = cast.filter( actor =>  actor.profile_path != null);
    //     // console.log(this.movieCast);
    //   });
  }

  onBack(): void {
    // Para regresar a la pantalla anterior.
    this.location.back();
  }
}
