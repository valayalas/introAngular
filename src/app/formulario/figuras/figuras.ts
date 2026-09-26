import { Component } from '@angular/core';

@Component({
  selector: 'app-figuras',
  standalone: false,
  templateUrl: './figuras.html',
  styleUrl: './figuras.css',
})
export class Figuras {
  num1:string='';
  num2:string='';
  resultado:number=0;
  area:string=''

  cuadrado():void{ 
    this.resultado= parseInt(this.num1)*parseInt(this.num2) 
  }
  rectangulo():void{ 
    this.resultado= parseInt(this.num1)*parseInt(this.num2) 
  }
  circulo():void{ 
    this.resultado= Math.PI * Math.pow(parseFloat(this.num1), 2); 
  }
  pentagono():void{ 
    this.resultado= (5 * parseFloat(this.num1) * parseFloat(this.num2)) / 2; 
  }
  triangulo(): void {
  this.resultado = (parseFloat(this.num1) * parseFloat(this.num2)) / 2;
  }

  ejercicio(): void {

    if (this.area === 'cuadrado') {
      this.cuadrado();
    }

    if (this.area === 'rectangulo') {
      this.rectangulo();
    }

    if (this.area === 'circulo') {
      this.circulo();
    }

    if (this.area === 'pentagono') {
      this.pentagono();
    }
    
    if (this.area === 'triangulo') {
      this.triangulo();
    }
  }
}
