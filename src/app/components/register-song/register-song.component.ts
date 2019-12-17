import { Component, OnInit } from '@angular/core';
import { Movie } from '../../model/movie';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-register-song',
  templateUrl: './register-song.component.html',
  styleUrls: ['./register-song.component.css']
})
export class RegisterSongComponent implements OnInit {
  public peliculaRegistro: Movie;

  constructor(
    // se crea objeto de tipo MovieService
    private movieService: MovieService
  ) {
    this.peliculaRegistro = new Movie('', '', '', '', '', '', '', '');
  }

  ngOnInit() {
  }

  // se crea el metodo
  guardarPelicula() {
    this.movieService.registrarPelicula(this.peliculaRegistro).subscribe(
      // comunicacion metodo con el servicio 
      (response: any) => {
        console.log("holi");

        this.peliculaRegistro = response.movie;
        if (!this.peliculaRegistro._id) {
          alert("No se pudo realizar cargue de pelicula");
        } else {
          alert("pelicula guardada .... exitosamente");
          this.peliculaRegistro = new Movie('', '', '', '', '', '', '', '');
        }
      },
      error => {
        var errorMensaje = <any>error;
        if (errorMensaje != null) {
          console.log(error);
        }
      }
    );
  }


}
