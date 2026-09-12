import { Component, signal } from '@angular/core';
 
@Component({
  selector: 'app-root',
  standalone: false,
  //template:`
  //<div>
  //  <h1>{{title}}</h1>
  //  <app-heroes-list></app-heroes-list>
  //</div>
  //`,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  title:string="Vale"
 
  duplicarnumero(a:number):number{
    return a*2
  }
 
  Pelicula={
    titulo: "Spider-Man",
    fechaLanzamiento: new Date(),
    precio: 235
  }
}