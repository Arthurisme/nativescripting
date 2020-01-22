import {Currency} from "~/currency/models/currency.model";

import * as currencyActions from '../actions';
import {State,initialState} from "~/currency/state/states/currency.state";
export { State, initialState }  from "~/currency/state/states/currency.state";




export function reducer(
    state= initialState,
    action: currencyActions.Actions,
): any {
    switch (action.type) {
        case currencyActions.LOAD_CURRENCY: {
            return {
                loading: true,
                ...state,
            };
        }

        case currencyActions.LOAD_CURRENCY_SUCCESS: {
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        }
        case currencyActions.LOAD_CURRENCY_FAIL: {
            return {
                loading: false,
                ...state,
            };
        }
        default: {
            return state;
        }
    }
}
// @ts-ignore
export const getCurrencies = (state: State) => state.data;


// @ts-ignore
export const getCurrenciesLoading = (state: State) => state.loading;
