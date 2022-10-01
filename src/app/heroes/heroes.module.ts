import { NgModule } from "@angular/core";
import {CommonModule} from "@angular/common";

import {HeroeComponent} from "./heroe/herore.component";
import {ListadoComponent} from "./listado/listado.component";


@NgModule({
  //Aca se declaran los componentes que se van a usar en este modulo
  declarations: [
    HeroeComponent,
    ListadoComponent
  ],

  //Aca adentro solo van modulos que se usarán en este modulo.
  imports: [
    CommonModule
  ],
  //Aca se exportan los componentes que se van a usar fuera de este modulo
  exports: [ListadoComponent, HeroeComponent]
})
export class HeroesModule {}

