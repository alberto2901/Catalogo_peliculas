import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from 'src/app/service/auth.service';
import { MoviesService } from 'src/app/service/movies.service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = {
    name: '',
    password: ''
  };
  error = false;

  constructor(public movies: MoviesService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    /* const userData = {
      username: '',
      password: '123456'
    };

    this.authSvc.login(userData).subscribe((res) => console.log('Login')); */
  }

  /* login() {
    this.authService.login(this.usuario).subscribe(
      () => this.router.navigate(['/']),
      error => this.error = true
    );
  } */

}
