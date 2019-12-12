import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  genders: string[];
  constructor() {
    let allGenders: [ 'Romance', 'Comedia', 'Drama', 'Anime', 'Acción', 'Documentales'];
    this.genders = allGenders;
  }

  ngOnInit() {
  }

}
