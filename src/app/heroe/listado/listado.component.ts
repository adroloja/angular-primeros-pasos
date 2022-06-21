import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

 heroes: string[] = ['Ironman', 'Spiderman', 'Hulk', 'Thor'];

 nombres: any[] = [];
 nombre:any;

 borrado(){
  const hBorr = this.heroes.shift();
  this.nombre = hBorr;
  this.nombres.push(this.nombre);
 }

}
