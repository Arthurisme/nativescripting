import { Injectable } from '@angular/core';
import { Effect, Actions,ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import * as currencyActions from '../actions';
import { CurrencyService } from '../../services/currency.service';

@Injectable()
export class CurrencyEffects {
    constructor(
        private actions$: Actions,
        private currencyService: CurrencyService,
    ) {}

    @Effect()
    loadCurrencies = this.actions$

        .pipe(
            ofType(currencyActions.LOAD_CURRENCY),
            switchMap(() => this.currencyService.getCurrencyData()),
            map(currencies => new currencyActions.LoadCurrencySuccess(currencies)),
            catchError(error => of(new currencyActions.LoadCurrencyFail(error))),
        );
}
