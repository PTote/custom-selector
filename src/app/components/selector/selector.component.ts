import { Component, ElementRef, Input, OnInit, QueryList, ViewChildren } from '@angular/core';

export interface CreditCards {
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
  placeHolder: string = 'Selecciona una cuenta'
  currentCheck: string = '';
  lastCheck: string = '';

  showOptionsList: boolean = false;
  // creditCardList: CreditCards[] = creditCards;

  @Input() initValue: string = '';
  @Input() showPlaceHolder: boolean = true;
  @Input() creditCardList: CreditCards[] = [];
  @ViewChildren('radioInput') radioInputs!: QueryList<ElementRef>;

  constructor() { }

  ngOnInit(): void {

    [this.cardSelected] = this.findCard(this.initValue);

  }

  ngAfterViewInit(): void {
    const currentRadio = document.getElementById(`${this.initValue}`) as HTMLInputElement;
    currentRadio.checked = true;
    this.lastCheck = this.initValue;
  }


  showOptions() {
    this.showOptionsList = !this.showOptionsList;
  }



  optionSelected(numberCard: string) {
    this.currentCheck = numberCard;

    const currentRadio = document.getElementById(`${numberCard}`) as HTMLInputElement;

    const cardSelected = this.findCard(numberCard);

    if (cardSelected && cardSelected.length > 0) {
      [this.cardSelected] = cardSelected;
      this.showPlaceHolder = false;
      this.showOptionsList = false;
    }

    if (this.currentCheck !== this.lastCheck && this.lastCheck !== '') {
      const radioLast = document.getElementById(`${this.lastCheck}`) as HTMLInputElement;
      radioLast.checked = false;
    }

    this.lastCheck = numberCard;
    currentRadio.checked = true;

  }

  findCard(numberCard: string){
    return this.creditCardList.filter((card) => card.numberCard === numberCard);
  }

}
