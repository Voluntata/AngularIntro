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

  constructor() {}
  ngOnInit(): void {
    this.currentSentence = this.frase[0]
  }

  counter: number = 0;
  currentSentence:object = this.frase[this.counter];


  next(items: object[], index: number): void {

    if (index === this.counter) {
      index += 1;
      this.currentSentence = items[index];
      this.counter++;
      if (this.counter === items.length - 1) {
        let nextBtn: HTMLButtonElement = document.getElementById(
          'next'
        ) as HTMLButtonElement;
        nextBtn.disabled = true;
      } else {
        let prevBtn: HTMLButtonElement = document.getElementById(
          'prev'
        ) as HTMLButtonElement;
        prevBtn.disabled = false;
      }
    }
    let container:HTMLElement = document.querySelector('.container') as HTMLElement;
    let bcgImg:string = '';
    container.style.backgroundImage = bcgImg;

  }

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
