import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ListarmoviesComponent } from './components/list-movies/list-movies.component';
import { ResultmoviesComponent } from './components/result-movies/result-movies.component';
import { ValoracionesComponent } from './components/valoraciones/valoraciones.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: '', component: InicioComponent},
  { path: 'list-movies', component: ListarmoviesComponent},
  { path: 'list-movies/:id', component: ListarmoviesComponent},
  { path: 'result-movies', component: ResultmoviesComponent},
  { path: 'result-movies/:id', component: ResultmoviesComponent},
  { path: 'valoraciones', component: ValoracionesComponent},
  { path: 'contacta', component: ValoracionesComponent}, 
  { path: 'auth/login', component: LoginComponent},
  { path: 'auth/register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
