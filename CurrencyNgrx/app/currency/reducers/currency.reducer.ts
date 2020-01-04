import {Currency} from "~/currency/models/currency.model";
import {State} from "@ngrx/store";
import * as currencyActions from '../actions';


export interface State {

    loading : boolean;
    data: Currency[];

}


// @ts-ignore
export const initialState: State = {

    loading : false,
    data: [{
        "id": "bitcoin",
        "name": "Bitcoin",
        "symbol": "BTC",
        "rank": "1",
        "price_usd": "7234.07620572",
        "price_btc": "1.0",
        "24h_volume_usd": "19740079033.9",
        "market_cap_usd": "131187620916",
        "available_supply": "18134675.0",
        "total_supply": "18134675.0",
        "max_supply": "21000000.0",
        "percent_change_1h": "0.21",
        "percent_change_24h": "-0.67",
        "percent_change_7d": "-0.51",
        "last_updated": "1577887476"
    },
    ],
};

export function reducer(
    state = initialState,
    action: currencyActions.Actions,
): State {
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
