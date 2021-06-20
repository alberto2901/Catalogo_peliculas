import { Pipe, PipeTransform } from '@angular/core';
import { Movies } from 'src/app/models/movie';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(eventos: Movies[], filtro: string): Movies[] {
    return eventos.filter(
      e => e.titulo.toLowerCase().includes(filtro.toLowerCase())
    );
  }

}
