import {
  NgModule,
  NO_ERRORS_SCHEMA,
  NgModuleFactoryLoader,
} from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import {NativeScriptRouterModule, NSModuleFactoryLoader} from 'nativescript-angular/router';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { reducer } from './kitten/state/reducers/kitten.reducer';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {AppRoutingModule} from "~/app.routing";


// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    CoreModule.forRoot(),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
  ],
  providers: [
    { provide: NgModuleFactoryLoader, useClass: NSModuleFactoryLoader },
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
