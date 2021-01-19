import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'poster'
})
export class PosterPipe implements PipeTransform {

  baseUrl = 'https://image.tmdb.org/t/p/w500';

  transform(poster: string ): string {

    if (poster) {
      return `${this.baseUrl}${poster}`;
    } else {
      return `./assets/no-image.jpg`;
    }
  }
}
