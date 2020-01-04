import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import {CurrencyListComponent} from './containers/currency-list.component';
import {NativeScriptCommonModule} from "nativescript-angular/common";
import {CurrencyRoutingModule} from "~/currency/currency.routing";


import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {reducers} from "~/currency/reducers";
import {CurrencyEffects} from "~/currency/effects";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        CurrencyRoutingModule,
        StoreModule.forFeature('currency',reducers),
        EffectsModule.forFeature([CurrencyEffects])

    ],
    exports: [],
    declarations: [CurrencyListComponent],
    providers: [],
    schemas: [NO_ERRORS_SCHEMA],
})
export class CurrencyModule {
}
