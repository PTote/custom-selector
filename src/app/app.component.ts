import { Component } from '@angular/core';
import { CreditCards } from './components/selector/selector.component';
import creditCards from './data/credit-cards.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'custom-select';
  creditCardList: CreditCards[] = creditCards;
}
