import { Component, OnInit } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormControl } from '@angular/forms';

import { Movies } from 'src/app/models/movie';
import { MoviesService } from 'src/app/service/movies.service';
@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css'],
  providers: [NgbRatingConfig]
})
export class ListarmoviesComponent implements OnInit {
  listMovies: Movies[] = [];

  constructor(private _moviesService: MoviesService, config: NgbRatingConfig) {
    config.max = 10;
    config.readonly = true;
  }
  
  ngOnInit(): void {
    this.getMovies();
    /* this.filterGenre(); */
  }

  getMovies() {
    this._moviesService.getMovies().subscribe(
      (data: Movies[]) => {
        console.log(data);
        this.listMovies = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  
  movieGenre = new FormControl();

  genreList: string[] = ['Terror', 'Comedia', 'Accion', 'Ciencia Ficcion', 'Slasher', 'Infantil', 'Belico', 'Suspense'];


  filterGenre(array){
    const result = array.filter(array == 'Terror');
  }
  /* filterGenre(arrayMovies){
    const result = arrayMovies.filter(arrayMovies. => word.length > 6);

    console.log(result);
  } */
}
