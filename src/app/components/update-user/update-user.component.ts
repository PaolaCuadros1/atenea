import { Component, OnInit } from '@angular/core';
import { UserService} from '../../services/usuario.service'
import { Usuario} from '../../model/usuario'
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})

export class UpdateUserComponent implements OnInit {
public usuarioActualizar:Usuario;
public archivoSubir: File;
public url: string;
public identidad
  constructor(
    private UserService:UserService,
    private _router: Router,

  ) { 
    this.url = UserService.url
  }

  ngOnInit() {
    this.usuarioActualizar = JSON.parse(localStorage.getItem("sesion"));
    this.identidad = this.UserService.obtenerNombreUsuario();

  }
  
  subirArchivo(fileInput: any) {
    this.archivoSubir = <File>fileInput.target.files[0];//recoger archivos seleccionados en el input
    // this.archivoSubir = <Array<File>>fileInput.target.files[0];

  }


  actualizarUsuario(){
    this.UserService.actualizarUsuario(this.usuarioActualizar._id,this.usuarioActualizar).subscribe(
      (response:any)=>{
        if(response.usuario){
          // this.actualizacionCorrecta = "Datos actualizados correctamente";
      /*     swal("", `Tus datos han sido actualizados correctamente!!`, "success"); */
          //alert(`Tus datos han sido actualizados correctamente!!`)
          localStorage.setItem("sesion",JSON.stringify(this.usuarioActualizar));
          this.identidad = this.UserService.obtenerNombreUsuario();

          if(!this.archivoSubir && this.identidad.imagen == ''){
         /*    swal("Oye!!", `No ingresaste ninguna imagen`, "info"); */
            //alert('No hay ninguna img')
          }else{
            //alert(`tu imagen es ${this.archivoSubir.name}`);
              this.UserService.cargarImagenUsuario(this.archivoSubir, this.usuarioActualizar._id)
              .subscribe((result: any)=>{
                  this.usuarioActualizar.imagen = result.imagen;
                  localStorage.setItem('sesion', JSON.stringify(this.usuarioActualizar));

                  //Mostrar la Imagen
                  let rutaImagen = this.url+'obtener-imagen-usuario/'+this.usuarioActualizar.imagen;
                  document.getElementById('mostrarImagen').setAttribute('src', rutaImagen);
                  document.getElementById('imgUsuario').setAttribute('src', rutaImagen);
              })
          }


          //////////////////////////////////////////////////////////////
        }else{
          // this.actualizacionCorrecta = "No se han podido actualizar sus datos, comuniquese con el administrador de la aplicacion";
          alert(`No fue posible actualizar tus datos`)
        }
      },error=>{
        if (error != null) {
          console.log(error)
        }
      }
    )
  }


}
