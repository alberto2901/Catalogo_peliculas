import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Usuario, UsuarioResponse } from '../models/usuario';
import { MoviesService } from './movies.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  logged$ = new ReplaySubject<boolean>(1);

  url = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  /* login(usuario: Usuario): Observable<void> {
    return this.http.post<TokenResponse>('auth/login', usuario).pipe(
      map(resp => {
        localStorage.setItem('token', resp.accessToken);
        this.logged$.next(true);
      })
    );
  }

  registro(usuario: Usuario): Observable<void> {
    return this.http.post<void>('auth/register', usuario);
  }

  logout() {
    localStorage.removeItem('token');
    this.logged$.next(false);
  } */
}
