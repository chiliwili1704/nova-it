import {Component, Input} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {TooltipModule} from "primeng/tooltip";
import {Ticket} from "@nova/modelo";
import {NgClass} from "@angular/common";
import {PortapapelesService} from "./portapapeles.service";
import {formatearTicket} from "./util";

@Component({
   selector: 'app-ticket-portapapeles',
   standalone: true,
   imports: [ButtonModule, TooltipModule, NgClass],
   templateUrl: './ticket-portapapeles.component.html',
   styleUrl: './ticket-portapapeles.component.scss'
})
export class TicketPortapapelesComponent {
   @Input() data: Ticket
   @Input() dynamic: boolean
   constructor(private copiarService: PortapapelesService) {
   }
   copiar() {
      this.copiarService.copiarTextoAlPortapapeles(formatearTicket(this.data))
   }
}