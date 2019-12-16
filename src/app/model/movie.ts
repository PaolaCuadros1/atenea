export class Movie {
    constructor(
        // el modelo de front debe ser igual al modelo back incluyendo public 
        public _id: String,
        public name: string,
        public duration: String,
        public image: String,
        public image2: String,
        public gender: String,
        public url: String,
        public synopsis: String
    ){}
}