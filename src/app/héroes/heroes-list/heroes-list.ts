import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './heroes-list.html',
  styleUrl: './heroes-list.css',
})
export class HeroesList {

  imageWidth:number=40;
  imageMargin:number=2;
  muestraImagen:boolean=true;
  listFilter:string='';

  //enlace de evento
  showImage():void{ 
    this.muestraImagen=!this.muestraImagen;
    
  }

  heroes:any[]=[
    {
      imagen: "https://dragonball-api.com/characters/goku_normal.webp",
      nombre: "Goku",
      descripcion: "kame hame ha",
      race: "Sayayin",
      ki:900,
     },

    {
      imagen: "https://dragonball-api.com/characters/goku_normal.webp",
      nombre: "Vegueta",
      descripcion: "Death ball",
      race: "Sayayin",
      ki:8500,
     },

    {
      imagen: "https://dragonball-api.com/characters/picolo_normal.webp",
      nombre: "Piccolo",
      descripcion: "Mankakosappo",
      race: "Namekiano",
      ki:7000,
     },

    {
      imagen: "https://dragonball-api.com/characters/Freezer.webp",
      nombre: "Freezer",
      descripcion: "Death ball",
      race: "Alien ",
      ki:9500,
     },
  ]
}

//[]
//{ }
//<>