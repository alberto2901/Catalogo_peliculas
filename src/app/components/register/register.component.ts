import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/service/movies.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: string;
  password: string;
  confirmPassword: string;

  constructor(public movies: MoviesService) { }

  ngOnInit(): void {

  }

  /* register() {
    const user = { email: this.email, password: this.password };
    this.movies.register(user).subscribe(data => {
      this.movies.setToken(data.token);
    });
  } */

}
