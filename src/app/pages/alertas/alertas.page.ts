import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.page.html',
  styleUrls: ['./alertas.page.scss'],
})
export class AlertasPage implements OnInit {

  mensaje:String=''

  constructor() { }
  alertButtons = [{
    /* Nombre del boton */
    text:'Aceptar',
    handler:()=>{/* Hace cosas despues de apretar el boton */
      console.log("ACEPTAR!");
    }
  },
  {
    text:'Cancelar',
    role:'cancel',
    handler:()=>{
      console.log("CERRAR!")
    }
  },
  {
    text:'Ejecutar Metodo',
    handler:()=>{
      this.mensaje='Cambio desde la alerta'
    }
  }
  ];
  ngOnInit() {
  }

}
