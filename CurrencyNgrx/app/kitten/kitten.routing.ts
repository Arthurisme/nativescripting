import {NgModule} from '@angular/core';
import {Routes} from "@angular/router";
import {NativeScriptRouterModule} from "nativescript-angular";
import {KittenListComponent} from "~/kitten/containers/kitten-list.component";


const routes: Routes = [
    { path: '', component: KittenListComponent},
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule],

})
export class KittenRoutingModule {
}
