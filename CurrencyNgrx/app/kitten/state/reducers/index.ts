import {
    ActionReducerMap,
    createSelector,
    createFeatureSelector,
} from '@ngrx/store';

import * as fromKitten from './kitten.reducer';

export interface State {
    kitten: fromKitten.State;
}

// @ts-ignore
export const reducers: ActionReducerMap<State> = {
    kitten: fromKitten.reducer,
};

export const getFeatureState = createFeatureSelector<State>('kitten');

export const getKittenState = createSelector(
    getFeatureState,
    (state: State) => state.kitten,
);

export const getAllCurrencies = createSelector(
    getKittenState,
    fromKitten.getCurrencies,
);

export const getCurrenciesLoading = createSelector(
    getKittenState,
    fromKitten.getCurrenciesLoading,
);
