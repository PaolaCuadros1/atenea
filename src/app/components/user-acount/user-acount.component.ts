import { Component, OnInit } from '@angular/core';
import * as M from '../../../assets/materialize/js/materialize.js';

@Component({
  selector: 'app-user-acount',
  templateUrl: './user-acount.component.html',
  styleUrls: ['./user-acount.component.css']
})
export class UserAcountComponent implements OnInit {
  options = {fullWidth: true, indicators: true};

  constructor() { }

  ngOnInit() {
    var elems = document.querySelectorAll('.carousel');
    var instance = M.Carousel.init(elems, this.options);
  }
}
