import {State} from "@ngrx/store";
import {Currency} from "~/currency/models/currency.model";

export interface State {

    loading : boolean;
    data: Currency[];

}


// @ts-ignore
export const initialState: State = {

    loading : false,
    data: [{
        "id": "Abyssinian",
        "name": "Abyssinian",
        "origin": "Natural",
        "rank": "1",
        "price_usd": "1200",
        "body_type": "Oriental"
    },
        {
            "id": "Abyssinian",
            "name": "Abyssinian",
            "origin": "Natural",
            "rank": "1",
            "price_usd": "1200",
            "body_type": "Oriental"
        },
        {
            "id": "Abyssinian",
            "name": "Abyssinian",
            "origin": "Natural",
            "rank": "1",
            "price_usd": "1200",
            "body_type": "Oriental"
        },
        {
            "id": "Chartreux",
            "name": "Chartreux",
            "origin": "Natural",
            "rank": "2",
            "price_usd": "900",
            "body_type": "Cobby"
        },
        {
            "id": "Sphynx",
            "name": "Sphynx",
            "origin": "Natural",
            "rank": "3",
            "price_usd": "800",
            "body_type": "Normal"
        },
        {
            "id": "Persian",
            "name": "Persian",
            "origin": "Mutation",
            "rank": "4",
            "price_usd": "1200",
            "body_type": "Cobby"
        },
    ],
};
