import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.page.html',
  styleUrls: ['./botones.page.scss'],
})
export class BotonesPage implements OnInit {

  saludo:string="";

  constructor() { }

  ngOnInit() {
    this.saludo='...' /* Este metodo se carga solo mientras la pagina carga */
  }

  onClick(){
    this.saludo='Hola desde el botón'
  }
}
