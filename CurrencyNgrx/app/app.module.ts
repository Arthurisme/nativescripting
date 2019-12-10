import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import {NativeScriptHttpClientModule} from "nativescript-angular/http-client";


import { AppComponent } from "./app.component";
import {CoreModule} from "~/core/core.module";

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, CoreModule.forRoot()],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
