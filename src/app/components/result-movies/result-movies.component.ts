import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { DomSanitizer } from '@angular/platform-browser';
import { YouTubePlayerModule } from '@angular/youtube-player';

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
  listMovies: Movies[] = [];

  constructor(
    private _route: ActivatedRoute,
    private _moviesService: MoviesService,
    private config: NgbRatingConfig,
    private dom: DomSanitizer
  ) {

  }

  ngOnInit(): void {
    let apiLoaded = false;
    let id = this._route.snapshot.paramMap.get('id');
    this.getMovieById(id);

    if (!apiLoaded) {
      // This code loads the IFrame Player API code asynchronously, according to the instructions at
      // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      apiLoaded = true;
    }
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

  getEmbedUrl(idFilm: string){
    return this.dom.bypassSecurityTrustResourceUrl(idFilm);
  }
}
