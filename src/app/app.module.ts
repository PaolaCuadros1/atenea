import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';

//Acá deben agregar las rutas.
const appRoutes: Routes = [
  //{path: 'main', component: MainComponent}, -> Ruta de ejemplo.
];

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
