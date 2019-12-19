import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../model/usuario';
import { UserService } from '../../services/usuario.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  genders: string[];
  public gendersSaved: String[];
  public usuarioRegistro: Usuario;
  constructor(
    private usuarioService : UserService,
    private _router: Router
  ) {
    let allGenders = [ 'Romance', 'Comedia', 'Drama', 'Anime', 'Acción', 'Documentales'];
    this.genders = allGenders;
    this.usuarioRegistro = new Usuario('', '', '', '', '', [], [], '', '');
    this.gendersSaved = [];
  }

  ngOnInit() {
  }

  registrarUsuario(){
    this.usuarioService.registro(this.usuarioRegistro).subscribe(
      (response:any) => {
        this.usuarioRegistro = response.usuario;

        if(!this.usuarioRegistro._id){
          alert("Error al registrarse");
        }else{
          alert(`Por favor, ingresa con ${this.usuarioRegistro.correo}`);
          this.usuarioRegistro = new Usuario('', '', '', '', '', [], [], '', '');
          this._router.navigate(['/login']) // wait!!
        }
      },
      error => {
        var errorMensaje = <any>error;

        if(errorMensaje != null){
          console.log(error);
        }
      }
    );
  }

  

  saveGenders(event, gender){
    const target = event.target;
    const i = this.usuarioRegistro.generos.indexOf(gender);
    if (i < 0 && target.checked) {
      this.usuarioRegistro.generos.push(gender);
    } else if (i >= 0 && !target.checked) {
      this.usuarioRegistro.generos.splice(i, 1);
    }
  }

}
