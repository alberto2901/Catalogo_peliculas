import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyComponent } from './components/body/body.component';

import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { HttpClientModule } from '@angular/common/http';

import { ListarmoviesComponent } from './components/list-movies/list-movies.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ValoracionesComponent } from './components/valoraciones/valoraciones.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResultmoviesComponent } from './components/result-movies/result-movies.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchPipePipe } from './components/pipe/search-pipe.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    ListarmoviesComponent,
    InicioComponent,
    ValoracionesComponent,
    ResultmoviesComponent,
    LoginComponent,
    RegisterComponent,
    SearchPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    NgbModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    YouTubePlayerModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
