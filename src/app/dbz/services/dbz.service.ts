import {Injectable} from "@angular/core";
import {Personaje} from "../interfaces/dbz.interface";

@Injectable()
export class DbzService{

  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 8500
    }];

  get personajes(): Personaje[] {       // <----- Obtener acceso a los personajes y obtener la lista
    return [...this._personajes];
  }

  constructor() {
  }

  agregarPersonaje(argumento : Personaje) {
    this._personajes.push(argumento);
  }
  // nuevo: Personaje = {
  //   nombre: 'Maestro Roshi',
  //   poder: 1000
  // }

  // agregarNuevoPersonaje( argumento: Personaje ){
  //   this.personajes.push( argumento );
  // }
}
