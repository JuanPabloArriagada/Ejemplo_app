import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  usr:string=''

  constructor() { }

  ngOnInit() {
  }

  enviar(){
    console.log('Enviado');
    console.log(this.usr)
  }
}
