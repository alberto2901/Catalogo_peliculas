import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  nombre: string;
  password: string;
  confirmPassword: string;

  constructor() { }

  ngOnInit(): void {

  }

  register() {
    console.log(this.nombre);
    console.log(this.password);
  }

}
