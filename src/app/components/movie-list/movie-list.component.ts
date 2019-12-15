import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  public listMovies;
  constructor(
    private MovieService: MovieService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.MovieService.getListMovies().subscribe((result: any) => {
      this.listMovies = result.data
    });
  }

  removeMovie(idMovie){
    this.MovieService.removeMovie(idMovie).subscribe(
      (response:any) => {
        if (response.message === 'Eliminada'){
          this._router.routeReuseStrategy.shouldReuseRoute = () => false;
          this._router.onSameUrlNavigation = 'reload';
          this._router.navigate(['/movieList']);
          alert("Se eliminó correctamente.")
        }
      },
      error => {
        var errorMensaje = <any>error;

        if(errorMensaje != null){
          console.log(error);
        }
      }
    )
    console.log(idMovie)
  }

}
