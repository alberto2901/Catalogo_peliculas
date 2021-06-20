import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/models/movie';
import { MoviesService } from 'src/app/service/movies.service';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-valoraciones',
  templateUrl: './valoraciones.component.html',
  styleUrls: ['./valoraciones.component.css'],
  providers: [NgbRatingConfig]
})
export class ValoracionesComponent implements OnInit {

  listMovies: Movies[] = [];
  genMovies: Movies[] = [];
  gen: string[]=[]; 
  search: string = '';

  constructor(private _moviesService: MoviesService, config: NgbRatingConfig) { 
    
  }

  ngOnInit(): void {
    this.getMovies();
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
}
