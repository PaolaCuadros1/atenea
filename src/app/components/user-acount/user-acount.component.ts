import { Component, OnInit } from '@angular/core';
import * as M from '../../../assets/materialize/js/materialize.js';
import { UserService } from '../../services/usuario.service'
import { Usuario } from '../../model/usuario'

@Component({
  selector: 'app-user-acount',
  templateUrl: './user-acount.component.html',
  styleUrls: ['./user-acount.component.css']
})
export class UserAcountComponent implements OnInit {
  options = {fullWidth: true, indicators: true};
  public identidad;
  constructor(
    private UserService: UserService,
  ) { }

  ngOnInit() {
    var elems = document.querySelectorAll('.carousel');
    var instance = M.Carousel.init(elems, this.options);
    this.identidad = this.UserService.obtenerNombreUsuario();
  }
}
