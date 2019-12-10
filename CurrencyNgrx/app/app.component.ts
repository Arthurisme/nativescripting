import { Component, OnInit } from "@angular/core";
import {CurrencyService} from "~/currency/services/currency.service";
import {Currency} from "~/currency/models/currency.model";
import {Observable} from "rxjs";


@Component({
  selector: "my-app",
  template: `
    <ActionBar title="My App" class="action-bar"></ActionBar>
    <!-- Your UI components go here -->
      
      <StackLayout>
        <ListView [items] = "currencies$ | async">
          <ng-template let-item="item">
            <StackLayout>
              <Label [text]="item.name"></Label>
            </StackLayout>
          </ng-template>
        </ListView>
      </StackLayout>
  `
})
export class AppComponent implements OnInit {
  // Your TypeScript logic goes here

  currencies$ : Observable<Currency[]>;


  constructor(private currencyService: CurrencyService){}

  ngOnInit() {
    this.currencies$ = this.currencyService.getCurrencyData();
  }
}
