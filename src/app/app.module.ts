import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { UserService } from './services/usuario.service';

import { AppComponent } from './app.component';
import { UpdateUserComponent} from './components/update-user/update-user.component';
import { LoginComponent } from './components/login/login.component';

//Acá deben agregar las rutas.
const appRoutes: Routes = [
  //{path: 'updateUser', component:UpdateUserComponent}

  //{path: 'main', component: MainComponent}, -> Ruta de ejemplo.
];

@NgModule({
  declarations: [
    AppComponent,
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
