/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';

import { AppComponent } from './app.component';
import { AppVenpakalRoutingModule } from './app-venpakal-routing.module';
import { VenpakalThemeModule } from './@theme.venpakal/venpakal.theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppVenpakalComponent } from './app.venpakal.component';

@NgModule({
  declarations: [AppVenpakalComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppVenpakalRoutingModule,

    NgbModule.forRoot(),
    VenpakalThemeModule.forRoot(),
    CoreModule.forRoot(),
  ],
  bootstrap: [AppVenpakalComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
})
export class AppVenpakalModule {
}
