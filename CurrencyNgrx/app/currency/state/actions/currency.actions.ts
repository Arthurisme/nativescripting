import {Action} from '@ngrx/store';
import {Currency} from "~/currency/models/currency.model";

export const LOAD_CURRENCY = '[CURRENCY] Load Currency';
export const LOAD_CURRENCY_FAIL = '[CURRENCY] Load Currency Failure';
export const LOAD_CURRENCY_SUCCESS = '[CURRENCY] Load Currency Success';


export class LoadCurrency implements Action{
    readonly type = LOAD_CURRENCY;

}

export class LoadCurrencyFail implements Action{
    readonly type = LOAD_CURRENCY_FAIL;

    constructor(public payload: any) {}

}

export class LoadCurrencySuccess implements Action{
    readonly type = LOAD_CURRENCY_SUCCESS;

    constructor(public payload: Currency[]){}
}

export type Actions = LoadCurrency | LoadCurrencyFail | LoadCurrencySuccess;