import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Contador App';
  numero: number = 10;
  base: number = 5;

  acumula(valor: number){
    if(valor == 1){
      this.numero +=5;
    }else {
      this.numero -=5;
    }
  }

  acumular(valor: number){
    this.numero += valor;
  }
}
