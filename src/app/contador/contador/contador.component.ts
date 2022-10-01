import {Component} from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1 style="text-align: center">Hola mami te quiero mucho! ♥</h1>
    <h1 style="text-align: center">{{titulo}}</h1>

    <div style="text-align: center">
      <button (click)=acumular(base)> acumular + {{base}} </button>
      <span> {{numero}} </span>
      <button (click)=acumular(-base)> disminuir - {{base}} </button>
    </div>

    <div style="text-align: center">
      <h3> La base es: <strong>{{base}}</strong> </h3>
    </div>
  `
})

export class contadorComponent {
  public titulo: string = 'Acumulador App';
  public numero: number = 10;
  public base  : number = 5;

  public acumular(valor: number) {
    this.numero += valor;
  }
  // public Sumar(): void {
  //   this.numero += 1;
  // }
  // public Restar(): void {
  //   this.numero -= 1;
  // }
}
