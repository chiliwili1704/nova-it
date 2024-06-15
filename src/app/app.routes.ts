import {Routes} from '@angular/router';
import {LayoutComponent} from "@nova/layout.component";

export const routes: Routes = [{
   path: '', component: LayoutComponent, children: [{
      path: '',
      loadComponent: () => import("@nova/dashboard/dashboard.component").then(value => value.DashboardComponent)
   },]
}];
