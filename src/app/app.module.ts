import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { UserService } from './services/usuario.service';
// importar servicio peliculas
import { MovieService } from './services/movie.service';
import { SafePipe } from './components/common/safe-url.component';

import { AppComponent } from './app.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { MenuComponent } from './components/menu/menu.component';
import { RedesComponent } from './components/redes/redes.component';
import { RegisterSongComponent } from './components/register-song/register-song.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { UpdateUserComponent} from './components/update-user/update-user.component';
import { LoginComponent } from './components/login/login.component';
import { UserAcountComponent } from './components/user-acount/user-acount.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import {FavoritosComponent} from './components/favoritos/favoritos.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { MovieGerderComponent } from './components/movie-gerder/movie-gerder.component';
import { Redes2Component } from './components/redes2/redes2.component';
import { ReproductorComponent } from './components/reproductor/reproductor.component';

//Acá deben agregar las rutas.
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'login', component: LoginComponent },
  { path: 'updateUser', component: UpdateUserComponent },
  { path: 'movieList', component: MovieListComponent },
  { path: 'movie-gender', component: MovieGerderComponent},
  { path: 'userAcount', component: UserAcountComponent },
  { path: 'movieList', component: MovieListComponent },
  { path: 'favoritos', component: FavoritosComponent},
  { path: 'login-admin', component: LoginAdminComponent },
  { path: 'user-acount', component: UserAcountComponent },
  { path: 'reproductor/:id', component: ReproductorComponent },
  { path: 'register-movie', component: RegisterSongComponent },
  { path: 'redes2', component: Redes2Component },
  { path: 'reproductor', component: ReproductorComponent },
  { path: 'redes', component: RedesComponent },
  //{path: 'main', component: MainComponent}, -> Ruta de ejemplo.
];

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    MenuComponent,
    RedesComponent,
    RegisterSongComponent,
    AboutusComponent,
    HomeComponent,
    FooterComponent,
    UpdateUserComponent,
    LoginComponent,
    MovieListComponent,
    MovieGerderComponent,
    UserAcountComponent,
    MovieListComponent,
    LoginAdminComponent,
    ReproductorComponent,
    SafePipe,
    Redes2Component,
    ReproductorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
