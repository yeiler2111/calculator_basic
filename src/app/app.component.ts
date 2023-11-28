import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mini calculadora';
  numero1: string = "0";
  numero2: string = "0";
  resultado: number = 0;

  suma(): void {
    this.resultado =  parseInt(this.numero1)+parseInt(this.numero2)
  }
  resta():void{
    this.resultado = parseInt(this.numero1)-parseInt(this.numero2)
  }
  Producto():void{
    this.resultado = parseInt(this.numero1)*parseInt(this.numero2)
  }
}
