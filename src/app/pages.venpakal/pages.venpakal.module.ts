import { NgModule } from '@angular/core';

import { PagesVenpakalComponent } from './pages.venpakal.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesVenpakalRoutingModule } from './pages-venpakal-routing.module';
import { VenpakalThemeModule } from '../@theme.venpakal/venpakal.theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';

const PAGES_COMPONENTS = [
  PagesVenpakalComponent,
];

@NgModule({
  imports: [
    PagesVenpakalRoutingModule,
    VenpakalThemeModule,
    DashboardModule,
    MiscellaneousModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class PagesVenpakalModule {
}
