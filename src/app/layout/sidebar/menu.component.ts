import {Component} from '@angular/core';

import {NgForOf, NgIf} from "@angular/common";
import {MenuitemComponent} from "@nova/sidebar/menuitem.component";
import {LayoutService} from "@nova/layout.service";
import {AppMenu} from "@nova/app.menu";

@Component({
   selector: 'app-menu',
   standalone: true,
   imports: [MenuitemComponent, NgIf, NgForOf],
   templateUrl: './menu.component.html',
})
export class MenuComponent {
   model: any[] = [];

   constructor(public layoutService: LayoutService) {
   }

   ngOnInit() {
      this.model = AppMenu;
   }
}
