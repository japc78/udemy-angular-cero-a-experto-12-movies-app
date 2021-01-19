import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { MovieShowTimes, Movie } from '../interfaces/movieShowtimes-response';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private BASE_URL = 'https://api.themoviedb.org/3';
  private page = 1;
  public loading = false;


  constructor(private http: HttpClient) { }

  get params(): {} {
    return {
      api_key: 'fb35a100cdeccee771a59a11d76de09a',
      language: 'es-ES',
      page: this.page.toString()
    };
  }

  getMoviesShowTimes(): Observable<Movie[]> {

    if (this.loading) {
      // of transforma a un observable
      return of([]);
    }

    this.loading = true;
    return this.http.get<MovieShowTimes>(
      `${this.BASE_URL}/movie/now_playing`,
      { params: this.params })
        .pipe(
          map(resp => resp.results),
          // Tap es parecido al map pero lo único que realiza es disparar un efecto secundario.
          // En resumen, ejecuta el código cada vez que el observable emite un valor, esta forma
          // cada vez que realiza la petición incrementa la pagina para la siguiente petición.
          tap( () => {
            this.page += 1;
            this.loading = false;
            // console.log('Pagina: ' + this.page);
            // console.log('loading...');
          })
        );
  }

  //https://api.themoviedb.org/3/search/movie?api_key=fb35a100cdeccee771a59a11d76de09a&language=en-US&page=1&include_adult=false
  findMovieForTitle( query: string): Observable<Movie[]> {
    // Cambiamos la pagina sin mutar el objeto de params
    const params = { ...this.params, page: '1', query};
    // console.log(params);

    return this.http.get<MovieShowTimes>(`${this.BASE_URL}/search/movie`, { params })
      .pipe( map(resp => resp.results) );
  }
}
