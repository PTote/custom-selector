import { Component, OnInit } from '@angular/core';
import creditCards from '../../data/credit-cards.json';

export interface CreditCards{
  name: string;
  numberCard: string;
  productCard: string;
}

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {

descriptionCard: string = '';
numberCard: string = '';
cardSelected!: CreditCards;
showPlaceHolder: boolean = true;
placeHolder: string = 'Selecciona una cuenta'
currentCheck: number = 0;
lastCheck: number = 0;

  showOptionsList: boolean = false;
  creditCardList: CreditCards[] = creditCards;

  constructor() { }

  ngOnInit(): void {
  }

showOptions(){
  this.showOptionsList = !this.showOptionsList;
}

optionSelected(numberCard: string, idCheck: number){

this.currentCheck = idCheck;

[this.cardSelected] = this.creditCardList.filter((card) => card.numberCard === numberCard);
this.showPlaceHolder = false;
this.showOptionsList = false;

console.log(this.currentCheck);
console.log(this.lastCheck);

if(this.currentCheck !== this.lastCheck && this.lastCheck > 0){
  const radioElement = document.getElementById(`${this.lastCheck}`) as HTMLInputElement;
  radioElement.checked = false;
}

this.lastCheck = idCheck;

}

}
