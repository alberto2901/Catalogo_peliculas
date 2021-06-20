import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  login(user: any): Observable<any> {
    return this.http.post("https://reqres.in/api/login", user);
  }

  register(user: any): Observable<any> {
    return this.http.post("https://reqres.in/api/register", user);
  }

  /* setToken(token: string) {
    this.cookies.set("token", token);
  }
  getToken() {
    return this.cookies.get("token");
  } */
}
