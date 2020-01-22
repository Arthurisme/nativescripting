import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

import * as fromCurrency from '../state/reducers';
import * as currencyActions from '../state/actions';

import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {Currency} from "~/currency/models/currency.model";


@Component({
    moduleId: module.id,
    selector: 'app-currency-list',
    templateUrl: 'currency-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,

})

export class CurrencyListComponent implements OnInit {
    currency$: Observable<Currency[]>;
    loading$: Observable<boolean>;



    constructor(private store: Store<fromCurrency.State>) {
        this.currency$ = store.select(fromCurrency.getAllCurrencies);
        this.loading$ = store.select(fromCurrency.getCurrenciesLoading);

    }

    ngOnInit() {
        this.store.dispatch(new currencyActions.LoadCurrency() );
    }
}
