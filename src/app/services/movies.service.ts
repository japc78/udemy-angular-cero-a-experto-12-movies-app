import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MovieShowTimes } from '../interfaces/movieShowtimes-response';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private BASE_URL = 'https://api.themoviedb.org/3';
  private page = 1;


  constructor(private http: HttpClient) { }

  get params(): {} {
    return {
      api_key: 'fb35a100cdeccee771a59a11d76de09a',
      language: 'es-ES',
      page: this.page.toString()
    };
  }

  getMoviesShowTimes(): Observable<MovieShowTimes> {
    return this.http.get<MovieShowTimes>(
      `${this.BASE_URL}/movie/now_playing`,
      { params: this.params })
        .pipe(
          // Tap es parecido al map pero lo único que realiza es disparar un efecto secundario.
          // En resumen, ejecuta el código cada vez que el observable emite un valor, esta forma
          // cada vez que realiza la petición incrementa la pagina para la siguiente petición.
          tap( () => {
            this.page += 1;
            // console.log('Pagina: ' + this.page);
          })
        );
  }
}
