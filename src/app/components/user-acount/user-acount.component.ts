import { Component, OnInit } from '@angular/core';
import * as M from '../../../assets/materialize/js/materialize.js';
import { UserService } from "../../services/usuario.service";

@Component({
  selector: 'app-user-acount',
  templateUrl: './user-acount.component.html',
  styleUrls: ['./user-acount.component.css']
})

export class UserAcountComponent implements OnInit {
  movies = [];
  user = { _id: null };

  constructor(private UserService: UserService) { }

  async ngOnInit() {
    this.user = await this.UserService.obtenerNombreUsuario();
    this.loadMovies();
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
