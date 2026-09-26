import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { FormsModule } from '@angular/forms';
import { HeroesList } from './héroes/heroes-list/heroes-list';
import { HeroesFilterPipe } from './heroes/heroes-filter-pipe';
import { OperasBas } from './formulario/operas-bas/operas-bas';
import { Figuras } from './formulario/figuras/figuras';
import { Palindromo } from './formulario/palindromo/palindromo';
import { Triangulo } from './formulario/triangulo/triangulo';
import { Login } from './formulario/login/login';

@NgModule({
  declarations: [
    App,
    HeroesList,
    HeroesFilterPipe,
    OperasBas,
    Figuras,
    Palindromo,
    Triangulo,
    Login,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
