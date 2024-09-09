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

  constructor(private alertcontroller:AlertController){}

  ngOnInit() {
  }

  async mostrarAlerta() /* SIempre que haya await va con async, esto es por si no carga la alerta */
    {
      const alert = await this.alertcontroller.create({
        header: 'Alerta de control',
        subHeader: 'Mensaje si es que',
        message: 'A message should be a short, complete sentence.',
        buttons: [{
          text:'Aceptar',
          handler:()=>{
            console.log("ACEPTAR!");
          }
        },
        {
          text:'Cancelar',
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

