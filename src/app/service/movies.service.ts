import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movies } from '../models/movie';
import { Usuario } from '../models/usuario';
/* import { CookieService } from "ngx-cookie-service"; */

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  url = 'http://localhost:3000/api';
  
  constructor(private http: HttpClient, /* private cookies: CookieService */) {}

  getMovies(): Observable<any> {
    return this.http.get(`${this.url}/peliculas`);
  }

  getMovieById(id:string): Observable<any>{
    return this.http.get(`${this.url}/peliculas/${id}`);
  }

  deleteGame(id: string) {
    return this.http.delete(`${this.url}/peliculas/${id}`);
  }

  saveGame(film: Movies) {
    return this.http.post(`${this.url}/peliculas`, film);
  }

  register(user: Usuario) {
    return this.http.post(`${this.url}/usuario`, user);
  }

  updateGame(id: string|number, updatedGame: Movies): Observable<any> {
    return this.http.put(`${this.url}/peliculas/${id}`, updatedGame);
  }

  /* setToken(token: string) {
    this.cookies.set("token", token);
  }
  getToken() {
    return this.cookies.get("token");
  } */
}
