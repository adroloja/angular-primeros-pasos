import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ContadorModule } from './contador/contador.module';
import { HeroeComponent } from './heroe/heroe.component';
import { HeroesModule } from './heroe/heroes.module';
import { ListadoComponent } from './heroe/listado/listado.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroeComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
