import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/interfaces/menu-item';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  listaItems:MenuItem[]=[] /* Solo guarda cosas de menuItem */
  /* listaItems:any[]=[] Guarda cualquier cosa (literal) */
  constructor() { }

  ngOnInit() {
  }


}
