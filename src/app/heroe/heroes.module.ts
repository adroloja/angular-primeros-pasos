import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from "./heroe.component";
import { ListadoComponent } from "./listado/listado.component";
import { Heroe1Component } from './heroe1/heroe1.component';


@NgModule({
    declarations: [
        ListadoComponent,
        Heroe1Component
    ],
    exports: [
        ListadoComponent
    ],
    imports: [
        CommonModule
    ]
})
export class HeroesModule{}