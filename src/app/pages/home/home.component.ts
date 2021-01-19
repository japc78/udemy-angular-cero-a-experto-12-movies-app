import { Component, HostListener, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../interfaces/movieShowtimes-response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public moviesSlideShow: Movie[] = [];
  public movies: Movie[] = [];

  // Para capturar el scrolll y asi lanzar una petición get para cargar mas películas antes
  // de que llegue al final del scroll
  // https://angular.io/api/core/HostListener
  // Escucha eventos propios del host
  // En este caso, escucha el objeto global windows y concreto del windows el scroll
  // [] se indica los argumentos
  // El metodo onScroll se disparara cada vez que se haga scroll.
  @HostListener('window: scroll')
  onScroll(): void {
    // De esta manera se captura la posición del scroll en su punto mas alto, es decir mas abajo.
    // Se realiza con dos opciones porque hay navegadores que la primera opción muestra undefined
    const scrollPosition = (document.documentElement.scrollTop || document.body.scrollTop) + 1500;
    const scrollMax = (document.documentElement.scrollHeight || document.body.scrollHeight);
    console.log(scrollPosition, scrollMax);

    // Si esta cargando
    if (this.moviesService.loading) {return; }

    if (scrollPosition > scrollMax) {
      this.moviesService.getMoviesShowTimes()
      .subscribe( movies => {
        this.movies.push(...movies);
      });
    }
  }

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getMoviesShowTimes()
      .subscribe( movies => {
        this.moviesSlideShow = movies;
        this.movies = movies;
      });
  }
}
