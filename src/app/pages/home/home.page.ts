import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/interfaces/menu-item';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  /* Solo guarda cosas de menuItem */
  listaItems:MenuItem[]=[
    {
      ruta:'/botones',
      icono:'radio-button-on-outline',
      etiqueta:'Botones'
    },
    {
      ruta:'/alertas',
      icono:'alert-outline',
      etiqueta:'Alertas'
    },
    {
      ruta:'/formulario',
      icono:'reader-outline',
      etiqueta:'Formulario'
    },
    {
      ruta:'/actionsheet',
      icono:'albums-outline',
      etiqueta:'Action Sheet'
    }
  ] 
  /* listaItems:any[]=[] Guarda cualquier cosa (literal) */
  constructor() { }

  ngOnInit() {
  }


}
