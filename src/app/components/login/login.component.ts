import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../model/usuario';
import { UserService } from '../../services/usuario.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public identidad;
  public login: Usuario;

  constructor(
    private usuarioService: UserService
  ) { 
    this.login = new Usuario('', '', '', '', '', 'ROLE_USER', '');
   }

  ngOnInit() {
  }

  //Crear la lógica del método loginUsuario() que va a consumir el servicio iniciarSesion
  loginUsuario(){
    //Acceder al servicio iniciarSesión
    this.usuarioService.iniciarSesion(this.login).subscribe((response: any) => {
      let usuario = response.usuario;
      this.login = usuario;
      if(this.login){
        let usuarioLogueado = new Usuario(
          this.login._id,
          this.login.nombre,
          this.login.apellido,
          this.login.correo,
          this.login.contrasena,
          this.login.rol,
          this.login.imagen
        )
        //Creamos el objeto sesión en localStorage
        //Al crear un localStorage.setItem() él nos va a pedir dos parámetros: el primero es el nombre del objeto
        // y el segundo es el valor de dicho objeto 
        localStorage.setItem("sesion", JSON.stringify(usuarioLogueado));
        //Consumir el servicio de obtenerNombreUsuario()
        this.identidad = this.usuarioService.obtenerNombreUsuario();
        alert(`Hola ${this.identidad.nombre}!! Bienvenido@`);
        console.log(localStorage.getItem("Sesion"));
        //Vamos a inidicarle al sistema que cuando el usuario inicie sesión lo lleve directamente a su cuenta
        //Para eso creamos un manejador de ruta que redireccione al usuario a la cuenta una vez haya iniciado
        //sesión correctamente
        //this._router.navigate(['/account']);
      }else{
        alert("Usuario no identificado");
      }
    },error => {
      if(error != null){
        console.log(error);
      }
    }
    )
  }

}
