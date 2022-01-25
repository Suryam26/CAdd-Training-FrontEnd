import { Component, OnInit } from '@angular/core';
import { Rates } from '../mock-rates';
import { Rate } from '../rate';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
  rates: Rate = Rates;

  given: number = 0;
  converted?: number = 0;
  from: string = "USD";
  to: string = "USD";

  constructor() { }

  ngOnInit(): void {
  }

  convert(): void {
    let ans = (this.given/this.rates[this.from]) * this.rates[this.to];
    this.converted = parseFloat(ans.toFixed(2));
  }
}
