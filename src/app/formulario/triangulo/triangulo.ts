import { Component } from '@angular/core';

@Component({
  selector: 'app-triangulo',
  standalone: false,
  templateUrl: './triangulo.html',
  styleUrl: './triangulo.css',
})
export class Triangulo {
  x1: number = 0;
  y1: number = 0;
  x2: number = 0;
  y2: number = 0;
  x3: number = 0;
  y3: number = 0;
  resultados: string = '';
  area: number = 0;
  triangulo: boolean = false;

  elTriangulo(): void{

    let puntoX1 = Number(this.x1);
    let puntoY1 = Number(this.y1);
    let puntoX2 = Number(this.x2);
    let puntoY2 = Number(this.y2);
    let puntoX3 = Number(this.x3);
    let puntoY3 = Number(this.y3);

    let operacion = puntoX1 * (puntoY2 - puntoY3) + puntoX2 * (puntoY3 - puntoY1) + puntoX3 * (puntoY1 - puntoY2);
    
    let operacionPositiva = operacion;
    if (operacion < 0) {
      operacionPositiva = -operacion;
    }

    let areaCalculada = operacionPositiva / 2;

    if (areaCalculada > 0) {
      this.triangulo = true;
      this.area = areaCalculada;
      this.resultados = 'Los puntos forman un triángulo.';
    } else {
      this.triangulo = false;
      this.area = 0;
      this.resultados = 'Los tres puntos no forman un triángulo porque son colineales.';
    }
  }
}


//{}
//<
//[]