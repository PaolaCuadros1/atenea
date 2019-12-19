import { Component, OnInit } from '@angular/core';
import * as M from '../../../assets/materialize/js/materialize.js';
import { UserService } from "../../services/usuario.service";
import { Usuario } from '../../model/usuario'

@Component({
  selector: 'app-user-acount',
  templateUrl: './user-acount.component.html',
  styleUrls: ['./user-acount.component.css']
})

export class UserAcountComponent implements OnInit {
  movies = [];
  user = { _id: null };
  options = {fullWidth: true, indicators: true};
  public identidad;
  constructor(private UserService: UserService) { }

  async ngOnInit() {
    this.user = await this.UserService.obtenerNombreUsuario();
    this.loadMovies();
    var elems = document.querySelectorAll('.carousel');
    var instance = M.Carousel.init(elems, this.options);
    this.identidad = this.UserService.obtenerNombreUsuario();
  }

  loadMovies() {
    this.UserService.cargarFavoritas(this.user._id).subscribe(
      (response:any) => {
        console.log('loadMovies ', response);
        this.movies = response.data;
      },
      error => {
        var errorMensaje = <any>error;

        if(errorMensaje != null){
          console.log(error);
        }
      }
    )
  }
}