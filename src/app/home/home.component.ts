import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  frases = [

    "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial",

    "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes.",

    "L'heroi va decidir travessar la porta que el portava a casa",

    "Mentrestant, altres heroes no van tenir tanta sort en la seva elecció ..."

  ]
  // frases =[
  //   {txt :"El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial",
  //    img: "src\assets\img\1.jpg"},
  //    {txt :"Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes.",
  //    img: "src\assets\img\2.jpg"},
  //    {txt :"L'heroi va decidir travessar la porta que el portava a casa",
  //    img: "src\assets\img\3.jpg"},
  //    {txt :"Mentrestant, altres heroes no van tenir tanta sort en la seva elecció ...",
  //    img: "src\assets\img\4.jpg"},
  // ]
  constructor() { }

  ngOnInit(): void {
  }

  isOpen:boolean = false;
  open(){
    this.isOpen = true;
    let home:HTMLElement = document.querySelector('.home') as HTMLElement;
    home.style.display = 'none';
  }
}
