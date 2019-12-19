//Contiene la conexión con la api y cada ruta, iguamente traerá todos los datos que existan en la DB.


//Importar librerías internas de Angular:
import { Injectable } from '@angular/core'; //Inyectar el servicio a toda la aplicación de angular
import { HttpClient, HttpHeaders } from '@angular/common/http'; //Enviar o hacer peticiones a la api.

import { map } from 'rxjs/operators'; //rxjs -> Paquete de Angular que contiene operadores y nos va a permitir analizar un JSON.

import { Observable } from 'rxjs'; //Recoge las respuestas que envía un servidor.

@Injectable()

export class UserService {
  url = 'http://localhost:4000/api/';
  public identidad;

  //Vamos a crear un constructor que nos permita inicializar los métodos post, get, pud, delete
  constructor(
    private _http: HttpClient //Guarda el objeto httmCliente para poder tener acceso a los métodos get, post, put y delete
  ) { }

  registro(usuarioNuevo) {
    let params = JSON.stringify(usuarioNuevo);
    console.log("Llegooooo");
    console.log(params)
    let options = {
      headers: new HttpHeaders(
        { 'Content-Type': 'application/json' })
    };
    return this._http.post(
      this.url + "registro",
      params,
      options
    ).pipe(map(res => res));
  }


  //Vamos a crear el método de IniciarSesión
  iniciarSesion(usuarioLogeado){
    let params = JSON.stringify(usuarioLogeado);
    let options = { 
      headers: new HttpHeaders(
        { 'Content-Type': 'application/json'})
    };
    return this._http.post(
      this.url + "loginUsuario",
      params,
      options
    ).pipe(map(res => res)); //El (res => res) es para indicar que nos tiene que enviar una respuesta cuando se conecte 
    //al localhost/4000/api/loginUsuario
  }


  actualizarUsuario(id, usuarioActualizar) {
    let params = JSON.stringify(usuarioActualizar);
    let options = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json'
        })
    };
    return this._http.put(
      this.url + 'actualizar-usuario/' + id,
      params,
      options
    ).pipe(map(res => res));

  }
  cargarImagenUsuario(file: File, id) {
    var formData = new FormData();
    formData.append('imagen', file);
    return this._http.post(
      this.url + "subir-imagen-usuario/" + id,
      formData
    ).pipe(map(res => res));
  }

  obtenerNombreUsuario(){
    //En una variable llamada identidad estamos recogiendo los datos de inicio de sesión de nuestro usuario a partir
    //de localStorage
    let identidad = JSON.parse(localStorage.getItem('sesion'));

    //Lo siguiente que debemos hacer es validar si localStorage está vacío o tiene datos, si ha registrado nombre, etc...
    if(identidad != "undefined"){
      //Si es diferente de indefinido, es decir, si existen datos, entonces esta identidad va a ser igual a la 
      //variable que trae la sesión de localStorage
      this.identidad = identidad;
    }else{
      this.identidad = null;
    }
    return this.identidad;
  }

  agregarAFavoritos(IdPelicula, IdUsuario) {
    console.log('agregarAFavoritos ', IdPelicula + ' <-> ' + IdUsuario);
    return this._http.post(
      `${this.url}/addToFavorites/${IdPelicula}/${IdUsuario}`,
      {}
    ).pipe(map(res => res));
  }

  removerDeFavoritos(IdPelicula, IdUsuario) {
    console.log('removerDeFavoritos ', IdPelicula + ' <-> ' + IdUsuario);
    return this._http.delete(
      `${this.url}/removeFromFavorites/${IdPelicula}/${IdUsuario}`,
      {}
    ).pipe(map(res => res));
  }

  revisarSiEsFavorita(IdPelicula, IdUsuario) {
    return this._http.get(
      `${this.url}checkIfMovieIsFavorite/${IdPelicula}/${IdUsuario}`
    ).pipe(map(res => res));
  }

  cargarFavoritas(IdUsuario) {
    return this._http.get(
      `${this.url}favorites/${IdUsuario}`
    ).pipe(map(res => res));
  }
}

