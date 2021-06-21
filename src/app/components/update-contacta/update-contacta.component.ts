import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

import { Movies } from 'src/app/models/movie';
import { MoviesService } from 'src/app/service/movies.service';

@Component({
  selector: 'app-update-contacta',
  templateUrl: './update-contacta.component.html',
  styleUrls: ['./update-contacta.component.css']
})
export class UpdateContactaComponent implements OnInit {

  listMovies: Movies[] = [];
  genMovies: Movies[] = [];
  gen: string[]=[]; 
  search: string = '';

  error: boolean;

  movie: Movies = {
    id: '0',
    titulo: '',
    fecha: '',
    imagen: '',
    calificacion: 0,
    imdb: '',
    tmdb: '',
    info: '',
    info2: '',
    genre: '',
    video: ''
  };

  edit: boolean = false;

  constructor(private _moviesService: MoviesService,private router: Router, config: NgbRatingConfig, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.getMovies();

    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getMovieById(id);
    this.edit = true;
  }

  getMovies() {
    this._moviesService.getMovies().subscribe(
      (data: Movies[]) => {
        console.log(data);
        this.listMovies = data;
        this.genMovies = this.listMovies;
      },
      (error) => {
        console.log(error);
      }
    );
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

  saveNewGame() {
    delete this.movie.id;
    this._moviesService.saveGame(this.movie)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/list-movies']);
        },
        err => console.error(err)
      )
  }

  updateGame() {
    this._moviesService.updateGame(this.movie.id, this.movie)
      .subscribe(
        res => { 
          console.log(res);
          this.router.navigate(['/list-movies']);
        },
        err => console.error(err)
      )
  }

}
