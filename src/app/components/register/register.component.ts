import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { MoviesService } from 'src/app/service/movies.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  nuevoUsuario: Usuario = {
    id: 0,
    name: '',
    password: '',
    avatar: ''
  };

  constructor(public movies: MoviesService, private router: Router) { }

  ngOnInit(): void {

  }

  /* registrarse() {
    this.movies.register(this.nuevoUsuario).subscribe(
      () => this.router.navigate(['/auth', 'login']),
      error => console.log(error)
    );
  } */

  register() {
    delete this.nuevoUsuario.id;
    this.movies.register(this.nuevoUsuario)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/']);
        },
        err => console.error(err)
      )
  }

}
