import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  url = 'http://localhost:4000/api';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<any> {
    return this.http.get(`${this.url}/movies`);
  }

  getMovieById(id:string): Observable<any>{
    return this.http.get(`${this.url}/movie/${id}`);
  }
}
