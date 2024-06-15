import {Component, ElementRef, inject} from '@angular/core';
import {MenuComponent} from "./menu.component";
import {LayoutService} from "@nova/layout.service";

@Component({
   selector: 'app-sidebar',
   standalone: true,
   imports: [MenuComponent],
   templateUrl: './sidebar.component.html',
   styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
   layoutService = inject(LayoutService)

   constructor(public el: ElementRef) {
   }
}
