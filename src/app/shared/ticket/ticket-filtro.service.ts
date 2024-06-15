import {Injectable} from '@angular/core';
import {TicketKey} from "./ticket.key";
import {Executor} from "@nova/executor";

@Injectable({
   providedIn: 'root'
})
export class TicketFiltroService extends Executor<TicketKey> {
   constructor() {
      super();
   }
}
