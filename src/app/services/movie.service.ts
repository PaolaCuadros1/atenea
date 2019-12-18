//Importar librerías internas de Angular:
import { Injectable } from '@angular/core'; //Inyectar el servicio a toda la aplicación de angular
import { HttpClient, HttpHeaders } from '@angular/common/http'; //Enviar o hacer peticiones a la api.

import { map } from 'rxjs/operators'; //rxjs -> Paquete de Angular que contiene operadores y nos va a permitir analizar un JSON.

import { Observable } from 'rxjs'; //Recoge las respuestas que envía un servidor.
// se injecta el servicio en toda la aplicacion
@Injectable()
export class MovieService{
url = 'http://localhost:4000/api/';
//   public identidad;

  //Vamos a crear un constructor que nos permita inicializar los métodos post, get, pud, delete
  constructor(
    private _http: HttpClient //Guarda el objeto httmCliente para poder tener acceso a los métodos get, post, put y delete
  ) { }

  registrarPelicula(peliculaNueva){
    let params = JSON.stringify(peliculaNueva);
    console.log("Llegooooo");
    console.log(params)
    let options = {
      headers: new HttpHeaders(
        { 'Content-Type': 'application/json' })
    };
    return this._http.post(
      this.url + "saveMovie",
      params,
      options
    ).pipe(map(res => res));
  }
  
  getListMovies() {
    return this._http.get(
      this.url + 'getAllMovies'
    ).pipe(map(res => res));
  }

  removeMovie(idMovie) {
    return this._http.delete(
      this.url + 'removeMovie/'+idMovie
    ).pipe(map(res => res));
  }
  
  searchMovieByGender(gender){
    console.log("----------------------------------->", gender)
    return this._http.get(
      this.url + '/getMovieByGender/'+gender,
    ).pipe(map(res => res));
  }

  getMovie(idMovie) {
    return this._http.get(
      this.url + 'movie/' + idMovie
    ).pipe(map(res => res));
  }
}