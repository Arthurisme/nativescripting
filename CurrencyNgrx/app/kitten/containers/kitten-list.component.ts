import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

import * as fromKitten from '../state/reducers';
import * as kittenActions from '../state/actions';

import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {Kitten} from "~/kitten/models/kitten.model";


@Component({
    moduleId: module.id,
    selector: 'app-kitten-list',
    templateUrl: 'kitten-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,

})

export class KittenListComponent implements OnInit {
    kitten$: Observable<Kitten[]>;
    loading$: Observable<boolean>;



    constructor(private store: Store<any>) {
        // this.kitten$ = store.select(fromKitten.getAllCurrencies);
        // @ts-ignore
        this.kitten$ = store.select(s => s.kitten.kitten.data);
        //this.loading$ = store.select(fromKitten.getCurrenciesLoading);
        this.loading$ = store.select(s => s.kitten.kitten.loading );

    }

    ngOnInit() {
        this.store.dispatch(new kittenActions.LoadKitten() );
    }
}



//
// s=  {
//     JS:   "kitten": {
//     JS:     "kitten": {
//         JS:       "loading": false,
//             JS:       "data": [
//             JS:         {
//             JS:           "id": "Abyssinian",
//                 JS:           "name": "Abyssinian",
//                 JS:           "origin": "Natural",
//                 JS:           "rank": "1",
//                 JS:           "price_usd": "1200",
//                 JS:           "body_type": "Oriental"
//             JS:         },
//         JS:         {
//             JS:           "id": "Abyssinian",
//                 JS:           "name": "Abyssinian",
//                 JS:           "origin": "Natural",
//                 JS:           "rank": "1",
//                 JS:           "price_usd": "1200",
//                 JS:           "body_type": "Oriental"
//             JS:         },
//         JS:         {
//             JS:           "id": "Abyssinian",
//                 JS:           "name": "Abyssinian",
//                 JS:           "origin": "Natural",
//                 JS:           "rank": "1",
//                 JS:           "price_usd": "1200",
//                 JS:           "body_type": "Oriental"
//             JS:         },
//         JS:         {
//             JS:           "id": "Chartreux",
//                 JS:           "name": "Chartreux",
//                 JS:           "origin": "Natural",
//                 JS:           "rank": "2",
//                 JS:           "price_usd": "900",
//                 JS:           "body_type": "Cobby"
//             JS:         },
//         JS:         {
//             JS:           "id": "Sphynx",
//                 JS:           "name": "Sphynx",
//                 JS:           "origin": "Natural",
//                 JS:           "rank": "3",
//                 JS:           "price_usd": "...

