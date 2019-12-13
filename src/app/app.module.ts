import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { UserService } from './services/usuario.service';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { RedesComponent } from './components/redes/redes.component';
import { RegisterSongComponent } from './components/register-song/register-song.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { UpdateUserComponent} from './components/update-user/update-user.component';
import { LoginComponent } from './components/login/login.component';

//Acá deben agregar las rutas.
const appRoutes: Routes = [
  //{path: 'updateUser', component:UpdateUserComponent}
{path: 'aboutus', component:AboutusComponent}  //acá agregué la ruta
  //{path: 'main', component: MainComponent}, -> Ruta de ejemplo.
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RedesComponent,
    RegisterSongComponent,
    AboutusComponent,
    HomeComponent,
    FooterComponent,
    UpdateUserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
