import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from 'src/app/service/auth.service';
import { MoviesService } from 'src/app/service/movies.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  nuevoUsuario: Usuario = {
    name: '',
    password: '',
    avatar: ''
  };

  constructor(public movies: MoviesService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {

  }

  changeImage(fileInput: HTMLInputElement): void {
    if (!fileInput.files || fileInput.files.length === 0) {
      return;
    }
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', (e) => {
      this.nuevoUsuario.avatar = reader.result as string;
    });
  }

  /* registrarse() {
    this.authService.registro(this.nuevoUsuario).subscribe(
      () => this.router.navigate(['/auth', 'login']),
      error => console.log(error)
    );
  } */

}
