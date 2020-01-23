import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import {KittenListComponent} from './containers/kitten-list.component';
import {NativeScriptCommonModule} from "nativescript-angular/common";
import {KittenRoutingModule} from "~/kitten/kitten.routing";


import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {reducers} from "~/kitten/state/reducers";
import {KittenEffects} from "~/kitten/state/effects";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        KittenRoutingModule,
        StoreModule.forFeature('kitten',reducers),
        EffectsModule.forFeature([KittenEffects])

    ],
    exports: [],
    declarations: [KittenListComponent],
    providers: [],
    schemas: [NO_ERRORS_SCHEMA],
})
export class KittenModule {
}
