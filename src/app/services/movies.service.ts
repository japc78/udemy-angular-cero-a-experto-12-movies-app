import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieShowTimes } from '../interfaces/movieShowtimes-response';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getMoviesShowTimes(): Observable<MovieShowTimes> {
    return this.http.get<MovieShowTimes>('https://api.themoviedb.org/3/movie/now_playing?api_key=fb35a100cdeccee771a59a11d76de09a&language=es-ES&page=1');
  }
}
