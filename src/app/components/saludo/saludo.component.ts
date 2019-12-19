import { Component, OnInit } from '@angular/core';
import { Usuario } from "../../model/usuario";
import { UserService } from '../../services/usuario.service';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { typeWithParameters } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {
  public url: String;
  public identidad;
  constructor(
    private usuarioService: UserService,
    private _router: Router) {
    this.url=usuarioService.url;
  }

  ngOnInit() {
    this.identidad = this.usuarioService.obtenerNombreUsuario();
  }

  cerrarSesion(){
    this._router.navigate(['']);
  }

}
