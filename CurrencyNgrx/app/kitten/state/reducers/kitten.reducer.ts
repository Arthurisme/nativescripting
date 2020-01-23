import {Kitten} from "~/kitten/models/kitten.model";

import * as kittenActions from '../actions';
import {State,initialState} from "../states";
export { State, initialState }  from "../states";




export function reducer(
    state= initialState,
    action: kittenActions.Actions,
): any {
    switch (action.type) {
        case kittenActions.LOAD_KITTEN: {
            return {
                loading: true,
                ...state,
            };
        }

        case kittenActions.LOAD_KITTEN_SUCCESS: {
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        }
        case kittenActions.LOAD_KITTEN_FAIL: {
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
