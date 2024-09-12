import { Component, OnInit } from '@angular/core';
import { usuarioLog } from 'src/app/interfaces/usuario-log';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  usr:usuarioLog={
    username:'',
    password:'',
  }

  constructor() { }

  ngOnInit() {
  }

  enviar(){
    console.log('Enviado');
    console.log(this.usr)
  }
}
