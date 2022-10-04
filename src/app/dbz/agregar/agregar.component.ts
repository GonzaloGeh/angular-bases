import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Personaje} from "../interfaces/dbz.interface";
import {DbzService} from "../services/dbz.service";


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})

export class AgregarComponent {

  @Input() nuevo: Personaje = {   // <--- Inicializar el formulario con valores por defecto
    nombre: 'Maestro Roshi',
    poder: 5000
  }

  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
  constructor( private dbzService: DbzService) {
  }

  agregar(){
    if (this.nuevo.nombre.trim().length === 0) { return; }  // <----- Validar que el nombre no este vacio

    // console.log( this.nuevo );
    // this.onNuevoPersonaje.emit( this.nuevo );
    this.dbzService.agregarPersonaje( this.nuevo );

    this.nuevo = {      // <--- Limpiar el formulario
      nombre: '',
      poder: 0
    }
  }

}


