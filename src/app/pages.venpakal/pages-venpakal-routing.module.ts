import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesVenpakalComponent } from './pages.venpakal.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [{
  path: '',
  component: PagesVenpakalComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesVenpakalRoutingModule {
}
