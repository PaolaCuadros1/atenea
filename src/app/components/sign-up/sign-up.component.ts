import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../model/usuario';
import { UserService } from '../../services/usuario.service';

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
  ) {
    let allGenders = [ 'Romance', 'Comedia', 'Drama', 'Anime', 'Acción', 'Documentales'];
    this.genders = allGenders;
    this.usuarioRegistro = new Usuario('', '', '', '', '', [], '', '');
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
          // this.registroCorrecto = "El registro es correcto te puedes loguear con el email "+this.usuario.correo;

        }else{
          //alert(`Registro exitoso!!, ingrese con ${this.usuarioRegistro.correo}`);
          alert(`Por favor, ingresa con ${this.usuarioRegistro.correo}`);
          // this.registroCorrecto = "no se ha realizado el registro del usuario, consulte con soporte ";

          this.usuarioRegistro = new Usuario('', '', '', '', '', [], '', '');
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
