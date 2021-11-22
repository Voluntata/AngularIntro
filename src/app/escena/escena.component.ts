import { Component, Input, OnInit } from '@angular/core';
//import { fraseObj } from '../interfase';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css'],
})
export class EscenaComponent implements OnInit {

  //@Input() frase: fraseObj[] = [];
  @Input() frase:string[] =[];

  constructor() {}
  ngOnInit(): void {}

  i: number = -1;
  currentSentence = this.frase[this.i];

  next(items: string[], index: number): void {
    if (index === this.i) {
      index += 1;
      this.currentSentence = items[index];
      this.i++;

      if (this.i === items.length - 1) {
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

  }

  prev(items: string[], index: number): void {
    if (index === this.i) {
      index -= 1;
      this.currentSentence = items[index];
      this.i--;
      if (this.i - 1 < 0) {
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
