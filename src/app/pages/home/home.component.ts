import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../interfaces/movieShowtimes-response';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public movies: Movie[] = [];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.getMoviesShowTimes();
  }

  private getMoviesShowTimes(): Movie[] {
    this.moviesService.getMoviesShowTimes()
    .subscribe(resp => {
      this.movies = resp.results;
    });
    return this.movies;
  }
}
