import { Component } from '@angular/core';

@Component({
  selector: 'app-palindromo',
  standalone: false,
  templateUrl: './palindromo.html',
  styleUrl: './palindromo.css',
})
export class Palindromo {
  frase: string = '';
  vocales: string = '';
  totalVocales: number = 0;
  consonantes: string = '';
  totalConsonantes: number = 0;
  palindromo: string = '';

  lasVocales(): void {
    this.vocales = '';
    this.totalVocales = 0;
    for (let i = 0; i < this.frase.length; i++) {
      let c = this.frase[i];
      if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
        this.vocales = this.vocales + c + ' ';
        this.totalVocales = this.totalVocales + 1;
      }
    }

    if (this.vocales == '') {
      this.vocales = 'Nadadenada';
    }
  }

  lasConsonantes(): void {
    this.consonantes = '';
    this.totalConsonantes = 0;
    for (let i = 0; i < this.frase.length; i++) {
      let c = this.frase[i];
      if (c == 'b' || c == 'c' || c == 'd' || c == 'f' || c == 'g' || c == 'h' || c == 'j' || c == 'k' || c == 'l' || c == 'm' || c == 'n' || c == 'p' || c == 'q'
        || c == 'r' || c == 's' || c == 't' || c == 'v' || c == 'w' || c == 'x' || c == 'y' || c == 'z') {
          this.consonantes = this.consonantes + c + ' ';
          this.totalConsonantes = this.totalConsonantes + 1;
      }
    }

    if (this.consonantes == '') {
      this.consonantes = 'Nadadenada';
    }
  }

  verPalindromo(): void {
    let fraseSinEspacios = '';
    for (let i = 0; i < this.frase.length; i++) {
      let c = this.frase[i];
      if (c != ' ') {
        fraseSinEspacios = fraseSinEspacios + c;
      }
    }

    let alReves = '';
    for (let i = fraseSinEspacios.length - 1; i >= 0; i--) {
      alReves = alReves + fraseSinEspacios[i];
    }

    let iguales = true;
    for (let i = 0; i < fraseSinEspacios.length; i++) {
      if (fraseSinEspacios[i] != alReves[i]) {
        iguales = false;
      }
    }

    if (iguales == true && fraseSinEspacios.length > 0) {
      this.palindromo = 'Sí';
    } else {
      this.palindromo = 'No';
    }
  }

  ejercicio(): void {
    this.lasVocales();
    this.lasConsonantes();
    this.verPalindromo();
  }
}

//{}
//<
//[]