import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()

export class MovieService {
  url = 'http://localhost:4000/api/';

  constructor(
    private _http: HttpClient
  ) { }

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

}