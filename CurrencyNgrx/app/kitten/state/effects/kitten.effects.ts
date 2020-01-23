import { Injectable } from '@angular/core';
import { Effect, Actions,ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import * as kittenActions from '../actions';
import { KittenService } from '../../services/kitten.service';

@Injectable()
export class KittenEffects {
    constructor(
        private actions$: Actions,
        private kittenService: KittenService,
    ) {}

    @Effect()
    loadCurrencies = this.actions$

        .pipe(
            ofType(kittenActions.LOAD_KITTEN),
            switchMap(() => this.kittenService.getKittenData()),
            map(currencies => new kittenActions.LoadKittenSuccess(currencies)),
            catchError(error => of(new kittenActions.LoadKittenFail(error))),
        );
}
