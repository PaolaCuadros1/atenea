import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MovieService } from "../../services/movie.service";

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.css']
})
export class ReproductorComponent implements OnInit {
  movie = {};
  idMovie = null;

  constructor(
      private MovieService: MovieService,
      private route: ActivatedRoute
    ) {}

  ngOnInit() {
    this.idMovie = this.route.snapshot.paramMap.get("id");
    if (this.idMovie) {
      this.loadMovie(this.idMovie);
    }
  }

  /*play(e) {
    e.preventDefault();
    document.getElementById('sipnosis-movie').style.display = 'none';

    const video = document.getElementById('movie');
    if (video && video.src) {
      video.src += '?autoplay=1';
    }
  }*/

  loadMovie(idMovie) {
    this.MovieService.getMovie(idMovie).subscribe(
      (response:any) => {
        console.log(response);
        this.movie = response.data;
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
