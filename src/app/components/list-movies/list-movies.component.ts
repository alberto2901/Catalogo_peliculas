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
  genMovies: Movies[] = [];
  gen: string[]=[]; 
  search: string = '';

  movies: any = [];

  constructor(private _moviesService: MoviesService, config: NgbRatingConfig) {
    
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
        this.genMovies = this.listMovies;
        this.movies = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  
  movieGenre = new FormControl();

  genreList: string[] = [
    'Terror', 
    'Comedia', 
    'Accion', 
    'Ciencia Ficcion', 
    'Slasher', 
    'Infantil', 
    'Belico', 
    'Suspense', 
    'Drama', 
    'Horror', 
    'Musical', 
    'Western', 
    'Animacion',
    'Comedia Romantica',
    'Fantasia',
    'Policiaco',
    'Aventura'
  ];


  filterGenre(){
    this.genMovies = [];
    
    let añadir = true;
    this.listMovies.forEach( p => {
      añadir = true;
        this.gen.forEach(g => {
            if(p.genre.includes(g) && añadir){
                añadir = true;
            }else{
                añadir = false;
            }
        })

        if(añadir){
            this.genMovies.push(p);
        }
    })

    console.log(this.genMovies);
    
  }

  deleteGame(id: string) {
    this._moviesService.deleteGame(id)
      .subscribe(
        res => {
          console.log(res);
          this.getMovies();
        },
        err => console.error(err)
      )
  }
  
}
