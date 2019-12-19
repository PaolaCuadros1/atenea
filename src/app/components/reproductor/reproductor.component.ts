import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MovieService } from "../../services/movie.service";
import { UserService } from "../../services/usuario.service";

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.css']
})
export class ReproductorComponent implements OnInit {
  movie = {};
  user = { _id: null, favoriteMovies: [] };
  idMovie = null;
  isFavorite = false;

  constructor(
      private MovieService: MovieService,
      private UserService: UserService,
      private route: ActivatedRoute
    ) {}

  async ngOnInit() {
    this.user = await this.UserService.obtenerNombreUsuario();
    this.idMovie = this.route.snapshot.paramMap.get("id");
    if (this.idMovie) {
      this.loadMovie();
    }
  }

  addToFavorites() {
    if (this.user) {
      this.isFavorite = true;
      this.UserService.agregarAFavoritos(this.idMovie, this.user._id).subscribe(
        (response:any) => {
          this.user = this.UserService.obtenerNombreUsuario();
        },
        error => {
          this.isFavorite = false;
          var errorMensaje = <any>error;

          if(errorMensaje != null){
            console.log(error);
          }
        }
      )
    }
  }

  removeFromFavorites() {
    if (this.user) {
      this.UserService.removerDeFavoritos(this.idMovie, this.user._id).subscribe(
        (response:any) => {
          this.user = this.UserService.obtenerNombreUsuario();
          this.isFavorite = false;
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
  
  checkIfIsFavorite() {
    if (this.idMovie) {
      this.UserService.revisarSiEsFavorita(this.idMovie, this.user._id).subscribe(
        (response:any) => {
          console.log('checkIfIsFavorite ', response);
          this.isFavorite = true;
        },
        error => {
          console.error('Error check if is favorite ', error);
          var errorMensaje = <any>error;
  
          if(errorMensaje != null){
            console.log(error);
          }
        }
      )
    }
  }

  loadMovie() {
    this.MovieService.getMovie(this.idMovie).subscribe(
      (response:any) => {
        console.log(response);
        this.movie = response.data;
        this.checkIfIsFavorite();
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
