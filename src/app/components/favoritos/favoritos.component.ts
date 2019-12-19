import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/usuario.service";

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {
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
