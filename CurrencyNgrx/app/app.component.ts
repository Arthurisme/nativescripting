import { Component, OnInit } from "@angular/core";
import {CurrencyService} from "~/currency/services/currency.service";
import {Currency} from "~/currency/models/currency.model";
import {Observable} from "rxjs";


@Component({
  selector: "my-app",
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  // Your TypeScript logic goes here

  currencies$ : Observable<Currency[]>;


  constructor(private currencyService: CurrencyService){}

  ngOnInit() {
    this.currencies$ = this.currencyService.getCurrencyData();
  }
}
