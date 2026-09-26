import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  standalone: false,
  templateUrl: './operas-bas.html',
  styleUrl: './operas-bas.css',
})
export class OperasBas {
  num1:string='';
  num2:string='';
  resultado:number=0;
  resultado2:string=''

  sumar():void{ 
    this.resultado= parseInt(this.num1)+parseInt(this.num2) 
  }
  restar():void{ 
    this.resultado= parseInt(this.num1)-parseInt(this.num2) 
  }
  multiplicar():void{ 
    this.resultado= parseInt(this.num1)*parseInt(this.num2) 
  }
  dividir():void{ 
    this.resultado= parseInt(this.num1)/parseInt(this.num2) 
  }

  ejercicio(): void {

    if (this.resultado2 === 'sumar') {
      this.sumar();
    }

    if (this.resultado2 === 'restar') {
      this.restar();
    }

    if (this.resultado2 === 'multiplicar') {
      this.multiplicar();
    }

    if (this.resultado2 === 'dividir') {
      this.dividir();
    }

  }
}
