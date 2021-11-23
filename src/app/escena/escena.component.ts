import { Component, Input, OnInit } from '@angular/core';
import { fraseObj } from '../interfase';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css'],
})
export class EscenaComponent implements OnInit {

  @Input() frase: fraseObj[] = [];
  // @Input() frase:string[] =[];

  constructor() { }
  ngOnInit(): void {
    this.currentSentence = this.frase[0] //iniciar la pagina con primer elemento activo
  }

  counter: number = 0; //iniciar el contador
  currentSentence: object = this.frase[this.counter]; // declarar el elemeto activo


  next(items: object[], index: number): void {
// si elemento es activo pasar a proximo elemento
    if (index === this.counter) {
      index += 1;
      this.currentSentence = items[index];
      this.counter++;
      // desactivar el boton next al llegar al final del array
      if (this.counter === items.length - 1) {
        let nextBtn: HTMLButtonElement = document.getElementById(
          'next'
        ) as HTMLButtonElement;
        nextBtn.disabled = true;
      } else {
        // mantener el boton prev activado
        let prevBtn: HTMLButtonElement = document.getElementById(
          'prev'
        ) as HTMLButtonElement;
        prevBtn.disabled = false;
      }
    }

  }
//logica repite el boton next, en sentido contrario
  prev(items: object[], index: number): void {
    if (index === this.counter) {
      index -= 1;
      this.currentSentence = items[index];
      this.counter--;
      if (this.counter - 1 < 0) {
        let prevBtn: HTMLButtonElement = document.getElementById(
          'prev'
        ) as HTMLButtonElement;
        prevBtn.disabled = true;
      } else {
        let nextBtn: HTMLButtonElement = document.getElementById(
          'next'
        ) as HTMLButtonElement;
        nextBtn.disabled = false;
      }
    }
  }



}
