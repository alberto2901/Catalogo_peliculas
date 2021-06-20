import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/service/movies.service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(public movies: MoviesService) { }

  ngOnInit(): void {
  }

  /* login() {
    const user = { email: this.email, password: this.password };
    this.movies.login(user).subscribe(data => {
      this.movies.setToken(data.token);
    });
  } */

}
