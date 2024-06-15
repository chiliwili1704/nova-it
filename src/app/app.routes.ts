import {Routes} from '@angular/router';
import {LayoutComponent} from "@nova/layout.component";

export const routes: Routes = [{
   path: '', component: LayoutComponent, children: [{
      path: 'dashboard',
      loadComponent: () => import("@nova/dashboard/dashboard.component").then(value => value.DashboardComponent)
   },{
      path:'ticket',
      loadComponent:()=>import("@nova/sistemas/ticket/ticket.component").then(value => value.TicketComponent)
   }]
}];
