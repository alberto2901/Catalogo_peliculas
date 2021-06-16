import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

import { MoviesService } from 'src/app/service/movies.service';
import { Movies } from 'src/app/models/movie';

@Component({
  selector: 'app-result-movies',
  templateUrl: './result-movies.component.html',
  styleUrls: ['./result-movies.component.css'],
  providers: [NgbRatingConfig],
})
export class ResultmoviesComponent implements OnInit {
  movie: Movies;
  error: boolean;

  constructor(
    private _route: ActivatedRoute,
    private _moviesService: MoviesService,
    private config: NgbRatingConfig
  ) {
    this.config.max = 10;
    this.config.readonly = true;
  }

  ngOnInit(): void {
    let id = this._route.snapshot.paramMap.get('id');
    this.getMovieById(id);
  }

  getMovieById(id: string) {
    this._moviesService.getMovieById(id).subscribe(
      (data: Movies) => {
        this.error = false;
        this.movie = data;
      },
      (error) => {
        console.error(`No se ha encontrado la pelicula con el id ${id}`, error);
        this.error = true;
      }
    );
  }
}
