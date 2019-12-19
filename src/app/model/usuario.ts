export class Usuario {
    
    constructor(
        public _id: String,
        public nombre: String,
        public apellido: String,
        public correo: String,
        public contrasena: String,
        public generos: Array<String>,
        public favoriteMovies: Array<String>,
        public rol: String,
        public imagen: String
      
    ) {

    }
}
