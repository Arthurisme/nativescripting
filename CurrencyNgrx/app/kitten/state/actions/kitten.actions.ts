import {Action} from '@ngrx/store';
import {Kitten} from "~/kitten/models/kitten.model";

export const LOAD_KITTEN = '[KITTEN] Load Kitten';
export const LOAD_KITTEN_FAIL = '[KITTEN] Load Kitten Failure';
export const LOAD_KITTEN_SUCCESS = '[KITTEN] Load Kitten Success';


export class LoadKitten implements Action{
    readonly type = LOAD_KITTEN;

}

export class LoadKittenFail implements Action{
    readonly type = LOAD_KITTEN_FAIL;

    constructor(public payload: any) {}

}

export class LoadKittenSuccess implements Action{
    readonly type = LOAD_KITTEN_SUCCESS;

    constructor(public payload: Kitten[]){}
}

export type Actions = LoadKitten | LoadKittenFail | LoadKittenSuccess;
