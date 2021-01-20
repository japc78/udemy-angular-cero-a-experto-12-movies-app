import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../interfaces/movieShowtimes-response';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {

  public movies: Movie[] = [];
  public text: string;

  constructor(
    private activateRoute: ActivatedRoute,
    private moviesService: MoviesService) { }

  ngOnInit(): void {

    this.activateRoute.params
      .subscribe( params => {
        // console.log(params.text);
        this.text = params.text;
        this.moviesService.findMovieForTitle(this.text)
          .subscribe(movies => {
            this.movies = movies;
            // console.log(movies);
          });
      });
  }

}
