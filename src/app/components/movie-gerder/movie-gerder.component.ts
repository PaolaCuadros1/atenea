import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie';
import { MovieService } from '../../services/movie.service';//se
//import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-movie-gerder',
  templateUrl: './movie-gerder.component.html',
  styleUrls: ['./movie-gerder.component.css']
})
export class MovieGerderComponent implements OnInit {
  public genderComedia;
  public genderRomance;
  public genderAnime;
  public genderDocumental;
  public genderDrama;
  public genderAccion;

  public movie: Movie

  constructor(
    private MovieService: MovieService,
    //private _router: Router
  ) {
    this.movie = new Movie('', '', '', '', '', '', '', '');
  }


  ngOnInit() {
    let generos = ['Romance', 'Comedia', 'Drama', 'Anime', 'Acción', 'Documentales'];
    for (var i = 0; i < generos.length; i++) {
      this.MovieService.searchMovieByGender(generos[i]).subscribe(
        (response: any) => {
          //console.log(response.data, "---------> ", response.gender);
          switch (response.gender) {
            case 'Romance':
              this.genderRomance = response.data;
              break;
            case 'Comedia':
              this.genderComedia = response.data;
              break;
            case 'Drama':
              this.genderDrama = response.data;
              break;
            case 'Anime':
              this.genderAnime = response.data;
              break;
            case 'Acción':
              this.genderAccion = response.data;
              break;
            case 'Documentales':
              this.genderDocumental = response.data;
              break;
          }
        }
      )
    }
    
    console.log(this.genderRomance)

  }


}
