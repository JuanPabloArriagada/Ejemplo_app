import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.page.html',
  styleUrls: ['./alertas.page.scss'],
})
export class AlertasPage implements OnInit {

  mensaje:String=''

  alertButtons = [{
    /* Nombre del boton */
    text:'Aceptar',
    cssClass:'color-aceptar',
    handler:()=>{/* Hace cosas despues de apretar el boton */
      console.log("ACEPTAR!");
    }
  },
  {
    text:'Cancelar',
    cssClass:'color-cancelar',
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

  constructor(private alertcontroller:AlertController){}

  ngOnInit() {
  }


  async mostrarAlerta(event:any) /* Siempre que haya await va con async, esto es por si no carga la alerta */
    {
      const alert = await this.alertcontroller.create({
        header: 'Alerta de control',
        subHeader: 'Mensaje si es que',
        message: 'A message should be a short, complete sentence.',
        buttons: [{
          id:'Id boton controller',
          text:'Aceptar',
          cssClass:'color-aceptar',
          handler:()=>{
            console.log("ACEPTAR!");
            console.log(event)
          }
        },
        {
          text:'Cancelar',
          cssClass:'color-cancelar',
          role:'cancel',
          handler:()=>{
            console.log("CERRAR!")
          }
        }
      ],
      });
  
      await alert.present();
  }
}

