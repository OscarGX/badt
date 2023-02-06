import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { EpNotFoundComponent } from './error-pages/ep-not-found/ep-not-found.component';
import { EpInternalServerComponent } from './error-pages/ep-internal-server/ep-internal-server.component';
import { EpForbiddenComponent } from './error-pages/ep-forbidden/ep-forbidden.component';

@NgModule({
  declarations: [
    AppComponent,
    EpNotFoundComponent,
    EpInternalServerComponent,
    EpForbiddenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
